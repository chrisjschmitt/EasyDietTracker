/**
 * EasyDiet Tracker - Main Application
 * Food consumption tracking PWA
 */

// ============================================
// Food Category Icons Map
// ============================================
const FOOD_ICONS = {
    // Fruits
    'apple': '🍎', 'banana': '🍌', 'orange': '🍊', 'grapes': '🍇', 
    'strawberry': '🍓', 'watermelon': '🍉', 'peach': '🍑', 'pear': '🍐',
    'cherry': '🍒', 'pineapple': '🍍', 'mango': '🥭', 'kiwi': '🥝',
    'lemon': '🍋', 'coconut': '🥥', 'avocado': '🥑', 'blueberry': '🫐',
    'fruit': '🍎', 'fruits': '🍇', 'citrus': '🍊', 'berries': '🫐',
    
    // Vegetables
    'carrot': '🥕', 'broccoli': '🥦', 'corn': '🌽', 'pepper': '🌶️',
    'cucumber': '🥒', 'lettuce': '🥬', 'potato': '🥔', 'tomato': '🍅',
    'onion': '🧅', 'garlic': '🧄', 'eggplant': '🍆', 'mushroom': '🍄',
    'vegetable': '🥗', 'vegetables': '🥦', 'leafy': '🥬', 'greens': '🥬',
    'salad': '🥗', 'legume': '🫘', 'legumes': '🫘', 'beans': '🫘',
    
    // Grains & Bread
    'bread': '🍞', 'rice': '🍚', 'pasta': '🍝', 'noodle': '🍜',
    'cereal': '🥣', 'grain': '🌾', 'grains': '🌾', 'wheat': '🌾',
    'bagel': '🥯', 'croissant': '🥐', 'pretzel': '🥨', 'pancake': '🥞',
    'waffle': '🧇', 'flatbread': '🫓', 'oat': '🌾', 'oats': '🌾',
    
    // Protein - Meat
    'meat': '🥩', 'beef': '🥩', 'steak': '🥩', 'pork': '🥓',
    'bacon': '🥓', 'chicken': '🍗', 'poultry': '🍗', 'turkey': '🦃',
    'duck': '🦆', 'lamb': '🍖', 'sausage': '🌭', 'ham': '🍖',
    
    // Protein - Seafood
    'fish': '🐟', 'salmon': '🍣', 'tuna': '🐟', 'shrimp': '🦐',
    'crab': '🦀', 'lobster': '🦞', 'squid': '🦑', 'octopus': '🐙',
    'oyster': '🦪', 'seafood': '🦐', 'shellfish': '🦪',
    
    // Protein - Other
    'egg': '🥚', 'eggs': '🥚', 'tofu': '🧈', 'nut': '🥜', 'nuts': '🥜',
    'almond': '🌰', 'peanut': '🥜', 'protein': '🍖',
    
    // Dairy
    'milk': '🥛', 'cheese': '🧀', 'butter': '🧈', 'yogurt': '🥛',
    'dairy': '🥛', 'cream': '🥛', 'ice cream': '🍦',
    
    // Beverages
    'water': '💧', 'juice': '🧃', 'coffee': '☕', 'tea': '🍵',
    'soda': '🥤', 'beverage': '🥤', 'drink': '🥤', 'smoothie': '🥤',
    'wine': '🍷', 'beer': '🍺', 'alcohol': '🍸',
    
    // Sweets & Snacks
    'candy': '🍬', 'chocolate': '🍫', 'cake': '🍰', 'cookie': '🍪',
    'donut': '🍩', 'pie': '🥧', 'cupcake': '🧁', 'ice cream': '🍦',
    'honey': '🍯', 'sugar': '🍬', 'sweet': '🍭', 'dessert': '🍰',
    'snack': '🍿', 'popcorn': '🍿', 'chip': '🍟', 'chips': '🍟',
    
    // Meals & Prepared Foods
    'pizza': '🍕', 'burger': '🍔', 'sandwich': '🥪', 'taco': '🌮',
    'burrito': '🌯', 'sushi': '🍣', 'ramen': '🍜', 'soup': '🍲',
    'stew': '🥘', 'curry': '🍛', 'salad': '🥗', 'fries': '🍟',
    'hotdog': '🌭', 'meal': '🍽️', 'food': '🍽️',
    
    // Oils & Fats
    'oil': '🫒', 'olive': '🫒', 'fat': '🧈', 'fats': '🧈',
    
    // Generic/Fallback
    'other': '🍽️', 'misc': '🍽️', 'supplement': '💊', 'vitamin': '💊'
};

// Default icon for unknown categories
const DEFAULT_ICON = '🍽️';

// Food group icons
const GROUP_ICONS = {
    'fruits': '🍎', 'fruit': '🍎',
    'vegetables': '🥦', 'vegetable': '🥦', 'veggies': '🥦',
    'grains': '🌾', 'grain': '🌾', 'cereals': '🥣', 'breads': '🍞',
    'protein': '🥩', 'proteins': '🥩', 'meat': '🥩', 'meats': '🥩',
    'dairy': '🥛', 'milk': '🥛',
    'fats': '🫒', 'oils': '🫒', 'fat': '🫒',
    'beverages': '🥤', 'drinks': '🥤',
    'sweets': '🍭', 'desserts': '🍰', 'snacks': '🍿',
    'seafood': '🐟', 'fish': '🐟',
    'legumes': '🫘', 'beans': '🫘',
    'nuts': '🥜', 'seeds': '🌻',
    'other': '🍽️', 'misc': '🍽️'
};

// ============================================
// App State
// ============================================
const AppState = {
    settings: {
        baseCalories: 1800,
        activityLevel: 'moderate',
        unitSystem: 'metric',
        proteinTarget: 50,
        waterTarget: 8,
        carbsTarget: 250,
        fatTarget: 65,
        fibreTarget: 25,
        sugarTarget: 50,
        ultraProcessedTarget: 3,
        saltMinTarget: 500,
        saltMaxTarget: 2300
    },
    foods: [],
    servings: {},
    waterCount: 0,
    exerciseCalories: 0,
    currentFoodId: null,
    isDefaultData: false,
    // Food search database
    foodDatabase: [],
    recentFoods: [],
    favorites: [],
    currentSearchFood: null,
    currentSearchTab: 'search'
};

// Activity level calorie bonuses
const ACTIVITY_BONUSES = {
    low: 0,
    moderate: 200,
    high: 400
};

// ============================================
// DOM Elements
// ============================================
const DOM = {};

function cacheDOMElements() {
    // Main elements
    DOM.mainScreen = document.getElementById('mainScreen');
    DOM.settingsScreen = document.getElementById('settingsScreen');
    DOM.foodGroupsContainer = document.getElementById('foodGroupsContainer');
    DOM.emptyState = document.getElementById('emptyState');
    DOM.foodGroupNav = document.getElementById('foodGroupNav');
    DOM.navScrollContainer = document.getElementById('navScrollContainer');
    DOM.backToTopBtn = document.getElementById('backToTopBtn');
    
    // Header
    DOM.settingsBtn = document.getElementById('settingsBtn');
    DOM.searchBtn = document.getElementById('searchBtn');
    DOM.helpBtn = document.getElementById('helpBtn');
    
    // Help Modal
    DOM.helpModal = document.getElementById('helpModal');
    DOM.closeHelpModal = document.getElementById('closeHelpModal');
    DOM.dismissHelp = document.getElementById('dismissHelp');
    DOM.backBtn = document.getElementById('backBtn');
    DOM.goToSettingsBtn = document.getElementById('goToSettingsBtn');
    
    // Search Modal
    DOM.searchModal = document.getElementById('searchModal');
    DOM.closeSearchModal = document.getElementById('closeSearchModal');
    DOM.foodSearchInput = document.getElementById('foodSearchInput');
    DOM.clearSearchBtn = document.getElementById('clearSearchBtn');
    DOM.searchResults = document.getElementById('searchResults');
    
    // Add Food Modal
    DOM.addFoodModal = document.getElementById('addFoodModal');
    DOM.closeAddFoodModal = document.getElementById('closeAddFoodModal');
    DOM.addFoodIcon = document.getElementById('addFoodIcon');
    DOM.addFoodName = document.getElementById('addFoodName');
    DOM.addFoodBrand = document.getElementById('addFoodBrand');
    DOM.addFoodServing = document.getElementById('addFoodServing');
    DOM.addFoodCalories = document.getElementById('addFoodCalories');
    DOM.addFoodProtein = document.getElementById('addFoodProtein');
    DOM.addFoodCarbs = document.getElementById('addFoodCarbs');
    DOM.addFoodFat = document.getElementById('addFoodFat');
    DOM.toggleFavoriteBtn = document.getElementById('toggleFavoriteBtn');
    DOM.decreaseAddServing = document.getElementById('decreaseAddServing');
    DOM.increaseAddServing = document.getElementById('increaseAddServing');
    DOM.addServingInput = document.getElementById('addServingInput');
    DOM.confirmAddFood = document.getElementById('confirmAddFood');
    
    // Stats
    DOM.calorieRing = document.getElementById('calorieRing');
    DOM.caloriesConsumed = document.getElementById('caloriesConsumed');
    DOM.calorieTarget = document.getElementById('calorieTarget');
    DOM.proteinValue = document.getElementById('proteinValue');
    DOM.proteinBar = document.getElementById('proteinBar');
    DOM.waterValue = document.getElementById('waterValue');
    DOM.waterBar = document.getElementById('waterBar');
    DOM.fatValue = document.getElementById('fatValue');
    DOM.fatBar = document.getElementById('fatBar');
    DOM.fibreValue = document.getElementById('fibreValue');
    DOM.fibreBar = document.getElementById('fibreBar');
    DOM.sugarValue = document.getElementById('sugarValue');
    DOM.sugarBar = document.getElementById('sugarBar');
    DOM.ultraProcessedValue = document.getElementById('ultraProcessedValue');
    DOM.ultraProcessedBar = document.getElementById('ultraProcessedBar');
    DOM.saltValue = document.getElementById('saltValue');
    DOM.saltBar = document.getElementById('saltBar');
    DOM.saltMinMarker = document.getElementById('saltMinMarker');
    DOM.saltMaxMarker = document.getElementById('saltMaxMarker');
    
    // Breakdown modal
    DOM.breakdownModal = document.getElementById('breakdownModal');
    DOM.closeBreakdownModal = document.getElementById('closeBreakdownModal');
    DOM.breakdownIcon = document.getElementById('breakdownIcon');
    DOM.breakdownTitle = document.getElementById('breakdownTitle');
    DOM.breakdownTotal = document.getElementById('breakdownTotal');
    DOM.breakdownList = document.getElementById('breakdownList');
    DOM.breakdownEmpty = document.getElementById('breakdownEmpty');
    
    // Nutrient info modal
    DOM.nutrientInfoModal = document.getElementById('nutrientInfoModal');
    DOM.closeNutrientInfoModal = document.getElementById('closeNutrientInfoModal');
    DOM.nutrientInfoIcon = document.getElementById('nutrientInfoIcon');
    DOM.nutrientInfoTitle = document.getElementById('nutrientInfoTitle');
    DOM.nutrientInfoBody = document.getElementById('nutrientInfoBody');
    
    // Exercise
    DOM.exerciseBtn = document.getElementById('exerciseBtn');
    DOM.exerciseValue = document.getElementById('exerciseValue');
    DOM.exerciseModal = document.getElementById('exerciseModal');
    DOM.closeExerciseModal = document.getElementById('closeExerciseModal');
    DOM.exerciseInput = document.getElementById('exerciseInput');
    DOM.decreaseExercise = document.getElementById('decreaseExercise');
    DOM.increaseExercise = document.getElementById('increaseExercise');
    DOM.saveExercise = document.getElementById('saveExercise');
    
    // Settings inputs - Macro targets
    DOM.proteinTargetInput = document.getElementById('proteinTarget');
    DOM.waterTargetInput = document.getElementById('waterTarget');
    DOM.carbsTargetInput = document.getElementById('carbsTarget');
    DOM.fatTargetInput = document.getElementById('fatTarget');
    DOM.fibreTargetInput = document.getElementById('fibreTarget');
    DOM.sugarTargetInput = document.getElementById('sugarTarget');
    DOM.ultraProcessedTargetInput = document.getElementById('ultraProcessedTarget');
    DOM.saltMinTargetInput = document.getElementById('saltMinTarget');
    DOM.saltMaxTargetInput = document.getElementById('saltMaxTarget');
    
    // Settings inputs
    DOM.baseCalories = document.getElementById('baseCalories');
    DOM.activityLevel = document.getElementById('activityLevel');
    DOM.activityAllowance = document.getElementById('activityAllowance');
    DOM.totalTarget = document.getElementById('totalTarget');
    DOM.metricBtn = document.getElementById('metricBtn');
    DOM.imperialBtn = document.getElementById('imperialBtn');
    
    // File upload
    DOM.fileUploadArea = document.getElementById('fileUploadArea');
    DOM.fileInput = document.getElementById('fileInput');
    DOM.fileInfo = document.getElementById('fileInfo');
    DOM.fileName = document.getElementById('fileName');
    DOM.foodCount = document.getElementById('foodCount');
    DOM.importNewBtn = document.getElementById('importNewBtn');
    DOM.clearDataBtn = document.getElementById('clearDataBtn');
    
    // Action buttons
    DOM.historyBtn = document.getElementById('historyBtn');
    DOM.logDayBtn = document.getElementById('logDayBtn');
    DOM.resetDayBtn = document.getElementById('resetDayBtn');
    
    // History modal
    DOM.historyModal = document.getElementById('historyModal');
    DOM.closeHistoryModal = document.getElementById('closeHistoryModal');
    DOM.historyList = document.getElementById('historyList');
    DOM.historyEmpty = document.getElementById('historyEmpty');
    DOM.exportHistoryBtn = document.getElementById('exportHistoryBtn');
    
    // Modals
    DOM.foodInfoModal = document.getElementById('foodInfoModal');
    DOM.closeInfoModal = document.getElementById('closeInfoModal');
    DOM.servingModal = document.getElementById('servingModal');
    DOM.closeServingModal = document.getElementById('closeServingModal');
    DOM.servingInput = document.getElementById('servingInput');
    DOM.decreaseServing = document.getElementById('decreaseServing');
    DOM.increaseServing = document.getElementById('increaseServing');
    DOM.saveServing = document.getElementById('saveServing');
    
    // Info modal elements
    DOM.infoIcon = document.getElementById('infoIcon');
    DOM.infoCategoryName = document.getElementById('infoCategoryName');
    DOM.infoFoodGroup = document.getElementById('infoFoodGroup');
    DOM.infoServingSize = document.getElementById('infoServingSize');
    DOM.infoRecommended = document.getElementById('infoRecommended');
    DOM.infoCalories = document.getElementById('infoCalories');
    DOM.infoProtein = document.getElementById('infoProtein');
    DOM.infoCarbs = document.getElementById('infoCarbs');
    DOM.infoFat = document.getElementById('infoFat');
    DOM.infoFibre = document.getElementById('infoFibre');
    DOM.infoSugar = document.getElementById('infoSugar');
    DOM.infoUltraProcessed = document.getElementById('infoUltraProcessed');
    DOM.infoHighSatFat = document.getElementById('infoHighSatFat');
    
    // Warning modal elements
    DOM.warningModal = document.getElementById('warningModal');
    DOM.closeWarningModal = document.getElementById('closeWarningModal');
    DOM.warningIcon = document.getElementById('warningIcon');
    DOM.warningTitle = document.getElementById('warningTitle');
    DOM.warningDescription = document.getElementById('warningDescription');
    DOM.warningTips = document.getElementById('warningTips');
    
    // Serving modal elements
    DOM.servingIcon = document.getElementById('servingIcon');
    DOM.servingCategoryName = document.getElementById('servingCategoryName');
    DOM.servingSizeInfo = document.getElementById('servingSizeInfo');
}

