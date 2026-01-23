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
        ultraProcessedTarget: 3
    },
    foods: [],
    servings: {},
    waterCount: 0,
    exerciseCalories: 0,
    currentFoodId: null,
    isDefaultData: false
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
    
    // Header
    DOM.settingsBtn = document.getElementById('settingsBtn');
    DOM.backBtn = document.getElementById('backBtn');
    DOM.goToSettingsBtn = document.getElementById('goToSettingsBtn');
    
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
    
    // Breakdown modal
    DOM.breakdownModal = document.getElementById('breakdownModal');
    DOM.closeBreakdownModal = document.getElementById('closeBreakdownModal');
    DOM.breakdownIcon = document.getElementById('breakdownIcon');
    DOM.breakdownTitle = document.getElementById('breakdownTitle');
    DOM.breakdownTotal = document.getElementById('breakdownTotal');
    DOM.breakdownList = document.getElementById('breakdownList');
    DOM.breakdownEmpty = document.getElementById('breakdownEmpty');
    
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
    await db.saveSetting('carbsTarget', AppState.settings.carbsTarget);
    await db.saveSetting('fatTarget', AppState.settings.fatTarget);
    await db.saveSetting('fibreTarget', AppState.settings.fibreTarget);
    await db.saveSetting('sugarTarget', AppState.settings.sugarTarget);
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
                    water: findColumn(headers, ['water', 'water contribution'])
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
                        water: parseFloat(row[cols.water]) || 0
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
        water: findColumn(headers, ['water', 'water contribution'])
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
            water: parseFloat(row[cols.water]) || 0
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
        return;
    }
    
    // Render each group
    for (const [groupName, foods] of Object.entries(grouped)) {
        const groupEl = document.createElement('div');
        groupEl.className = 'food-group';
        
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
    
    AppState.foods.forEach(food => {
        const servings = AppState.servings[food.id] || 0;
        totalCalories += food.calories * servings;
        totalProtein += food.protein * servings;
        totalCarbs += food.carbs * servings;
        totalSatTransFat += ((food.saturatedFat || 0) + (food.transFat || 0)) * servings;
        totalFibre += food.fibre * servings;
        totalAddedSugar += (food.addedSugar || 0) * servings;
        totalWaterFromFood += (food.water || 0) * servings;
        
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
    const { proteinTarget, carbsTarget, fatTarget, fibreTarget, sugarTarget, ultraProcessedTarget } = AppState.settings;
    
    DOM.proteinBar.style.width = proteinTarget > 0 ? `${Math.min((totalProtein / proteinTarget) * 100, 100)}%` : '0%';
    DOM.carbsBar.style.width = carbsTarget > 0 ? `${Math.min((totalCarbs / carbsTarget) * 100, 100)}%` : '0%';
    DOM.fatBar.style.width = fatTarget > 0 ? `${Math.min((totalSatTransFat / fatTarget) * 100, 100)}%` : '0%';
    DOM.fibreBar.style.width = fibreTarget > 0 ? `${Math.min((totalFibre / fibreTarget) * 100, 100)}%` : '0%';
    DOM.sugarBar.style.width = sugarTarget > 0 ? `${Math.min((totalAddedSugar / sugarTarget) * 100, 100)}%` : '0%';
    DOM.ultraProcessedBar.style.width = ultraProcessedTarget > 0 ? `${Math.min((totalUltraProcessed / ultraProcessedTarget) * 100, 100)}%` : '0%';
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
            showFoodInfo(parseInt(btn.dataset.foodId));
        };
        
        btn.addEventListener('click', handleInfoTap);
        
        // Add touch support for info button
        btn.addEventListener('touchend', (e) => {
            e.stopPropagation();
            e.preventDefault();
            showFoodInfo(parseInt(btn.dataset.foodId));
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
                    showServingModal(parseInt(item.dataset.foodId));
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
                incrementServing(parseInt(item.dataset.foodId));
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
            // Only show foods that contribute more than 0.5 units
            if (value > 0.5) {
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
    DOM.breakdownIcon.textContent = config.icon;
    DOM.breakdownTitle.textContent = config.title;
    DOM.breakdownTotal.textContent = `${formatNumber(total)}${config.unit}`;
    
    // Generate list HTML
    if (contributions.length === 0) {
        DOM.breakdownList.style.display = 'none';
        DOM.breakdownEmpty.style.display = 'block';
    } else {
        DOM.breakdownList.style.display = 'block';
        DOM.breakdownEmpty.style.display = 'none';
        
        DOM.breakdownList.innerHTML = contributions.map(({ food, servings, value }) => `
            <div class="breakdown-item">
                <span class="breakdown-item-icon">${getFoodIcon(food.foodCategory)}</span>
                <div class="breakdown-item-info">
                    <div class="breakdown-item-name">${food.foodCategory}</div>
                    <div class="breakdown-item-servings">${servings} serving${servings !== 1 ? 's' : ''}</div>
                </div>
                <span class="breakdown-item-value">${formatNumber(value)}${config.unit}</span>
            </div>
        `).join('');
    }
    
    DOM.breakdownModal.classList.add('active');
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
    DOM.historyModal.classList.remove('active');
    DOM.warningModal.classList.remove('active');
    AppState.currentFoodId = null;
}

/**
 * Reset today's servings
 */
async function resetDay() {
    if (!confirm('Reset all servings and exercise for today?')) return;
    
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
        // Clear food data from IndexedDB to force fresh parse
        await db.clearFoods();
        await db.saveSetting('isDefaultData', null);
        
        // Unregister service workers
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (const registration of registrations) {
                await registration.unregister();
            }
        }
        
        // Clear caches
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            for (const cacheName of cacheNames) {
                await caches.delete(cacheName);
            }
        }
        
        // Force reload from server
        window.location.reload(true);
    } catch (error) {
        console.error('Cache clear error:', error);
        window.location.reload(true);
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
    
    // Warning modal
    DOM.closeWarningModal.addEventListener('click', closeModals);
    DOM.warningModal.addEventListener('click', (e) => {
        if (e.target === DOM.warningModal) closeModals();
    });
    
    // Clickable stats for breakdown (with scroll detection)
    const STAT_MOVE_THRESHOLD = 10; // pixels - if finger moves more than this, it's a scroll
    
    document.querySelectorAll('.clickable-stat').forEach(stat => {
        const nutrient = stat.dataset.nutrient;
        let startX = 0;
        let startY = 0;
        let hasMoved = false;
        
        // Mouse click (desktop)
        stat.addEventListener('click', (e) => {
            // Don't trigger if clicking the exercise button
            if (e.target.closest('.exercise-btn')) return;
            
            // Water is calculated from food, no manual increment
            if (nutrient === 'water') return;
            
            showBreakdown(nutrient);
        });
        
        // Touch events with scroll detection
        stat.addEventListener('touchstart', (e) => {
            hasMoved = false;
            if (e.touches && e.touches[0]) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
        }, { passive: true });
        
        stat.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches[0]) {
                const deltaX = Math.abs(e.touches[0].clientX - startX);
                const deltaY = Math.abs(e.touches[0].clientY - startY);
                if (deltaX > STAT_MOVE_THRESHOLD || deltaY > STAT_MOVE_THRESHOLD) {
                    hasMoved = true;
                }
            }
        }, { passive: true });
        
        stat.addEventListener('touchend', (e) => {
            // Don't trigger if scrolling or clicking the exercise button
            if (hasMoved) return;
            if (e.target.closest('.exercise-btn')) return;
            e.preventDefault();
            
            // Water is calculated from food, no manual increment
            if (nutrient === 'water') return;
            
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
    
    DOM.saveServing.addEventListener('click', async () => {
        if (AppState.currentFoodId) {
            const value = parseFloat(DOM.servingInput.value) || 0;
            await setServing(AppState.currentFoodId, value);
        }
        closeModals();
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
