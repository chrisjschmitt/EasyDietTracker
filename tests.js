/**
 * EasyDiet Tracker - Test Suite
 * Run these tests to verify core functionality
 */

const TestRunner = {
    passed: 0,
    failed: 0,
    results: [],

    async run() {
        console.log('🧪 Starting EasyDiet Tracker Tests...\n');
        this.passed = 0;
        this.failed = 0;
        this.results = [];

        // Wait for app to initialize
        await this.waitForApp();

        // Run all test suites
        await this.testCountersIncrement();
        await this.testServingCheckmark();
        await this.testExerciseBonus();

        // Print summary
        this.printSummary();
        return this.failed === 0;
    },

    async waitForApp() {
        // Wait for AppState to be available
        let attempts = 0;
        while (typeof AppState === 'undefined' && attempts < 50) {
            await this.sleep(100);
            attempts++;
        }
        if (typeof AppState === 'undefined') {
            throw new Error('AppState not available - app may not be loaded');
        }
    },

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    assert(condition, testName, details = '') {
        if (condition) {
            this.passed++;
            this.results.push({ status: 'PASS', name: testName });
            console.log(`  ✅ PASS: ${testName}`);
        } else {
            this.failed++;
            this.results.push({ status: 'FAIL', name: testName, details });
            console.log(`  ❌ FAIL: ${testName}`);
            if (details) console.log(`     Details: ${details}`);
        }
    },

    // ==========================================
    // TEST SUITE 1: Counters Increment
    // ==========================================
    async testCountersIncrement() {
        console.log('\n📊 Test Suite: Counters Increment When Food Count Incremented\n');

        // Save original state
        const originalServings = { ...AppState.servings };

        // Find a food item with nutritional data
        const testFood = AppState.foods.find(f => f.calories > 0 && f.protein > 0);
        if (!testFood) {
            this.assert(false, 'Find test food', 'No food with calories and protein found');
            return;
        }

        // Record initial values
        const initialCalories = this.getTotalCalories();
        const initialProtein = this.getTotalProtein();
        const initialCarbs = this.getTotalCarbs();
        const initialFat = this.getTotalFat();
        const initialFibre = this.getTotalFibre();

        // Increment the food serving
        const foodId = testFood.id;
        const prevServing = AppState.servings[foodId] || 0;
        AppState.servings[foodId] = prevServing + 1;
        updateStats();

        // Check that calories increased
        const newCalories = this.getTotalCalories();
        this.assert(
            newCalories > initialCalories,
            'Calories counter increments',
            `Expected > ${initialCalories}, got ${newCalories}`
        );

        // Check that protein increased (if food has protein)
        if (testFood.protein > 0) {
            const newProtein = this.getTotalProtein();
            this.assert(
                newProtein > initialProtein,
                'Protein counter increments',
                `Expected > ${initialProtein}, got ${newProtein}`
            );
        }

        // Check that carbs increased (if food has carbs)
        if (testFood.carbs > 0) {
            const newCarbs = this.getTotalCarbs();
            this.assert(
                newCarbs > initialCarbs,
                'Carbs counter increments',
                `Expected > ${initialCarbs}, got ${newCarbs}`
            );
        }

        // Check that fat increased (if food has sat/trans fat)
        const foodFat = (testFood.saturatedFat || 0) + (testFood.transFat || 0);
        if (foodFat > 0) {
            const newFat = this.getTotalFat();
            this.assert(
                newFat > initialFat,
                'Fat counter increments',
                `Expected > ${initialFat}, got ${newFat}`
            );
        }

        // Check that fibre increased (if food has fibre)
        if (testFood.fibre > 0) {
            const newFibre = this.getTotalFibre();
            this.assert(
                newFibre > initialFibre,
                'Fibre counter increments',
                `Expected > ${initialFibre}, got ${newFibre}`
            );
        }

        // Restore original state
        AppState.servings = originalServings;
        updateStats();
    },

    // ==========================================
    // TEST SUITE 2: Serving Checkmark
    // ==========================================
    async testServingCheckmark() {
        console.log('\n✓ Test Suite: Serving Checkmark Appears at Goal\n');

        // Save original state
        const originalServings = { ...AppState.servings };

        // Find a food with a servingsHigh value
        const testFood = AppState.foods.find(f => f.servingsHigh > 0);
        if (!testFood) {
            this.assert(false, 'Find food with serving goal', 'No food with servingsHigh > 0 found');
            return;
        }

        const foodId = testFood.id;
        const goalServings = testFood.servingsHigh;

        // Set servings below goal
        AppState.servings[foodId] = goalServings - 1;
        renderFoodGroups();
        await this.sleep(50);

        // Check that checkmark is NOT present
        let foodEl = document.querySelector(`.food-item[data-food-id="${foodId}"]`);
        const noCheckmarkBeforeGoal = foodEl && !foodEl.classList.contains('goal-reached');
        this.assert(
            noCheckmarkBeforeGoal,
            'No checkmark before reaching goal',
            `Servings: ${goalServings - 1}, Goal: ${goalServings}`
        );

        // Set servings at goal
        AppState.servings[foodId] = goalServings;
        renderFoodGroups();
        await this.sleep(50);

        // Check that checkmark IS present
        foodEl = document.querySelector(`.food-item[data-food-id="${foodId}"]`);
        const hasCheckmarkAtGoal = foodEl && foodEl.classList.contains('goal-reached');
        this.assert(
            hasCheckmarkAtGoal,
            'Checkmark appears when goal reached',
            `Servings: ${goalServings}, Goal: ${goalServings}`
        );

        // Set servings above goal
        AppState.servings[foodId] = goalServings + 1;
        renderFoodGroups();
        await this.sleep(50);

        // Check that checkmark is still present
        foodEl = document.querySelector(`.food-item[data-food-id="${foodId}"]`);
        const hasCheckmarkAboveGoal = foodEl && foodEl.classList.contains('goal-reached');
        this.assert(
            hasCheckmarkAboveGoal,
            'Checkmark remains when above goal',
            `Servings: ${goalServings + 1}, Goal: ${goalServings}`
        );

        // Restore original state
        AppState.servings = originalServings;
        renderFoodGroups();
    },

    // ==========================================
    // TEST SUITE 3: Exercise Bonus
    // ==========================================
    async testExerciseBonus() {
        console.log('\n🏃 Test Suite: Exercise Bonus Increases Calorie Target\n');

        // Save original state
        const originalExercise = AppState.exerciseCalories || 0;

        // Get initial calorie target
        const initialTarget = calculateTotalTarget();

        // Add exercise bonus
        const exerciseBonus = 200;
        AppState.exerciseCalories = originalExercise + exerciseBonus;
        
        // Update display
        updateExerciseDisplay();
        
        // Get new calorie target
        const newTarget = calculateTotalTarget();

        // Check that target increased by exercise amount
        this.assert(
            newTarget === initialTarget + exerciseBonus,
            'Calorie target increases by exercise bonus',
            `Expected ${initialTarget + exerciseBonus}, got ${newTarget}`
        );

        // Check that displayed target updated
        const displayedTarget = parseInt(DOM.calorieTarget.textContent);
        this.assert(
            displayedTarget === newTarget,
            'Displayed calorie target updates',
            `Expected ${newTarget}, displayed ${displayedTarget}`
        );

        // Check exercise display shows correct value
        const exerciseDisplay = DOM.exerciseDisplay.textContent;
        this.assert(
            exerciseDisplay.includes(`+${AppState.exerciseCalories}`),
            'Exercise display shows bonus amount',
            `Display: ${exerciseDisplay}`
        );

        // Restore original state
        AppState.exerciseCalories = originalExercise;
        updateExerciseDisplay();
    },

    // ==========================================
    // Helper Methods
    // ==========================================
    getTotalCalories() {
        let total = 0;
        AppState.foods.forEach(food => {
            const servings = AppState.servings[food.id] || 0;
            total += food.calories * servings;
        });
        return total;
    },

    getTotalProtein() {
        let total = 0;
        AppState.foods.forEach(food => {
            const servings = AppState.servings[food.id] || 0;
            total += food.protein * servings;
        });
        return total;
    },

    getTotalCarbs() {
        let total = 0;
        AppState.foods.forEach(food => {
            const servings = AppState.servings[food.id] || 0;
            total += food.carbs * servings;
        });
        return total;
    },

    getTotalFat() {
        let total = 0;
        AppState.foods.forEach(food => {
            const servings = AppState.servings[food.id] || 0;
            total += ((food.saturatedFat || 0) + (food.transFat || 0)) * servings;
        });
        return total;
    },

    getTotalFibre() {
        let total = 0;
        AppState.foods.forEach(food => {
            const servings = AppState.servings[food.id] || 0;
            total += food.fibre * servings;
        });
        return total;
    },

    printSummary() {
        console.log('\n' + '='.repeat(50));
        console.log('📋 TEST SUMMARY');
        console.log('='.repeat(50));
        console.log(`  Total: ${this.passed + this.failed}`);
        console.log(`  ✅ Passed: ${this.passed}`);
        console.log(`  ❌ Failed: ${this.failed}`);
        console.log('='.repeat(50));
        
        if (this.failed === 0) {
            console.log('🎉 All tests passed!');
        } else {
            console.log('⚠️ Some tests failed. Please review the output above.');
        }
    }
};

// Auto-run tests when script loads (after a short delay for app init)
if (typeof window !== 'undefined') {
    window.runTests = () => TestRunner.run();
    console.log('💡 Tests loaded. Run tests with: runTests()');
}