// ============================================
// Utility Functions
// ============================================

/**
 * Get icon for a food category
 */
function getFoodIcon(category) {
    const lowerCategory = category.toLowerCase();
    
    // Direct match
    if (FOOD_ICONS[lowerCategory]) {
        return FOOD_ICONS[lowerCategory];
    }
    
    // Partial match
    for (const [key, icon] of Object.entries(FOOD_ICONS)) {
        if (lowerCategory.includes(key) || key.includes(lowerCategory)) {
            return icon;
        }
    }
    
    return DEFAULT_ICON;
}

/**
 * Get icon for a food group
 */
function getGroupIcon(group) {
    const lowerGroup = group.toLowerCase();
    
    if (GROUP_ICONS[lowerGroup]) {
        return GROUP_ICONS[lowerGroup];
    }
    
    for (const [key, icon] of Object.entries(GROUP_ICONS)) {
        if (lowerGroup.includes(key) || key.includes(lowerGroup)) {
            return icon;
        }
    }
    
    return '📦';
}

/**
 * Calculate total calorie target (including exercise bonus)
 */
function calculateTotalTarget() {
    const base = AppState.settings.baseCalories;
    const activityBonus = ACTIVITY_BONUSES[AppState.settings.activityLevel] || 0;
    const exerciseBonus = AppState.exerciseCalories || 0;
    return base + activityBonus + exerciseBonus;
}

/**
 * Format number for display
 */
function formatNumber(num, decimals = 0) {
    if (decimals === 0) {
        return Math.round(num).toString();
    }
    // Only strip trailing zeros after decimal point
    return num.toFixed(decimals).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}

/**
 * Animate number change
 */
function animateValue(element, start, end, duration = 500) {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (range * easeProgress));
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// Settings Functions
// ============================================

/**
 * Load settings from database
 */
async function loadSettings() {
    const settings = await db.getAllSettings();
    
    AppState.settings.baseCalories = settings.baseCalories || 1800;
    AppState.settings.activityLevel = settings.activityLevel || 'moderate';
    AppState.settings.unitSystem = settings.unitSystem || 'metric';
    AppState.settings.proteinTarget = settings.proteinTarget || 50;
    AppState.settings.waterTarget = settings.waterTarget || 8;
    AppState.settings.carbsTarget = settings.carbsTarget || 250;
    AppState.settings.fatTarget = settings.fatTarget || 65;
    AppState.settings.fibreTarget = settings.fibreTarget || 25;
    AppState.settings.sugarTarget = settings.sugarTarget || 50;
    AppState.settings.ultraProcessedTarget = settings.ultraProcessedTarget || 3;
    AppState.settings.saltMinTarget = settings.saltMinTarget || 500;
    AppState.settings.saltMaxTarget = settings.saltMaxTarget || 2300;
    AppState.isDefaultData = settings.isDefaultData || false;
    
    // Update UI
    DOM.baseCalories.value = AppState.settings.baseCalories;
    DOM.activityLevel.value = AppState.settings.activityLevel;
    DOM.proteinTargetInput.value = AppState.settings.proteinTarget;
    DOM.waterTargetInput.value = AppState.settings.waterTarget;
    DOM.carbsTargetInput.value = AppState.settings.carbsTarget;
    DOM.fatTargetInput.value = AppState.settings.fatTarget;
    DOM.fibreTargetInput.value = AppState.settings.fibreTarget;
    DOM.sugarTargetInput.value = AppState.settings.sugarTarget;
    DOM.ultraProcessedTargetInput.value = AppState.settings.ultraProcessedTarget;
    DOM.saltMinTargetInput.value = AppState.settings.saltMinTarget;
    DOM.saltMaxTargetInput.value = AppState.settings.saltMaxTarget;
    updateActivityAllowance();
    updateUnitSystemUI();
}

/**
 * Save settings to database
 */
async function saveSettings() {
    await db.saveSetting('baseCalories', AppState.settings.baseCalories);
    await db.saveSetting('activityLevel', AppState.settings.activityLevel);
    await db.saveSetting('unitSystem', AppState.settings.unitSystem);
    await db.saveSetting('proteinTarget', AppState.settings.proteinTarget);
    await db.saveSetting('waterTarget', AppState.settings.waterTarget);
    await db.saveSetting('carbsTarget', AppState.settings.carbsTarget);
    await db.saveSetting('fatTarget', AppState.settings.fatTarget);
    await db.saveSetting('fibreTarget', AppState.settings.fibreTarget);
    await db.saveSetting('sugarTarget', AppState.settings.sugarTarget);
    await db.saveSetting('saltMinTarget', AppState.settings.saltMinTarget);
    await db.saveSetting('saltMaxTarget', AppState.settings.saltMaxTarget);
}

/**
 * Update activity allowance display
 */
function updateActivityAllowance() {
    const bonus = ACTIVITY_BONUSES[AppState.settings.activityLevel] || 0;
    DOM.activityAllowance.value = bonus;
    DOM.totalTarget.value = calculateTotalTarget();
    DOM.calorieTarget.textContent = calculateTotalTarget();
}

/**
 * Update unit system UI
 */
function updateUnitSystemUI() {
    if (AppState.settings.unitSystem === 'metric') {
        DOM.metricBtn.classList.add('active');
        DOM.imperialBtn.classList.remove('active');
    } else {
        DOM.imperialBtn.classList.add('active');
        DOM.metricBtn.classList.remove('active');
    }
}

// ============================================
// Food Data Functions
// ============================================

/**
 * Parse XLS/XLSX file
 */
function parseSpreadsheet(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
                
                // Skip header row and parse data
                const foods = [];
                const headers = jsonData[0].map(h => h?.toString().toLowerCase().trim());
                
                // Find column indices (order matters - more specific names first)
                const cols = {
                    foodGroup: findColumn(headers, ['food group', 'foodgroup', 'group']),
                    foodCategory: findColumn(headers, ['food category', 'foodcategory', 'category', 'food name', 'foodname', 'item']),
                    servingsLow: findColumn(headers, ['servings low', 'servingslow', 'low', 'min servings']),
                    servingsHigh: findColumn(headers, ['servings high', 'servingshigh', 'high', 'max servings']),
                    servingsMedian: findColumn(headers, ['servings median', 'servingsmedian', 'median', 'recommended']),
                    servingSize: findColumn(headers, ['serving size', 'servingsize', 'portion', 'portion size']),
                    calories: findColumn(headers, ['calories', 'cal', 'kcal', 'energy']),
                    protein: findColumn(headers, ['protein', 'proteins']),
                    fibre: findColumn(headers, ['fibre', 'fiber']),
                    carbs: findColumn(headers, ['carbs', 'carbohydrates', 'carbohydrate']),
                    sugar: findColumn(headers, ['sugar', 'sugars']),
                    addedSugar: findColumn(headers, ['added sugar', 'addedsugar', 'added sugars']),
                    totalFat: findColumn(headers, ['total fat', 'totalfat', 'fat', 'fats']),
                    saturatedFat: findColumn(headers, ['saturated fat', 'saturatedfat', 'sat fat']),
                    transFat: findColumn(headers, ['trans fat', 'transfat']),
                    ultraProcessed: findColumn(headers, ['ultra-processed', 'ultraprocessed', 'ultra processed']),
                    hydration: findColumn(headers, ['hydration', 'water', 'water contribution']),
                    salt: findColumn(headers, ['salt', 'sodium'])
                };
                
                // Parse rows
                for (let i = 1; i < jsonData.length; i++) {
                    const row = jsonData[i];
                    if (!row || !row[cols.foodCategory]) continue;
                    
                    foods.push({
                        foodGroup: row[cols.foodGroup]?.toString() || 'Other',
                        foodCategory: row[cols.foodCategory]?.toString() || '',
                        servingsLow: parseInt(row[cols.servingsLow]) || 0,
                        servingsHigh: parseInt(row[cols.servingsHigh]) || 0,
                        servingsMedian: parseInt(row[cols.servingsMedian]) || 0,
                        servingSize: row[cols.servingSize]?.toString() || '',
                        calories: parseFloat(row[cols.calories]) || 0,
                        protein: parseFloat(row[cols.protein]) || 0,
                        fibre: parseFloat(row[cols.fibre]) || 0,
                        carbs: parseFloat(row[cols.carbs]) || 0,
                        sugar: parseFloat(row[cols.sugar]) || 0,
                        addedSugar: parseFloat(row[cols.addedSugar]) || 0,
                        totalFat: parseFloat(row[cols.totalFat]) || 0,
                        saturatedFat: parseFloat(row[cols.saturatedFat]) || 0,
                        transFat: parseFloat(row[cols.transFat]) || 0,
                        ultraProcessed: cols.ultraProcessed !== -1 ? (row[cols.ultraProcessed]?.toString().toLowerCase() === 'true') : false,
                        hydration: parseFloat(row[cols.hydration]) || 0,
                        salt: parseFloat(row[cols.salt]) || 0
                    });
                }
                
                resolve(foods);
            } catch (error) {
                reject(new Error('Failed to parse spreadsheet: ' + error.message));
            }
        };
        
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsArrayBuffer(file);
    });
}

