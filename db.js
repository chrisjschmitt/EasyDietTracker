/**
 * EasyDiet Tracker - IndexedDB Database Handler
 * Handles all data persistence for the app
 */

const DB_NAME = 'EasyDietTrackerDB';
const DB_VERSION = 1;

// Store names
const STORES = {
    SETTINGS: 'settings',
    FOODS: 'foods',
    DAILY_LOG: 'dailyLog'
};

class Database {
    constructor() {
        this.db = null;
        this.ready = this.init();
    }

    /**
     * Initialize the database
     */
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = () => {
                console.error('Failed to open database:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('Database opened successfully');
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Settings store (key-value pairs)
                if (!db.objectStoreNames.contains(STORES.SETTINGS)) {
                    db.createObjectStore(STORES.SETTINGS, { keyPath: 'key' });
                }

                // Foods store (imported food data)
                if (!db.objectStoreNames.contains(STORES.FOODS)) {
                    const foodsStore = db.createObjectStore(STORES.FOODS, { 
                        keyPath: 'id', 
                        autoIncrement: true 
                    });
                    foodsStore.createIndex('foodGroup', 'foodGroup', { unique: false });
                    foodsStore.createIndex('foodCategory', 'foodCategory', { unique: false });
                }

                // Daily log store (daily serving counts)
                if (!db.objectStoreNames.contains(STORES.DAILY_LOG)) {
                    const logStore = db.createObjectStore(STORES.DAILY_LOG, { keyPath: 'id' });
                    logStore.createIndex('date', 'date', { unique: false });
                }
            };
        });
    }

    /**
     * Ensure database is ready before operations
     */
    async ensureReady() {
        if (!this.db) {
            await this.ready;
        }
        return this.db;
    }

    // ============================================
    // Settings Operations
    // ============================================

    /**
     * Save a setting
     */
    async saveSetting(key, value) {
        await this.ensureReady();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.SETTINGS, 'readwrite');
            const store = transaction.objectStore(STORES.SETTINGS);
            const request = store.put({ key, value });

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Get a setting
     */
    async getSetting(key, defaultValue = null) {
        await this.ensureReady();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.SETTINGS, 'readonly');
            const store = transaction.objectStore(STORES.SETTINGS);
            const request = store.get(key);

            request.onsuccess = () => {
                resolve(request.result ? request.result.value : defaultValue);
            };
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Get all settings
     */
    async getAllSettings() {
        await this.ensureReady();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.SETTINGS, 'readonly');
            const store = transaction.objectStore(STORES.SETTINGS);
            const request = store.getAll();

            request.onsuccess = () => {
                const settings = {};
                request.result.forEach(item => {
                    settings[item.key] = item.value;
                });
                resolve(settings);
            };
            request.onerror = () => reject(request.error);
        });
    }

    // ============================================
    // Foods Operations
    // ============================================

    /**
     * Save all foods (clears existing and adds new)
     */
    async saveFoods(foods) {
        await this.ensureReady();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.FOODS, 'readwrite');
            const store = transaction.objectStore(STORES.FOODS);

            // Clear existing foods
            store.clear();

            // Add new foods - preserve original IDs (can be string or number)
            foods.forEach((food) => {
                store.add(food);
            });

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    /**
     * Get all foods
     */
    async getAllFoods() {
        await this.ensureReady();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.FOODS, 'readonly');
            const store = transaction.objectStore(STORES.FOODS);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Get foods grouped by food group
     */
    async getFoodsGrouped() {
        const foods = await this.getAllFoods();
        const grouped = {};

        foods.forEach(food => {
            if (!grouped[food.foodGroup]) {
                grouped[food.foodGroup] = [];
            }
            grouped[food.foodGroup].push(food);
        });

        return grouped;
    }

    /**
     * Get food count
     */
    async getFoodCount() {
        await this.ensureReady();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.FOODS, 'readonly');
            const store = transaction.objectStore(STORES.FOODS);
            const request = store.count();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Clear all foods
     */
    async clearFoods() {
        await this.ensureReady();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.FOODS, 'readwrite');
            const store = transaction.objectStore(STORES.FOODS);
            const request = store.clear();

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    // ============================================
    // Daily Log Operations
    // ============================================

    /**
     * Get today's date string
     */
    /** Commented out as was returning UTC date
    getTodayKey() {
        return new Date().toISOString().split('T')[0];
    }
    */

    //New code to return date in local time, not UTC
    getTodayKey() {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    /**
     * Save serving count for a food item
     */
    async saveServing(foodId, servings) {
        await this.ensureReady();
        const date = this.getTodayKey();
        const id = `${date}_${foodId}`;

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.DAILY_LOG, 'readwrite');
            const store = transaction.objectStore(STORES.DAILY_LOG);
            const request = store.put({ id, date, foodId, servings });

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Get today's servings
     */
    async getTodayServings() {
        await this.ensureReady();
        const date = this.getTodayKey();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.DAILY_LOG, 'readonly');
            const store = transaction.objectStore(STORES.DAILY_LOG);
            const index = store.index('date');
            const request = index.getAll(date);

            request.onsuccess = () => {
                const servings = {};
                request.result.forEach(item => {
                    servings[item.foodId] = item.servings;
                });
                resolve(servings);
            };
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Reset today's servings
     */
    async resetTodayServings() {
        await this.ensureReady();
        const date = this.getTodayKey();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.DAILY_LOG, 'readwrite');
            const store = transaction.objectStore(STORES.DAILY_LOG);
            const index = store.index('date');
            const request = index.openCursor(date);

            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }
            };

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    /**
     * Get serving for a specific food today
     */
    async getServing(foodId) {
        await this.ensureReady();
        const date = this.getTodayKey();
        const id = `${date}_${foodId}`;

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(STORES.DAILY_LOG, 'readonly');
            const store = transaction.objectStore(STORES.DAILY_LOG);
            const request = store.get(id);

            request.onsuccess = () => {
                resolve(request.result ? request.result.servings : 0);
            };
            request.onerror = () => reject(request.error);
        });
    }
}

// Export singleton instance
const db = new Database();