/**
 * Find column index by possible names
 * Prioritizes exact matches, then partial matches
 */
function findColumn(headers, possibleNames) {
    // First pass: look for exact matches
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        if (!header) continue;
        
        for (const name of possibleNames) {
            if (header === name) {
                return i;
            }
        }
    }
    
    // Second pass: look for headers that start with possible name
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        if (!header) continue;
        
        for (const name of possibleNames) {
            if (header.startsWith(name) || name.startsWith(header)) {
                return i;
            }
        }
    }
    
    // Third pass: look for partial matches (contains)
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        if (!header) continue;
        
        for (const name of possibleNames) {
            if (header.includes(name)) {
                return i;
            }
        }
    }
    
    return -1;
}

/**
 * Load foods from database, or load defaults if empty
 */
async function loadFoods() {
    AppState.foods = await db.getAllFoods();
    
    // If no foods loaded, try to load default data
    if (AppState.foods.length === 0) {
        await loadDefaultFoodData();
    }
    
    // Load any previously added search foods
    const searchFoods = await db.getSetting('searchFoods') || [];
    searchFoods.forEach(food => {
        // Only add if not already in the list
        if (!AppState.foods.find(f => f.id === food.id)) {
            AppState.foods.push(food);
        }
    });
    
    await loadTodayServings();
    renderFoodGroups();
    updateStats();
    updateFileInfo();
}

/**
 * Load default food data from default-data.csv
 */
async function loadDefaultFoodData() {
    try {
        console.log('Loading default food data...');
        const response = await fetch('default-data.csv');
        if (!response.ok) {
            console.warn('Could not load default-data.csv');
            return;
        }
        
        const csvText = await response.text();
        const foods = parseCSVText(csvText);
        
        if (foods.length > 0) {
            await db.saveFoods(foods);
            AppState.foods = foods;
            AppState.isDefaultData = true;
            await db.saveSetting('isDefaultData', true);
            console.log(`Loaded ${foods.length} default food categories`);
        }
    } catch (error) {
        console.warn('Failed to load default food data:', error);
    }
}

/**
 * Parse CSV text into food objects
 */
function parseCSVText(csvText) {
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length < 2) return [];
    
    // Parse headers
    const headerLine = lines[0];
    const headers = parseCSVLine(headerLine).map(h => h.toLowerCase().trim());
    
    // Find column indices
    const cols = {
        foodGroup: findColumn(headers, ['food group', 'foodgroup', 'group']),
        foodCategory: findColumn(headers, ['food category', 'foodcategory', 'category', 'food']),
        servingsLow: findColumn(headers, ['servings low', 'servingslow', 'low']),
        servingsHigh: findColumn(headers, ['servings high', 'servingshigh', 'high']),
        servingSize: findColumn(headers, ['serving size', 'servingsize', 'portion']),
        calories: findColumn(headers, ['calories', 'cals', 'kcal', 'energy']),
        protein: findColumn(headers, ['protein', 'proteins']),
        fibre: findColumn(headers, ['fibre', 'fiber']),
        carbs: findColumn(headers, ['carbs', 'carbohydrates', 'carbohydrate']),
        sugar: findColumn(headers, ['sugar', 'sugars']),
        addedSugar: findColumn(headers, ['added sugar', 'addedsugar', 'added sugars']),
        totalFat: findColumn(headers, ['total fat', 'totalfat', 'fat', 'fats']),
        saturatedFat: findColumn(headers, ['saturated fat', 'saturatedfat', 'sat fat']),
        transFat: findColumn(headers, ['trans fat', 'transfat']),
        ultraProcessed: findColumn(headers, ['ultra-processed', 'ultraprocessed', 'ultra processed']),
        hydration: findColumn(headers, ['hydration', 'water', 'water contribution']),
        salt: findColumn(headers, ['salt', 'sodium'])
    };
    
    const foods = [];
    
    // Parse data rows
    for (let i = 1; i < lines.length; i++) {
        const row = parseCSVLine(lines[i]);
        if (row.length < 2) continue;
        
        const foodGroup = row[cols.foodGroup]?.trim() || '';
        const foodCategory = row[cols.foodCategory]?.trim() || '';
        
        if (!foodGroup || !foodCategory) continue;
        
        foods.push({
            id: `food_${i}_${Date.now()}`,
            foodGroup,
            foodCategory,
            servingsLow: parseInt(row[cols.servingsLow]) || 0,
            servingsHigh: parseInt(row[cols.servingsHigh]) || 0,
            servingSize: row[cols.servingSize]?.trim() || '',
            calories: parseFloat(row[cols.calories]) || 0,
            protein: parseFloat(row[cols.protein]) || 0,
            fibre: parseFloat(row[cols.fibre]) || 0,
            carbs: parseFloat(row[cols.carbs]) || 0,
            sugar: parseFloat(row[cols.sugar]) || 0,
            addedSugar: parseFloat(row[cols.addedSugar]) || 0,
            totalFat: parseFloat(row[cols.totalFat]) || 0,
            saturatedFat: parseFloat(row[cols.saturatedFat]) || 0,
            transFat: parseFloat(row[cols.transFat]) || 0,
            ultraProcessed: cols.ultraProcessed !== -1 ? (row[cols.ultraProcessed]?.toString().trim().toLowerCase() === 'true') : false,
            hydration: parseFloat(row[cols.hydration]) || 0,
            salt: parseFloat(row[cols.salt]) || 0
        });
    }

    return foods;
}

/**
 * Parse a single CSV line handling quoted fields
 */
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);
    
    return result;
}

/**
 * Load today's servings
 */
async function loadTodayServings() {
    AppState.servings = await db.getTodayServings();
    await loadExerciseCalories();
    await loadWaterCount();
}

/**
 * Update file info display
 */
function updateFileInfo() {
    const count = AppState.foods.length;
    
    if (count > 0) {
        DOM.fileUploadArea.style.display = 'none';
        DOM.fileInfo.removeAttribute('hidden');
        DOM.fileInfo.style.display = 'flex';
        DOM.fileName.textContent = AppState.isDefaultData ? 'Default database loaded' : 'Custom database loaded';
        DOM.foodCount.textContent = `${count} food categories`;
        DOM.emptyState.style.display = 'none';
    } else {
        DOM.fileUploadArea.style.display = 'block';
        DOM.fileInfo.setAttribute('hidden', '');
        DOM.fileInfo.style.display = 'none';
        DOM.emptyState.style.display = 'block';
    }
}

// ============================================
// Rendering Functions
// ============================================

/**
 * Generate a slug from group name for use as ID
 */
function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/**
 * Render food group navigation bar
 */
function renderFoodGroupNav(groupNames) {
    DOM.navScrollContainer.innerHTML = '';
    
    if (groupNames.length === 0) {
        DOM.foodGroupNav.hidden = true;
        return;
    }
    
    DOM.foodGroupNav.hidden = false;
    
    groupNames.forEach(groupName => {
        const navItem = document.createElement('button');
        navItem.className = 'nav-item';
        navItem.dataset.group = slugify(groupName);
        navItem.innerHTML = `
            <span class="nav-item-icon">${getGroupIcon(groupName)}</span>
            <span class="nav-item-label">${groupName}</span>
        `;
        navItem.addEventListener('click', () => scrollToFoodGroup(slugify(groupName)));
        DOM.navScrollContainer.appendChild(navItem);
    });
}

/**
 * Scroll to a specific food group
 */
function scrollToFoodGroup(groupSlug) {
    const groupEl = document.getElementById(`group-${groupSlug}`);
    if (groupEl) {
        const navHeight = DOM.foodGroupNav.offsetHeight;
        const elementPosition = groupEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - navHeight - 10,
            behavior: 'smooth'
        });
        
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.group === groupSlug);
        });
    }
}

/**
 * Update active nav item based on scroll position
 */
function updateActiveNavItem() {
    const navHeight = DOM.foodGroupNav.offsetHeight;
    const groups = document.querySelectorAll('.food-group');
    let activeGroup = null;
    
    groups.forEach(group => {
        const rect = group.getBoundingClientRect();
        if (rect.top <= navHeight + 50 && rect.bottom > navHeight) {
            activeGroup = group.id.replace('group-', '');
        }
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.group === activeGroup);
        
        // Auto-scroll nav to keep active item visible
        if (item.dataset.group === activeGroup) {
            item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
}

/**
 * Update back-to-top button visibility
 */
function updateBackToTopVisibility() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const showButton = scrollTop > 300;
    DOM.backToTopBtn.hidden = !showButton;
}

/**
 * Scroll back to the top (tracker section)
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Render food groups
 */
function renderFoodGroups() {
    // Group foods by food group
    const grouped = {};
    AppState.foods.forEach(food => {
        if (!grouped[food.foodGroup]) {
            grouped[food.foodGroup] = [];
        }
        grouped[food.foodGroup].push(food);
    });
    
    // Clear container
    DOM.foodGroupsContainer.innerHTML = '';
    
    if (Object.keys(grouped).length === 0) {
        DOM.foodGroupsContainer.appendChild(DOM.emptyState.cloneNode(true));
        renderFoodGroupNav([]);
        return;
    }
    
    // Render food group navigation
    renderFoodGroupNav(Object.keys(grouped));
    
    // Render each group
    for (const [groupName, foods] of Object.entries(grouped)) {
        const groupEl = document.createElement('div');
        groupEl.className = 'food-group';
        groupEl.id = `group-${slugify(groupName)}`;
        
        groupEl.innerHTML = `
            <div class="group-header">
                <span class="group-icon">${getGroupIcon(groupName)}</span>
                <span class="group-name">${groupName}</span>
            </div>
            <div class="food-items-grid"></div>
        `;
        
        const grid = groupEl.querySelector('.food-items-grid');
        
        foods.forEach(food => {
            const servings = AppState.servings[food.id] || 0;
            const goalReached = servings >= food.servingsHigh && food.servingsHigh > 0;
            
            // Check if food has warnings
            const isUltraProcessed = food.ultraProcessed === true;
            const satFat = (food.saturatedFat || 0) + (food.transFat || 0);
            const isHighSatFat = satFat >= 5;
            const hasWarning = isUltraProcessed || isHighSatFat;
            
            // Determine warning type and icon
            let warningType = '';
            let warningIcon = '';
            if (isUltraProcessed && isHighSatFat) {
                warningType = 'both';
                warningIcon = '⚠️';
            } else if (isUltraProcessed) {
                warningType = 'ultra-processed';
                warningIcon = '🏭';
            } else if (isHighSatFat) {
                warningType = 'high-sat-fat';
                warningIcon = '⚠️';
            }
            
            const itemEl = document.createElement('div');
            itemEl.className = `food-item${servings > 0 ? ' has-servings' : ''}${goalReached ? ' goal-reached' : ''}`;
            itemEl.dataset.foodId = food.id;
            
            // Build warning button HTML if needed
            const warningBtn = hasWarning 
                ? `<button class="warning-btn" data-warning-type="${warningType}" data-sat-fat="${satFat}" data-food-id="${food.id}">${warningIcon}</button>`
                : '';
            
            itemEl.innerHTML = `
                <button class="info-btn" data-food-id="${food.id}">ℹ</button>
                ${warningBtn}
                <span class="food-icon">${getFoodIcon(food.foodCategory)}</span>
                <span class="food-name">${food.foodCategory}</span>
                <span class="serving-count${servings === 0 ? ' zero' : ''}">${formatNumber(servings, 1)}</span>
            `;
            
            grid.appendChild(itemEl);
        });
        
        DOM.foodGroupsContainer.appendChild(groupEl);
    }
    
    // Attach event listeners
    attachFoodItemListeners();
}

/**
 * Update a single food item
 */
function updateFoodItem(foodId) {
    const food = AppState.foods.find(f => f.id === foodId);
    if (!food) return;
    
    const itemEl = document.querySelector(`.food-item[data-food-id="${foodId}"]`);
    if (!itemEl) return;
    
    const servings = AppState.servings[foodId] || 0;
    const goalReached = servings >= food.servingsMedian && food.servingsMedian > 0;
    
    itemEl.classList.toggle('has-servings', servings > 0);
    itemEl.classList.toggle('goal-reached', goalReached);
    
    const countEl = itemEl.querySelector('.serving-count');
    countEl.textContent = formatNumber(servings, 1);
    countEl.classList.toggle('zero', servings === 0);
    
    // Add pulse animation
    countEl.classList.add('pulse');
    setTimeout(() => countEl.classList.remove('pulse'), 300);
}

/**
 * Update stats display
 */
function updateStats() {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalSatTransFat = 0;
    let totalFibre = 0;
    let totalAddedSugar = 0;
    let totalUltraProcessed = 0;
    let totalWaterFromFood = 0;
    let totalSalt = 0;
    
    AppState.foods.forEach(food => {
        const servings = AppState.servings[food.id] || 0;
        totalCalories += food.calories * servings;
        totalProtein += food.protein * servings;
        totalCarbs += food.carbs * servings;
        totalSatTransFat += ((food.saturatedFat || 0) + (food.transFat || 0)) * servings;
        totalFibre += food.fibre * servings;
        totalAddedSugar += (food.addedSugar || 0) * servings;
        totalWaterFromFood += (food.hydration || 0) * servings;
        totalSalt += (food.salt || 0) * servings;
        
        if (food.ultraProcessed) {
            totalUltraProcessed += servings;
        }
    });
    
    // Water now comes only from food contributions
    const totalWater = totalWaterFromFood;
    
    const target = calculateTotalTarget();
    const progress = Math.min(totalCalories / target, 1);
    
    // Update calorie ring
    const circumference = 2 * Math.PI * 52;
    const offset = circumference * (1 - progress);
    DOM.calorieRing.style.strokeDashoffset = offset;
    
    // Update calorie color based on progress
    if (totalCalories > target) {
        DOM.calorieRing.style.stroke = 'var(--danger)';
    } else if (totalCalories > target * 0.9) {
        DOM.calorieRing.style.stroke = 'var(--warning)';
    } else {
        DOM.calorieRing.style.stroke = 'var(--accent-primary)';
    }
    
    // Update calorie text
    const currentCal = parseInt(DOM.caloriesConsumed.textContent) || 0;
    animateValue(DOM.caloriesConsumed, currentCal, Math.round(totalCalories), 400);
    
    // Update macro values
    DOM.proteinValue.textContent = `${Math.round(totalProtein)}g`;
    DOM.waterValue.textContent = `${totalWater.toFixed(1)}`;
    
    // Update water bar
    const { waterTarget } = AppState.settings;
    DOM.waterBar.style.width = waterTarget > 0 ? `${Math.min((totalWater / waterTarget) * 100, 100)}%` : '0%';
    DOM.fatValue.textContent = `${Math.round(totalSatTransFat)}g`;
    DOM.fibreValue.textContent = `${Math.round(totalFibre)}g`;
    DOM.sugarValue.textContent = `${Math.round(totalAddedSugar)}g`;
    DOM.ultraProcessedValue.textContent = `${totalUltraProcessed}`;
    
    // Update macro bars using configurable targets
    const { proteinTarget, carbsTarget, fatTarget, fibreTarget, sugarTarget, ultraProcessedTarget, saltMinTarget, saltMaxTarget } = AppState.settings;
    
    DOM.proteinBar.style.width = proteinTarget > 0 ? `${Math.min((totalProtein / proteinTarget) * 100, 100)}%` : '0%';
    DOM.fatBar.style.width = fatTarget > 0 ? `${Math.min((totalSatTransFat / fatTarget) * 100, 100)}%` : '0%';
    DOM.fibreBar.style.width = fibreTarget > 0 ? `${Math.min((totalFibre / fibreTarget) * 100, 100)}%` : '0%';
    DOM.sugarBar.style.width = sugarTarget > 0 ? `${Math.min((totalAddedSugar / sugarTarget) * 100, 100)}%` : '0%';
    DOM.ultraProcessedBar.style.width = ultraProcessedTarget > 0 ? `${Math.min((totalUltraProcessed / ultraProcessedTarget) * 100, 100)}%` : '0%';
    
    // Update salt display and bar (uses max target for bar width)
    DOM.saltValue.textContent = `${Math.round(totalSalt)}mg`;
    DOM.saltBar.style.width = saltMaxTarget > 0 ? `${Math.min((totalSalt / saltMaxTarget) * 100, 100)}%` : '0%';
    
    // Position salt target markers
    if (saltMaxTarget > 0) {
        DOM.saltMinMarker.style.left = `${(saltMinTarget / saltMaxTarget) * 100}%`;
        DOM.saltMaxMarker.style.left = '100%';
    }
    
    // Color salt bar based on range
    if (totalSalt > saltMaxTarget) {
        DOM.saltBar.style.background = 'var(--danger)';
    } else if (totalSalt < saltMinTarget) {
        DOM.saltBar.style.background = 'var(--warning)';
    } else {
        DOM.saltBar.style.background = 'var(--salt-color)';
    }
}

// ============================================
// Event Handlers
// ============================================

/**
 * Attach listeners to food items
 */
function attachFoodItemListeners() {
    // Info buttons - handle both click and touch
    document.querySelectorAll('.info-btn').forEach(btn => {
        const handleInfoTap = (e) => {
            e.stopPropagation();
            e.preventDefault();
            const fid = btn.dataset.foodId;
            showFoodInfo(isNaN(parseInt(fid)) ? fid : parseInt(fid));
        };
        
        btn.addEventListener('click', handleInfoTap);
        
        // Add touch support for info button
        btn.addEventListener('touchend', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const fid = btn.dataset.foodId;
            showFoodInfo(isNaN(parseInt(fid)) ? fid : parseInt(fid));
        });
        
        // Prevent touchstart from bubbling to parent
        btn.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, { passive: false });
    });
    
    // Warning buttons - handle both click and touch (same pattern as info buttons)
    document.querySelectorAll('.warning-btn').forEach(btn => {
        const handleWarningTap = (e) => {
            e.stopPropagation();
            e.preventDefault();
            const warningType = btn.dataset.warningType;
            const satFat = btn.dataset.satFat;
            showWarningExplanation(warningType, satFat);
        };
        
        btn.addEventListener('click', handleWarningTap);
        
        // Add touch support for warning button
        btn.addEventListener('touchend', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const warningType = btn.dataset.warningType;
            const satFat = btn.dataset.satFat;
            showWarningExplanation(warningType, satFat);
        });
        
        // Prevent touchstart from bubbling to parent
        btn.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, { passive: false });
    });
    
    // Helper to parse food IDs (can be numeric or string for search foods)
    const parseFoodId = (idStr) => {
        const numericId = parseInt(idStr);
        return isNaN(numericId) ? idStr : numericId;
    };
    
    // Food items (tap/click and long press)
    // With scroll detection to prevent accidental taps
    const MOVE_THRESHOLD = 10; // pixels - if finger moves more than this, it's a scroll
    
    document.querySelectorAll('.food-item').forEach(item => {
        let pressTimer = null;
        let isLongPress = false;
        let startX = 0;
        let startY = 0;
        let hasMoved = false;
        
        const handleStart = (e) => {
            isLongPress = false;
            hasMoved = false;
            
            // Record start position for touch events
            if (e.touches && e.touches[0]) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            } else {
                startX = e.clientX;
                startY = e.clientY;
            }
            
            pressTimer = setTimeout(() => {
                if (!hasMoved) {
                    isLongPress = true;
                    const sid = item.dataset.foodId;
                    showServingModal(isNaN(parseInt(sid)) ? sid : parseInt(sid));
                }
            }, 500);
        };
        
        const handleMove = (e) => {
            if (hasMoved) return;
            
            let currentX, currentY;
            if (e.touches && e.touches[0]) {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
            } else {
                currentX = e.clientX;
                currentY = e.clientY;
            }
            
            const deltaX = Math.abs(currentX - startX);
            const deltaY = Math.abs(currentY - startY);
            
            // If moved more than threshold, it's a scroll
            if (deltaX > MOVE_THRESHOLD || deltaY > MOVE_THRESHOLD) {
                hasMoved = true;
                clearTimeout(pressTimer);
            }
        };
        
        const handleEnd = (e) => {
            clearTimeout(pressTimer);
            
            // Only register tap if:
            // 1. Not a long press
            // 2. Finger didn't move (not scrolling)
            // 3. Not clicking the info or warning button
            const isButtonClick = e.target.classList.contains('info-btn') || e.target.classList.contains('warning-btn');
            if (!isLongPress && !hasMoved && !isButtonClick) {
                // Food IDs can be numbers or strings (for search foods)
                const foodId = item.dataset.foodId;
                const numericId = parseInt(foodId);
                // Use numeric ID if it's a valid number, otherwise use string ID
                incrementServing(isNaN(numericId) ? foodId : numericId);
            }
        };
        
        const handleCancel = () => {
            clearTimeout(pressTimer);
            hasMoved = true;
        };
        
        // Mouse events
        item.addEventListener('mousedown', handleStart);
        item.addEventListener('mousemove', handleMove);
        item.addEventListener('mouseup', handleEnd);
        item.addEventListener('mouseleave', handleCancel);
        
        // Touch events
        item.addEventListener('touchstart', handleStart, { passive: true });
        item.addEventListener('touchmove', handleMove, { passive: true });
        item.addEventListener('touchend', (e) => {
            handleEnd(e);
            if (!isLongPress && !hasMoved) {
                e.preventDefault();
            }
        });
        item.addEventListener('touchcancel', handleCancel);
    });
}

/**
 * Increment serving by 1
 */
async function incrementServing(foodId) {
    if (foodId === null || foodId === undefined || (typeof foodId === 'number' && isNaN(foodId))) {
        return;
    }
    
    const current = AppState.servings[foodId] || 0;
    const newValue = current + 1;
    
    AppState.servings[foodId] = newValue;
    await db.saveServing(foodId, newValue);
    
    updateFoodItem(foodId);
    updateStats();
}

/**
 * Set serving to specific value
 */
async function setServing(foodId, value) {
    AppState.servings[foodId] = Math.max(0, Math.round(value * 10) / 10);
    await db.saveServing(foodId, AppState.servings[foodId]);
    
    updateFoodItem(foodId);
    updateStats();
}

/**
 * Show food info modal
 */
function showFoodInfo(foodId) {
    const food = AppState.foods.find(f => f.id === foodId);
    if (!food) return;
    
    DOM.infoIcon.textContent = getFoodIcon(food.foodCategory);
    DOM.infoCategoryName.textContent = food.foodCategory;
    DOM.infoFoodGroup.textContent = food.foodGroup;
    DOM.infoServingSize.textContent = food.servingSize || 'Not specified';
    DOM.infoRecommended.textContent = (food.servingsLow > 0 || food.servingsHigh > 0)
        ? `${food.servingsLow}–${food.servingsHigh} servings`
        : 'Not specified';
    DOM.infoCalories.textContent = formatNumber(food.calories);
    DOM.infoProtein.textContent = `${formatNumber(food.protein)}g`;
    DOM.infoCarbs.textContent = `${formatNumber(food.carbs)}g`;
    const satTransFat = (food.saturatedFat || 0) + (food.transFat || 0);
    DOM.infoFat.textContent = `${formatNumber(satTransFat)}g`;
    DOM.infoFibre.textContent = `${formatNumber(food.fibre)}g`;
    DOM.infoSugar.textContent = `${formatNumber(food.addedSugar || 0)}g`;
    
    // Show warnings
    DOM.infoUltraProcessed.hidden = !food.ultraProcessed;
    DOM.infoHighSatFat.hidden = satTransFat < 5;
    
    DOM.foodInfoModal.classList.add('active');
}

/**
 * Show warning explanation modal
 */
function showWarningExplanation(warningType, satFatAmount) {
    const warnings = {
        'ultra-processed': {
            icon: '🏭',
            title: 'Ultra-Processed Food',
            description: 'Ultra-processed foods are industrially manufactured products that contain ingredients not typically used in home cooking, such as additives, preservatives, and artificial flavors.',
            tips: [
                'Linked to increased risk of obesity and chronic diseases',
                'Often high in added sugars, unhealthy fats, and sodium',
                'Low in fiber, vitamins, and essential nutrients',
                'Try to limit to 3 or fewer servings per day'
            ]
        },
        'high-sat-fat': {
            icon: '⚠️',
            title: 'High in Saturated Fat',
            description: `This food contains ${satFatAmount}g of saturated/trans fat per serving. High intake of saturated fat can raise LDL cholesterol and increase heart disease risk.`,
            tips: [
                'Limit saturated fat to less than 10% of daily calories',
                'Choose lean proteins and low-fat dairy options',
                'Replace with unsaturated fats when possible',
                'Balance with fiber-rich foods'
            ]
        },
        'both': {
            icon: '⚠️',
            title: 'Ultra-Processed & High Sat Fat',
            description: `This food is ultra-processed and contains ${satFatAmount}g of saturated/trans fat per serving. Consider limiting consumption.`,
            tips: [
                'Ultra-processed foods linked to health risks',
                'High saturated fat raises cholesterol',
                'Choose whole food alternatives when possible',
                'Enjoy occasionally as part of balanced diet'
            ]
        }
    };
    
    const warning = warnings[warningType];
    if (!warning) return;
    
    DOM.warningIcon.textContent = warning.icon;
    DOM.warningTitle.textContent = warning.title;
    DOM.warningDescription.textContent = warning.description;
    DOM.warningTips.innerHTML = `
        <h4>Health Tips</h4>
        <ul>
            ${warning.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
    `;
    
    DOM.warningModal.classList.add('active');
}

/**
 * Show nutrient breakdown modal
 */
function showBreakdown(nutrient) {
    const nutrientConfig = {
        calories: {
            icon: '🔥',
            title: 'Calories',
            unit: '',
            getValue: (food) => food.calories
        },
        protein: {
            icon: '💪',
            title: 'Protein',
            unit: 'g',
            getValue: (food) => food.protein
        },
        carbs: {
            icon: '🍞',
            title: 'Carbohydrates',
            unit: 'g',
            getValue: (food) => food.carbs
        },
        fat: {
            icon: '🥑',
            title: 'Sat/Trans Fat',
            unit: 'g',
            getValue: (food) => (food.saturatedFat || 0) + (food.transFat || 0)
        },
        fibre: {
            icon: '🥬',
            title: 'Fibre',
            unit: 'g',
            getValue: (food) => food.fibre
        },
        sugar: {
            icon: '🍬',
            title: 'Added Sugar',
            unit: 'g',
            getValue: (food) => food.addedSugar || 0
        },
        ultraProcessed: {
            icon: '🏭',
            title: 'Ultra-processed',
            unit: ' servings',
            getValue: (food) => food.ultraProcessed ? 1 : 0
        },
        water: {
            icon: '💧',
            title: 'Water',
            unit: ' cups',
            getValue: (food) => food.hydration || 0
        },
        salt: {
            icon: '🧂',
            title: 'Salt',
            unit: 'mg',
            getValue: (food) => food.salt || 0
        }
    };
    
    const config = nutrientConfig[nutrient];
    if (!config) return;
    
    // Calculate contributions from each food with servings > 0
    const contributions = [];
    let total = 0;
    
    AppState.foods.forEach(food => {
        const servings = AppState.servings[food.id] || 0;
        if (servings > 0) {
            const value = config.getValue(food) * servings;
            total += value;
            // Set threshold based on nutrient type
            // Water uses lower threshold (0.1 cups), others use 0.5
            const threshold = nutrient === 'water' ? 0.1 : 0.5;
            if (value > threshold) {
                contributions.push({
                    food,
                    servings,
                    value
                });
            }
        }
    });
    
    // Sort by contribution (highest first)
    contributions.sort((a, b) => b.value - a.value);
    
    // Update modal header
    // Water uses 1 decimal place for total, others use 0
    const totalDecimals = nutrient === 'water' ? 1 : 0;
    DOM.breakdownIcon.textContent = config.icon;
    DOM.breakdownTitle.textContent = config.title;
    DOM.breakdownTotal.textContent = `${formatNumber(total, totalDecimals)}${config.unit}`;
    
    // Generate list HTML
    if (contributions.length === 0) {
        DOM.breakdownList.style.display = 'none';
        DOM.breakdownEmpty.style.display = 'block';
    } else {
        DOM.breakdownList.style.display = 'block';
        DOM.breakdownEmpty.style.display = 'none';
        
        // Water uses 1 decimal place, others use 0
        const valueDecimals = nutrient === 'water' ? 1 : 0;
        DOM.breakdownList.innerHTML = contributions.map(({ food, servings, value }) => `
            <div class="breakdown-item" data-food-id="${food.id}" role="button" tabindex="0">
                <span class="breakdown-item-icon">${getFoodIcon(food.foodCategory)}</span>
                <div class="breakdown-item-info">
                    <div class="breakdown-item-name">${food.foodCategory}</div>
                    <div class="breakdown-item-servings">${servings} serving${servings !== 1 ? 's' : ''}</div>
                </div>
                <span class="breakdown-item-value">${formatNumber(value, valueDecimals)}${config.unit}</span>
                <span class="breakdown-item-edit">✎</span>
            </div>
        `).join('');
        
        // Attach click handlers to breakdown items
        attachBreakdownItemListeners();
    }
    
    DOM.breakdownModal.classList.add('active');
}

/**
 * Attach click handlers to breakdown items for editing servings
 */
function attachBreakdownItemListeners() {
    document.querySelectorAll('.breakdown-item[data-food-id]').forEach(item => {
        const rawId = item.dataset.foodId;
        const foodId = isNaN(parseInt(rawId)) ? rawId : parseInt(rawId);
        
        // Click handler
        item.addEventListener('click', () => {
            closeModals();
            showServingModal(foodId);
        });
        
        // Touch handler for mobile
        item.addEventListener('touchend', (e) => {
            e.preventDefault();
            closeModals();
            showServingModal(foodId);
        });
    });
}

/**
 * Show nutrient info modal with educational content
 */
function showNutrientInfo(nutrient) {
    const nutrientInfo = {
        calories: {
            icon: '🔥',
            title: 'Calories',
            content: `
                <h4>What are calories?</h4>
                <p>Calories measure the energy your body gets from food. Your body needs energy for everything—breathing, thinking, moving, and more.</p>
                
                <h4>Why track calories?</h4>
                <p>Tracking calories helps you understand your energy balance:</p>
                <ul>
                    <li>Eating more than you burn leads to weight gain</li>
                    <li>Eating less than you burn leads to weight loss</li>
                    <li>Balance maintains your current weight</li>
                </ul>
                
                <div class="nutrient-target-info">
                    <strong>Your target:</strong> ${AppState.settings.baseCalories + AppState.settings.activityCalories + (AppState.exerciseCalories || 0)} calories/day
                </div>
            `
        },
        protein: {
            icon: '💪',
            title: 'Protein',
            content: `
                <h4>Why track protein?</h4>
                <p>Protein is essential for building and repairing tissues, making enzymes and hormones, and supporting immune function.</p>
                
                <h4>Benefits of adequate protein:</h4>
                <ul>
                    <li>Builds and maintains muscle mass</li>
                    <li>Keeps you feeling full longer</li>
                    <li>Supports bone health</li>
                    <li>Helps with recovery after exercise</li>
                </ul>
                
                <h4>Good sources:</h4>
                <p>Lean meats, fish, eggs, dairy, legumes, nuts, and seeds.</p>
                
                <div class="nutrient-target-info">
                    <strong>Your target:</strong> ${AppState.settings.proteinTarget}g minimum/day
                </div>
            `
        },
        water: {
            icon: '💧',
            title: 'Water',
            content: `
                <h4>Why track water?</h4>
                <p>Water is essential for nearly every bodily function. Many people don't realize how much hydration they get from food.</p>
                
                <h4>Benefits of proper hydration:</h4>
                <ul>
                    <li>Regulates body temperature</li>
                    <li>Lubricates joints</li>
                    <li>Helps deliver nutrients to cells</li>
                    <li>Improves energy and brain function</li>
                    <li>Aids digestion</li>
                </ul>
                
                <h4>Water from food:</h4>
                <p>Fruits, vegetables, soups, and dairy all contribute to your daily water intake.</p>
                
                <div class="nutrient-target-info">
                    <strong>Your target:</strong> ${AppState.settings.waterTarget} cups/day
                </div>
            `
        },
        fat: {
            icon: '🧈',
            title: 'Saturated & Trans Fat',
            content: `
                <h4>Why limit saturated and trans fats?</h4>
                <p>While some fat is essential for health, saturated and trans fats can raise LDL ("bad") cholesterol and increase heart disease risk.</p>
                
                <h4>Health concerns:</h4>
                <ul>
                    <li>Increases LDL cholesterol</li>
                    <li>Raises risk of heart disease</li>
                    <li>Trans fats are particularly harmful</li>
                    <li>Can contribute to inflammation</li>
                </ul>
                
                <h4>Better alternatives:</h4>
                <p>Choose unsaturated fats from olive oil, avocados, nuts, and fatty fish instead.</p>
                
                <div class="nutrient-target-info">
                    <strong>Your limit:</strong> ${AppState.settings.fatTarget}g maximum/day
                </div>
            `
        },
        fibre: {
            icon: '🌾',
            title: 'Fibre',
            content: `
                <h4>Why track fibre?</h4>
                <p>Fibre is crucial for digestive health and has numerous benefits for your overall wellbeing.</p>
                
                <h4>Benefits of fibre:</h4>
                <ul>
                    <li>Promotes healthy digestion</li>
                    <li>Helps control blood sugar levels</li>
                    <li>Lowers cholesterol</li>
                    <li>Keeps you feeling full</li>
                    <li>Feeds beneficial gut bacteria</li>
                </ul>
                
                <h4>Good sources:</h4>
                <p>Whole grains, legumes, fruits, vegetables, nuts, and seeds.</p>
                
                <div class="nutrient-target-info">
                    <strong>Your target:</strong> ${AppState.settings.fibreTarget}g minimum/day
                </div>
            `
        },
        sugar: {
            icon: '🍬',
            title: 'Added Sugar',
            content: `
                <h4>Why limit added sugar?</h4>
                <p>Added sugars provide calories without nutritional benefits. Unlike natural sugars in fruits, added sugars can harm your health.</p>
                
                <h4>Health concerns:</h4>
                <ul>
                    <li>Contributes to weight gain</li>
                    <li>Increases risk of type 2 diabetes</li>
                    <li>Can cause tooth decay</li>
                    <li>May increase heart disease risk</li>
                    <li>Can lead to energy crashes</li>
                </ul>
                
                <h4>Tips:</h4>
                <p>Check labels for hidden sugars. Natural sugars in whole fruits come with fibre and nutrients.</p>
                
                <div class="nutrient-target-info">
                    <strong>Your limit:</strong> ${AppState.settings.sugarTarget}g maximum/day
                </div>
            `
        },
        ultraProcessed: {
            icon: '🏭',
            title: 'Ultra-Processed Foods',
            content: `
                <h4>What are ultra-processed foods?</h4>
                <p>Ultra-processed foods are industrial formulations with many ingredients rarely used in home cooking—like high-fructose corn syrup, hydrogenated oils, and artificial additives.</p>
                
                <h4>Health concerns:</h4>
                <ul>
                    <li>Often high in calories, salt, sugar, and fat</li>
                    <li>Low in fibre, vitamins, and minerals</li>
                    <li>Designed to be hyper-palatable (easy to overeat)</li>
                    <li>Associated with obesity and chronic diseases</li>
                    <li>May disrupt appetite regulation</li>
                </ul>
                
                <h4>Examples:</h4>
                <p>Chips, cookies, sugary cereals, instant noodles, processed meats, and soft drinks.</p>
                
                <div class="nutrient-target-info">
                    <strong>Your limit:</strong> ${AppState.settings.ultraProcessedTarget} servings maximum/day
                </div>
            `
        },
        salt: {
            icon: '🧂',
            title: 'Salt/Sodium',
            content: `
                <h4>Why track salt?</h4>
                <p>Salt (sodium) is essential for nerve and muscle function, but most people consume too much. Tracking helps you stay in the healthy range.</p>
                
                <h4>Health concerns from excess salt:</h4>
                <ul>
                    <li>Raises blood pressure</li>
                    <li>Increases risk of heart disease and stroke</li>
                    <li>Can cause water retention</li>
                    <li>May affect kidney function</li>
                </ul>
                
                <h4>Too little salt can cause:</h4>
                <ul>
                    <li>Muscle cramps</li>
                    <li>Fatigue and weakness</li>
                    <li>Headaches</li>
                </ul>
                
                <h4>High-salt foods:</h4>
                <p>Processed foods, cheese, bread, condiments, and restaurant meals.</p>
                
                <div class="nutrient-target-info">
                    <strong>Your range:</strong> ${AppState.settings.saltMinTarget}mg minimum – ${AppState.settings.saltMaxTarget}mg maximum/day
                </div>
            `
        }
    };
    
    const info = nutrientInfo[nutrient];
    if (!info) return;
    
    DOM.nutrientInfoIcon.textContent = info.icon;
    DOM.nutrientInfoTitle.textContent = info.title;
    DOM.nutrientInfoBody.innerHTML = info.content;
    
    DOM.nutrientInfoModal.classList.add('active');
}

/**
 * Show serving input modal
 */
function showServingModal(foodId) {
    const food = AppState.foods.find(f => f.id === foodId);
    if (!food) return;
    
    AppState.currentFoodId = foodId;
    
    DOM.servingIcon.textContent = getFoodIcon(food.foodCategory);
    DOM.servingCategoryName.textContent = food.foodCategory;
    DOM.servingSizeInfo.innerHTML = `<strong>1 serving</strong> = ${food.servingSize || 'Not specified'}`;
    DOM.servingInput.value = AppState.servings[foodId] || 0;
    
    DOM.servingModal.classList.add('active');
    DOM.servingInput.focus();
    DOM.servingInput.select();
}

/**
 * Close modals
 */
function closeModals() {
    DOM.foodInfoModal.classList.remove('active');
    DOM.servingModal.classList.remove('active');
    DOM.exerciseModal.classList.remove('active');
    DOM.breakdownModal.classList.remove('active');
    DOM.nutrientInfoModal.classList.remove('active');
    DOM.historyModal.classList.remove('active');
    DOM.warningModal.classList.remove('active');
    AppState.currentFoodId = null;
}

/**
 * Reset today's servings
 */
async function resetDay() {
    
    await db.resetTodayServings();
    AppState.servings = {};
    await saveExerciseCalories(0);
    await saveWaterCount(0);
    renderFoodGroups();
    updateStats();
}

/**
 * Load today's exercise calories
 */
async function loadExerciseCalories() {
    const exerciseData = await db.getSetting('exerciseData', null);
    const today = db.getTodayKey();
    
    // Only use if it's from today
    if (exerciseData && exerciseData.date === today) {
        AppState.exerciseCalories = exerciseData.calories || 0;
    } else {
        AppState.exerciseCalories = 0;
    }
    
    updateExerciseDisplay();
}

/**
 * Save exercise calories for today
 */
async function saveExerciseCalories(calories) {
    AppState.exerciseCalories = calories;
    await db.saveSetting('exerciseData', {
        date: db.getTodayKey(),
        calories: calories
    });
    updateExerciseDisplay();
    updateStats();
}

/**
 * Load today's water count
 */
async function loadWaterCount() {
    const waterData = await db.getSetting('waterData', null);
    const today = db.getTodayKey();
    
    if (waterData && waterData.date === today) {
        AppState.waterCount = waterData.count || 0;
    } else {
        AppState.waterCount = 0;
    }
}

/**
 * Save water count for today
 */
async function saveWaterCount(count) {
    AppState.waterCount = count;
    await db.saveSetting('waterData', {
        date: db.getTodayKey(),
        count: count
    });
    updateStats();
}

/**
 * Increment water count
 */
async function incrementWater() {
    await saveWaterCount(AppState.waterCount + 1);
}

/**
 * Update exercise button display
 */
function updateExerciseDisplay() {
    const calories = AppState.exerciseCalories || 0;
    DOM.exerciseValue.textContent = calories > 0 ? `+${calories}` : '+0';
    DOM.exerciseBtn.classList.toggle('has-exercise', calories > 0);
    DOM.calorieTarget.textContent = calculateTotalTarget();
}

/**
 * Show exercise modal
 */
function showExerciseModal() {
    DOM.exerciseInput.value = AppState.exerciseCalories || 0;
    DOM.exerciseModal.classList.add('active');
    DOM.exerciseInput.focus();
    DOM.exerciseInput.select();
}

/**
 * Log today's totals
 */
async function logDay() {
    // Calculate current totals
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalSatTransFat = 0;
    let totalFibre = 0;
    let totalAddedSugar = 0;
    
    AppState.foods.forEach(food => {
        const servings = AppState.servings[food.id] || 0;
        totalCalories += food.calories * servings;
        totalProtein += food.protein * servings;
        totalCarbs += food.carbs * servings;
        totalSatTransFat += ((food.saturatedFat || 0) + (food.transFat || 0)) * servings;
        totalFibre += food.fibre * servings;
        totalAddedSugar += (food.addedSugar || 0) * servings;
    });
    
    const today = db.getTodayKey();
    const logEntry = {
        date: today,
        timestamp: Date.now(),
        calories: Math.round(totalCalories),
        protein: Math.round(totalProtein),
        carbs: Math.round(totalCarbs),
        fat: Math.round(totalSatTransFat),
        fibre: Math.round(totalFibre),
        sugar: Math.round(totalAddedSugar),
        calorieTarget: calculateTotalTarget(),
        exercise: AppState.exerciseCalories
    };
    
    // Save to database
    await db.saveSetting(`log_${today}`, logEntry);
    
    // Show confirmation
    alert(`Day logged!\n\nCalories: ${logEntry.calories} / ${logEntry.calorieTarget}\nProtein: ${logEntry.protein}g\nCarbs: ${logEntry.carbs}g\nSat/Trans Fat: ${logEntry.fat}g\nFibre: ${logEntry.fibre}g\nAdded Sugar: ${logEntry.sugar}g`);
}

/**
 * Get all logged days
 */
async function getLogHistory() {
    const settings = await db.getAllSettings();
    const logs = [];
    
    for (const [key, value] of Object.entries(settings)) {
        if (key.startsWith('log_') && value && typeof value === 'object') {
            logs.push(value);
        }
    }
    
    // Sort by date descending (newest first)
    logs.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return logs;
}

/**
 * Delete a log entry
 */
async function deleteLogEntry(date) {
    if (!confirm(`Delete log for ${formatDate(date)}?`)) return;
    
    await db.saveSetting(`log_${date}`, null);
    await showHistory();
}

/**
 * Format date for display
 */
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Show history modal
 */
async function showHistory() {
    const logs = await getLogHistory();
    
    if (logs.length === 0) {
        DOM.historyList.style.display = 'none';
        DOM.historyEmpty.style.display = 'block';
    } else {
        DOM.historyList.style.display = 'block';
        DOM.historyEmpty.style.display = 'none';
        
        DOM.historyList.innerHTML = logs.map(log => {
            const exerciseText = log.exercise ? `+${log.exercise} exercise` : '';
            const targetText = log.calorieTarget ? ` / ${log.calorieTarget}` : '';
            return `
            <div class="history-item">
                <div class="history-item-header">
                    <span class="history-item-date">${formatDate(log.date)}</span>
                    <button class="history-item-delete" data-date="${log.date}" title="Delete">🗑️</button>
                </div>
                <div class="history-item-calories-row">
                    <span class="history-item-calories">${log.calories}${targetText} cal</span>
                    ${exerciseText ? `<span class="history-item-exercise">🏃 ${exerciseText}</span>` : ''}
                </div>
                <div class="history-item-macros">
                    <span class="history-item-macro">💪 ${log.protein}g</span>
                    <span class="history-item-macro">🍞 ${log.carbs}g</span>
                    <span class="history-item-macro">🥑 ${log.fat}g</span>
                    <span class="history-item-macro">🥬 ${log.fibre}g</span>
                    <span class="history-item-macro">🍬 ${log.sugar}g</span>
                </div>
            </div>
        `;
        }).join('');
        
        // Attach delete handlers
        DOM.historyList.querySelectorAll('.history-item-delete').forEach(btn => {
            btn.addEventListener('click', () => deleteLogEntry(btn.dataset.date));
        });
    }
    
    DOM.historyModal.classList.add('active');
}

/**
 * Export history as CSV
 */
async function exportHistory() {
    const logs = await getLogHistory();
    
    if (logs.length === 0) {
        alert('No logs to export');
        return;
    }
    
    // Create CSV content
    const headers = ['Date', 'Calories', 'Target', 'Protein (g)', 'Carbs (g)', 'Sat/Trans Fat (g)', 'Fibre (g)', 'Added Sugar (g)', 'Exercise'];
    const rows = logs.map(log => [
        log.date,
        log.calories,
        log.calorieTarget || '',
        log.protein,
        log.carbs,
        log.fat,
        log.fibre,
        log.sugar,
        log.exercise || 0
    ]);
    
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    // Download file
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diet-log-${db.getTodayKey()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Clear cache only - refreshes app code without losing data
 */
async function clearCacheAndReload() {
    if (!confirm('Clear cache and food data, then reload? This will re-download the default food database.')) return;
    
    try {
        // Clear IndexedDB data
        await db.clearFoods();
        await db.saveSetting('isDefaultData', null);
        await db.saveSetting('searchFoods', null);
        await db.saveSetting('foodDatabase', null);
        await db.saveSetting('hasSeenHelp', null);
        
        // Unregister service workers
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (const registration of registrations) {
                if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }
                await registration.unregister();
            }
        }
        
        // Clear all caches
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map(name => caches.delete(name)));
        }
        
        // Wait for cleanup then reload
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Pre-fetch to bust HTTP cache
        try {
            await fetch(window.location.href, { cache: 'no-store' });
        } catch (e) { /* ok */ }
        
        // Navigate to fresh URL
        window.location.href = window.location.origin + window.location.pathname + '?v=' + Date.now();
        
    } catch (error) {
        console.error('Cache clear error:', error);
        alert('Cache clear failed. Try a manual hard refresh (Cmd+Shift+R or Ctrl+Shift+R)');
    }
}

/**
 * Handle file upload
 */
async function handleFileUpload(file) {
    if (!file) return;
    
    try {
        DOM.fileUploadArea.classList.add('loading');
        
        const foods = await parseSpreadsheet(file);
        
        if (foods.length === 0) {
            alert('No food data found in the file. Please check the format.');
            return;
        }
        
        await db.saveFoods(foods);
        AppState.isDefaultData = false;
        await db.saveSetting('isDefaultData', false);
        await loadFoods();
        
        alert(`Successfully imported ${foods.length} food categories!`);
    } catch (error) {
        console.error('Import error:', error);
        alert('Failed to import food data: ' + error.message);
    } finally {
        DOM.fileUploadArea.classList.remove('loading');
        DOM.fileInput.value = '';
    }
}

/**
 * Clear food data
 */
async function clearFoodData() {
    if (!confirm('Clear all food data? This will remove your imported food database.')) return;
    
    await db.clearFoods();
    await db.resetTodayServings();
    await db.saveSetting('isDefaultData', null); // Reset the flag
    AppState.foods = [];
    AppState.servings = {};
    AppState.isDefaultData = false;
    
    // Reload foods (will trigger default data loading if empty)
    await loadFoods();
}

// ============================================
// Food Search Database
// ============================================

/**
 * Load the food database from JSON file
 */
async function loadFoodDatabase() {
    try {
        // Check if already loaded in IndexedDB
        const cachedDatabase = await db.getSetting('foodDatabase');
        if (cachedDatabase && cachedDatabase.length > 0) {
            AppState.foodDatabase = cachedDatabase;
            console.log(`Food database loaded from cache: ${cachedDatabase.length} items`);
            return;
        }
        
        // Fetch from JSON file
        const response = await fetch('food-database.json');
        if (!response.ok) {
            throw new Error('Failed to load food database');
        }
        
        const data = await response.json();
        AppState.foodDatabase = data.foods || [];
        
        // Cache in IndexedDB
        await db.saveSetting('foodDatabase', AppState.foodDatabase);
        console.log(`Food database loaded: ${AppState.foodDatabase.length} items`);
    } catch (error) {
        console.error('Error loading food database:', error);
        AppState.foodDatabase = [];
    }
}

/**
 * Load recent foods from storage
 */
async function loadRecentFoods() {
    const recent = await db.getSetting('recentFoods');
    AppState.recentFoods = recent || [];
}

/**
 * Save recent foods to storage
 */
async function saveRecentFoods() {
    // Keep only last 20 items
    AppState.recentFoods = AppState.recentFoods.slice(0, 20);
    await db.saveSetting('recentFoods', AppState.recentFoods);
}

/**
 * Add food to recent list
 */
async function addToRecentFoods(food) {
    // Remove if already exists
    AppState.recentFoods = AppState.recentFoods.filter(f => f.id !== food.id);
    // Add to beginning
    AppState.recentFoods.unshift(food);
    await saveRecentFoods();
}

/**
 * Load favorites from storage
 */
async function loadFavorites() {
    const favorites = await db.getSetting('favoriteFoods');
    AppState.favorites = favorites || [];
}

/**
 * Save favorites to storage
 */
async function saveFavorites() {
    await db.saveSetting('favoriteFoods', AppState.favorites);
}

/**
 * Toggle food as favorite
 */
async function toggleFavorite(food) {
    const index = AppState.favorites.findIndex(f => f.id === food.id);
    if (index >= 0) {
        AppState.favorites.splice(index, 1);
    } else {
        AppState.favorites.unshift(food);
    }
    await saveFavorites();
    updateFavoriteButton(food);
}

/**
 * Check if food is a favorite
 */
function isFavorite(food) {
    return AppState.favorites.some(f => f.id === food.id);
}

/**
 * Update the favorite button state
 */
function updateFavoriteButton(food) {
    const isFav = isFavorite(food);
    DOM.toggleFavoriteBtn.classList.toggle('active', isFav);
    DOM.toggleFavoriteBtn.title = isFav ? 'Remove from favorites' : 'Add to favorites';
}

/**
 * Get icon for food category
 */
function getSearchFoodIcon(category) {
    const iconMap = {
        'Fruits': '🍎',
        'Vegetables': '🥦',
        'Protein': '🍗',
        'Dairy': '🥛',
        'Grains': '🌾',
        'Nuts and Seeds': '🥜',
        'Fats and Oils': '🫒',
        'Condiments': '🍯',
        'Sweeteners': '🍬',
        'Beverages': '🥤',
        'Snacks': '🍪',
        'Fast Food': '🍔',
        'Soups': '🥣',
        'Prepared Meals': '🍝',
        'Breakfast': '🥞',
        'Baked Goods': '🧁'
    };
    return iconMap[category] || '🍽️';
}

/**
 * Search foods in the database
 */
function searchFoods(query) {
    if (!query || query.length < 2) {
        return [];
    }
    
    const lowerQuery = query.toLowerCase();
    const words = lowerQuery.split(/\s+/).filter(w => w.length > 0);
    
    return AppState.foodDatabase
        .filter(food => {
            const searchText = `${food.name} ${food.brand || ''} ${food.category}`.toLowerCase();
            return words.every(word => searchText.includes(word));
        })
        .slice(0, 50); // Limit results
}

/**
 * Render search results
 */
function renderSearchResults(foods) {
    if (foods.length === 0) {
        DOM.searchResults.innerHTML = `
            <div class="search-no-results">
                <span class="no-results-icon">🔍</span>
                <p>No foods found</p>
            </div>
        `;
        return;
    }
    
    DOM.searchResults.innerHTML = foods.map(food => `
        <div class="search-result-item" data-food-id="${food.id}">
            <span class="result-icon">${getSearchFoodIcon(food.category)}</span>
            <div class="result-info">
                <div class="result-name">${food.name}</div>
                ${food.brand ? `<div class="result-brand">${food.brand}</div>` : ''}
                <div class="result-meta">
                    <span class="result-calories">${food.calories} cal</span>
                    <span class="result-serving">${food.servingSize}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Attach click handlers
    DOM.searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const foodId = item.dataset.foodId;
            const food = AppState.foodDatabase.find(f => f.id === foodId) ||
                         AppState.recentFoods.find(f => f.id === foodId) ||
                         AppState.favorites.find(f => f.id === foodId);
            if (food) {
                showAddFoodModal(food);
            }
        });
    });
}

/**
 * Render recent foods tab
 */
function renderRecentFoods() {
    if (AppState.recentFoods.length === 0) {
        DOM.searchResults.innerHTML = `
            <div class="empty-tab-state">
                <span class="empty-icon">🕐</span>
                <p>No recent foods yet.<br>Foods you add will appear here.</p>
            </div>
        `;
        return;
    }
    renderSearchResults(AppState.recentFoods);
}

/**
 * Render favorites tab
 */
function renderFavorites() {
    if (AppState.favorites.length === 0) {
        DOM.searchResults.innerHTML = `
            <div class="empty-tab-state">
                <span class="empty-icon">⭐</span>
                <p>No favorites yet.<br>Tap the star icon when adding a food.</p>
            </div>
        `;
        return;
    }
    renderSearchResults(AppState.favorites);
}

/**
 * Show search modal
 */
function showSearchModal() {
    DOM.searchModal.classList.add('active');
    DOM.foodSearchInput.value = '';
    DOM.clearSearchBtn.hidden = true;
    AppState.currentSearchTab = 'search';
    
    // Reset tabs
    document.querySelectorAll('.search-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === 'search');
    });
    
    // Show placeholder
    DOM.searchResults.innerHTML = `
        <div class="search-placeholder">
            <span class="placeholder-icon">🍎</span>
            <p>Type to search ${AppState.foodDatabase.length}+ foods</p>
        </div>
    `;
    
    // Focus input after animation
    setTimeout(() => DOM.foodSearchInput.focus(), 100);
}

/**
 * Close search modal
 */
function closeSearchModal() {
    DOM.searchModal.classList.remove('active');
}

/**
 * Show add food modal
 */
function showAddFoodModal(food) {
    AppState.currentSearchFood = food;
    
    DOM.addFoodIcon.textContent = getSearchFoodIcon(food.category);
    DOM.addFoodName.textContent = food.name;
    DOM.addFoodBrand.textContent = food.brand || '';
    DOM.addFoodServing.textContent = food.servingSize;
    DOM.addFoodCalories.textContent = food.calories;
    DOM.addFoodProtein.textContent = `${food.protein}g`;
    DOM.addFoodCarbs.textContent = `${food.carbs}g`;
    DOM.addFoodFat.textContent = `${food.totalFat}g`;
    DOM.addServingInput.value = 1;
    
    updateFavoriteButton(food);
    
    DOM.addFoodModal.classList.add('active');
}

/**
 * Close add food modal
 */
function closeAddFoodModal() {
    DOM.addFoodModal.classList.remove('active');
    AppState.currentSearchFood = null;
}

/**
 * Add searched food to the daily log
 */
async function addSearchedFoodToLog() {
    const food = AppState.currentSearchFood;
    if (!food) return;
    
    const servings = parseFloat(DOM.addServingInput.value) || 1;
    
    // Create a food ID for this searched food
    const searchFoodId = `search-${food.id}`;
    
    // Add to the main foods list if not already there
    let existingFood = AppState.foods.find(f => f.id === searchFoodId);
    
    if (!existingFood) {
        // Create a food entry compatible with the app's food structure
        existingFood = {
            id: searchFoodId,
            foodGroup: food.category,
            foodCategory: food.name,
            servingsLow: 0,
            servingsHigh: 10,
            servingSize: food.servingSize,
            calories: food.calories,
            protein: food.protein,
            fibre: food.fibre,
            carbs: food.carbs,
            sugar: food.sugar,
            addedSugar: food.addedSugar,
            totalFat: food.totalFat,
            saturatedFat: food.saturatedFat,
            transFat: food.transFat,
            ultraProcessed: food.ultraProcessed,
            water: food.hydration || 0,
            salt: food.salt || 0,
            isSearchFood: true
        };
        
        AppState.foods.push(existingFood);
        
        // Save the search food to a separate list in settings for persistence
        const searchFoods = await db.getSetting('searchFoods') || [];
        searchFoods.push(existingFood);
        await db.saveSetting('searchFoods', searchFoods);
    }
    
    // Update servings
    const currentServings = AppState.servings[existingFood.id] || 0;
    AppState.servings[existingFood.id] = currentServings + servings;
    await db.saveServing(existingFood.id, AppState.servings[existingFood.id]);
    
    // Add to recent foods
    await addToRecentFoods(food);
    
    // Close modals
    DOM.addFoodModal.classList.remove('active');
    DOM.searchModal.classList.remove('active');
    AppState.currentSearchFood = null;
    
    // Re-render and update stats
    renderFoodGroups();
    updateStats();
}

// ============================================
// Help Modal
// ============================================

/**
 * Show help modal
 */
function showHelpModal() {
    DOM.helpModal.classList.add('active');
}

/**
 * Close help modal
 */
function closeHelpModal() {
    DOM.helpModal.classList.remove('active');
}

/**
 * Check if this is the first launch and show help
 */
async function checkFirstLaunch() {
    const hasSeenHelp = await db.getSetting('hasSeenHelp');
    if (!hasSeenHelp) {
        // Small delay to let the app render first
        setTimeout(() => {
            showHelpModal();
        }, 500);
        await db.saveSetting('hasSeenHelp', true);
    }
}

// ============================================
// Navigation
// ============================================

function showSettings() {
    DOM.settingsScreen.classList.add('active');
}

function hideSettings() {
    DOM.settingsScreen.classList.remove('active');
}

// ============================================
// Event Listeners Setup
// ============================================

function setupEventListeners() {
    // Navigation
    DOM.settingsBtn.addEventListener('click', showSettings);
    DOM.backBtn.addEventListener('click', hideSettings);
    DOM.goToSettingsBtn.addEventListener('click', showSettings);
    
    // Settings - Calories
    DOM.baseCalories.addEventListener('change', async (e) => {
        AppState.settings.baseCalories = parseInt(e.target.value) || 1800;
        updateActivityAllowance();
        await saveSettings();
        updateStats();
    });
    
    DOM.activityLevel.addEventListener('change', async (e) => {
        AppState.settings.activityLevel = e.target.value;
        updateActivityAllowance();
        await saveSettings();
        updateStats();
    });
    
    // Settings - Macro targets
    DOM.proteinTargetInput.addEventListener('change', async (e) => {
        AppState.settings.proteinTarget = parseInt(e.target.value) || 50;
        await saveSettings();
        updateStats();
    });
    
    DOM.waterTargetInput.addEventListener('change', async (e) => {
        AppState.settings.waterTarget = parseInt(e.target.value) || 8;
        await saveSettings();
        updateStats();
    });
    
    DOM.carbsTargetInput.addEventListener('change', async (e) => {
        AppState.settings.carbsTarget = parseInt(e.target.value) || 250;
        await saveSettings();
        updateStats();
    });
    
    DOM.fatTargetInput.addEventListener('change', async (e) => {
        AppState.settings.fatTarget = parseInt(e.target.value) || 65;
        await saveSettings();
        updateStats();
    });
    
    DOM.fibreTargetInput.addEventListener('change', async (e) => {
        AppState.settings.fibreTarget = parseInt(e.target.value) || 25;
        await saveSettings();
        updateStats();
    });
    
    DOM.sugarTargetInput.addEventListener('change', async (e) => {
        AppState.settings.sugarTarget = parseInt(e.target.value) || 50;
        await saveSettings();
        updateStats();
    });
    
    DOM.ultraProcessedTargetInput.addEventListener('change', async (e) => {
        AppState.settings.ultraProcessedTarget = parseInt(e.target.value) || 3;
        await saveSettings();
        updateStats();
    });
    
    DOM.saltMinTargetInput.addEventListener('change', async (e) => {
        AppState.settings.saltMinTarget = parseInt(e.target.value) || 500;
        await saveSettings();
        updateStats();
    });
    
    DOM.saltMaxTargetInput.addEventListener('change', async (e) => {
        AppState.settings.saltMaxTarget = parseInt(e.target.value) || 2300;
        await saveSettings();
        updateStats();
    });
    
    // Settings - Unit system
    DOM.metricBtn.addEventListener('click', async () => {
        AppState.settings.unitSystem = 'metric';
        updateUnitSystemUI();
        await saveSettings();
    });
    
    DOM.imperialBtn.addEventListener('click', async () => {
        AppState.settings.unitSystem = 'imperial';
        updateUnitSystemUI();
        await saveSettings();
    });
    
    // File upload
    DOM.fileUploadArea.addEventListener('click', () => DOM.fileInput.click());
    DOM.fileInput.addEventListener('change', (e) => handleFileUpload(e.target.files[0]));
    
    // Drag and drop
    DOM.fileUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        DOM.fileUploadArea.classList.add('dragover');
    });
    
    DOM.fileUploadArea.addEventListener('dragleave', () => {
        DOM.fileUploadArea.classList.remove('dragover');
    });
    
    DOM.fileUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        DOM.fileUploadArea.classList.remove('dragover');
        handleFileUpload(e.dataTransfer.files[0]);
    });
    
    // Import new data / Clear data
    DOM.importNewBtn.addEventListener('click', () => DOM.fileInput.click());
    DOM.clearDataBtn.addEventListener('click', clearFoodData);
    
    // History and Log buttons
    DOM.historyBtn.addEventListener('click', showHistory);
    DOM.logDayBtn.addEventListener('click', logDay);
    DOM.closeHistoryModal.addEventListener('click', closeModals);
    DOM.historyModal.addEventListener('click', (e) => {
        if (e.target === DOM.historyModal) closeModals();
    });
    DOM.exportHistoryBtn.addEventListener('click', exportHistory);
    
    // Reset day (tap = reset servings, long press = cache clear)
    let resetPressTimer = null;
    let resetIsLongPress = false;
    
    DOM.resetDayBtn.addEventListener('mousedown', () => {
        resetIsLongPress = false;
        resetPressTimer = setTimeout(() => {
            resetIsLongPress = true;
            clearCacheAndReload();
        }, 1000);
    });
    
    DOM.resetDayBtn.addEventListener('mouseup', () => {
        clearTimeout(resetPressTimer);
        if (!resetIsLongPress) {
            if (confirm('Reset all servings to zero?')) {
                resetDay();
            }
        }
    });
    
    DOM.resetDayBtn.addEventListener('mouseleave', () => {
        clearTimeout(resetPressTimer);
    });
    
    DOM.resetDayBtn.addEventListener('touchstart', () => {
        resetIsLongPress = false;
        resetPressTimer = setTimeout(() => {
            resetIsLongPress = true;
            clearCacheAndReload();
        }, 1000);
    }, { passive: true });
    
    DOM.resetDayBtn.addEventListener('touchend', (e) => {
        clearTimeout(resetPressTimer);
        if (!resetIsLongPress) {
            e.preventDefault();
            if (confirm('Reset all servings to zero?')) {
                resetDay();
            }
        }
    });
    
    DOM.resetDayBtn.addEventListener('touchcancel', () => {
        clearTimeout(resetPressTimer);
    });
    
    // Exercise modal
    DOM.exerciseBtn.addEventListener('click', showExerciseModal);
    DOM.closeExerciseModal.addEventListener('click', closeModals);
    
    DOM.decreaseExercise.addEventListener('click', () => {
        const current = parseInt(DOM.exerciseInput.value) || 0;
        DOM.exerciseInput.value = Math.max(0, current - 50);
    });
    
    DOM.increaseExercise.addEventListener('click', () => {
        const current = parseInt(DOM.exerciseInput.value) || 0;
        DOM.exerciseInput.value = current + 50;
    });
    
    DOM.saveExercise.addEventListener('click', async () => {
        const value = parseInt(DOM.exerciseInput.value) || 0;
        await saveExerciseCalories(value);
        closeModals();
    });
    
    DOM.exerciseInput.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            const value = parseInt(DOM.exerciseInput.value) || 0;
            await saveExerciseCalories(value);
            closeModals();
        }
    });
    
    // Preset buttons for exercise
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const current = parseInt(DOM.exerciseInput.value) || 0;
            const add = parseInt(btn.dataset.value) || 0;
            DOM.exerciseInput.value = current + add;
        });
    });
    
    DOM.exerciseModal.addEventListener('click', (e) => {
        if (e.target === DOM.exerciseModal) closeModals();
    });
    
    // Breakdown modal
    DOM.closeBreakdownModal.addEventListener('click', closeModals);
    DOM.breakdownModal.addEventListener('click', (e) => {
        if (e.target === DOM.breakdownModal) closeModals();
    });
    
    // Nutrient info modal
    DOM.closeNutrientInfoModal.addEventListener('click', closeModals);
    DOM.nutrientInfoModal.addEventListener('click', (e) => {
        if (e.target === DOM.nutrientInfoModal) closeModals();
    });
    
    // Warning modal
    DOM.closeWarningModal.addEventListener('click', closeModals);
    DOM.warningModal.addEventListener('click', (e) => {
        if (e.target === DOM.warningModal) closeModals();
    });
    
    // Info buttons show educational content about nutrients
    document.querySelectorAll('.macro-info-btn, .calorie-info-btn').forEach(btn => {
        const nutrient = btn.dataset.nutrient;
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNutrientInfo(nutrient);
        });
        
        // Touch handling for mobile
        btn.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showNutrientInfo(nutrient);
        });
    });
    
    // Macro bars and calorie ring show breakdown on tap (with scroll detection)
    const MACRO_MOVE_THRESHOLD = 10; // pixels - if finger moves more than this, it's a scroll
    
    document.querySelectorAll('.macro-item, .calorie-ring').forEach(item => {
        const nutrient = item.dataset.nutrient;
        let startX = 0;
        let startY = 0;
        let hasMoved = false;
        
        // Mouse click (desktop)
        item.addEventListener('click', (e) => {
            // Don't trigger if clicking info button or exercise button
            if (e.target.closest('.macro-info-btn') || e.target.closest('.calorie-info-btn') || e.target.closest('.exercise-btn')) return;
            showBreakdown(nutrient);
        });
        
        // Touch events with scroll detection (mobile)
        item.addEventListener('touchstart', (e) => {
            hasMoved = false;
            if (e.touches && e.touches[0]) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
        }, { passive: true });
        
        item.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches[0]) {
                const deltaX = Math.abs(e.touches[0].clientX - startX);
                const deltaY = Math.abs(e.touches[0].clientY - startY);
                if (deltaX > MACRO_MOVE_THRESHOLD || deltaY > MACRO_MOVE_THRESHOLD) {
                    hasMoved = true;
                }
            }
        }, { passive: true });
        
        item.addEventListener('touchend', (e) => {
            // Don't trigger if scrolling or clicking buttons
            if (hasMoved) return;
            if (e.target.closest('.macro-info-btn') || e.target.closest('.calorie-info-btn') || e.target.closest('.exercise-btn')) return;
            e.preventDefault();
            showBreakdown(nutrient);
        });
    });
    
    // Modals
    DOM.closeInfoModal.addEventListener('click', closeModals);
    DOM.closeServingModal.addEventListener('click', closeModals);
    
    DOM.foodInfoModal.addEventListener('click', (e) => {
        if (e.target === DOM.foodInfoModal) closeModals();
    });
    
    DOM.servingModal.addEventListener('click', (e) => {
        if (e.target === DOM.servingModal) closeModals();
    });
    
    // Serving modal controls
    DOM.decreaseServing.addEventListener('click', () => {
        const current = parseFloat(DOM.servingInput.value) || 0;
        DOM.servingInput.value = Math.max(0, current - 0.5).toFixed(1);
    });
    
    DOM.increaseServing.addEventListener('click', () => {
        const current = parseFloat(DOM.servingInput.value) || 0;
        DOM.servingInput.value = (current + 0.5).toFixed(1);
    });
    
    const handleSaveServing = async () => {
        if (AppState.currentFoodId) {
            const value = parseFloat(DOM.servingInput.value) || 0;
            await setServing(AppState.currentFoodId, value);
        }
        closeModals();
    };
    
    DOM.saveServing.addEventListener('click', handleSaveServing);
    DOM.saveServing.addEventListener('touchend', (e) => {
        e.preventDefault();
        handleSaveServing();
    });
    
    DOM.servingInput.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            if (AppState.currentFoodId) {
                const value = parseFloat(DOM.servingInput.value) || 0;
                await setServing(AppState.currentFoodId, value);
            }
            closeModals();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
            if (DOM.settingsScreen.classList.contains('active')) {
                hideSettings();
            }
        }
    });
    
    // Scroll event listeners for navigation
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        // Debounce scroll events
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateActiveNavItem();
            updateBackToTopVisibility();
        }, 50);
    }, { passive: true });
    
    // Back to top button
    DOM.backToTopBtn.addEventListener('click', scrollToTop);
    
    // Search modal
    DOM.searchBtn.addEventListener('click', showSearchModal);
    DOM.closeSearchModal.addEventListener('click', closeSearchModal);
    DOM.searchModal.addEventListener('click', (e) => {
        if (e.target === DOM.searchModal) closeSearchModal();
    });
    
    // Search input
    let searchTimeout;
    DOM.foodSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        DOM.clearSearchBtn.hidden = query.length === 0;
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query.length >= 2) {
                const results = searchFoods(query);
                renderSearchResults(results);
            } else if (query.length === 0) {
                DOM.searchResults.innerHTML = `
                    <div class="search-placeholder">
                        <span class="placeholder-icon">🍎</span>
                        <p>Type to search ${AppState.foodDatabase.length}+ foods</p>
                    </div>
                `;
            }
        }, 200);
    });
    
    DOM.clearSearchBtn.addEventListener('click', () => {
        DOM.foodSearchInput.value = '';
        DOM.clearSearchBtn.hidden = true;
        DOM.foodSearchInput.focus();
        DOM.searchResults.innerHTML = `
            <div class="search-placeholder">
                <span class="placeholder-icon">🍎</span>
                <p>Type to search ${AppState.foodDatabase.length}+ foods</p>
            </div>
        `;
    });
    
    // Search tabs
    document.querySelectorAll('.search-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            AppState.currentSearchTab = tabName;
            
            document.querySelectorAll('.search-tab').forEach(t => {
                t.classList.toggle('active', t.dataset.tab === tabName);
            });
            
            if (tabName === 'search') {
                const query = DOM.foodSearchInput.value.trim();
                if (query.length >= 2) {
                    renderSearchResults(searchFoods(query));
                } else {
                    DOM.searchResults.innerHTML = `
                        <div class="search-placeholder">
                            <span class="placeholder-icon">🍎</span>
                            <p>Type to search ${AppState.foodDatabase.length}+ foods</p>
                        </div>
                    `;
                }
            } else if (tabName === 'recent') {
                renderRecentFoods();
            } else if (tabName === 'favorites') {
                renderFavorites();
            }
        });
    });
    
    // Add food modal
    DOM.closeAddFoodModal.addEventListener('click', closeAddFoodModal);
    DOM.addFoodModal.addEventListener('click', (e) => {
        if (e.target === DOM.addFoodModal) closeAddFoodModal();
    });
    
    DOM.decreaseAddServing.addEventListener('click', () => {
        const current = parseFloat(DOM.addServingInput.value) || 1;
        DOM.addServingInput.value = Math.max(0.5, current - 0.5);
    });
    
    DOM.increaseAddServing.addEventListener('click', () => {
        const current = parseFloat(DOM.addServingInput.value) || 1;
        DOM.addServingInput.value = Math.min(20, current + 0.5);
    });
    
    DOM.toggleFavoriteBtn.addEventListener('click', () => {
        if (AppState.currentSearchFood) {
            toggleFavorite(AppState.currentSearchFood);
        }
    });
    
    DOM.confirmAddFood.addEventListener('click', (e) => {
        e.preventDefault();
        addSearchedFoodToLog();
    });
    
    // Touch support for mobile
    DOM.confirmAddFood.addEventListener('touchend', (e) => {
        e.preventDefault();
        addSearchedFoodToLog();
    });
    
    // Help modal
    DOM.helpBtn.addEventListener('click', showHelpModal);
    DOM.closeHelpModal.addEventListener('click', closeHelpModal);
    DOM.dismissHelp.addEventListener('click', closeHelpModal);
    DOM.helpModal.addEventListener('click', (e) => {
        if (e.target === DOM.helpModal) closeHelpModal();
    });
}

// ============================================
// PWA / Service Worker
// ============================================

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('sw.js');
            console.log('Service Worker registered:', registration.scope);
        } catch (error) {
            console.log('Service Worker registration failed:', error);
        }
    }
}

// ============================================
// Initialization
// ============================================

async function init() {
    try {
        // Wait for database
        await db.ready;
        
        // Cache DOM elements
        cacheDOMElements();
        
        // Setup event listeners
        setupEventListeners();
        
        // Load data
        await loadSettings();
        await loadFoods();
        
        // Load food search database
        await loadFoodDatabase();
        await loadRecentFoods();
        await loadFavorites();
        
        // Check if first launch and show help
        await checkFirstLaunch();
        
        // Register service worker
        registerServiceWorker();
        
        console.log('EasyDiet Tracker initialized');
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
