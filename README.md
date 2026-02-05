# EasyDiet Tracker

A Progressive Web App (PWA) for tracking daily food consumption with comprehensive nutritional monitoring.

![EasyDiet Tracker](icons/icon-512.png)

[![Version](https://img.shields.io/badge/version-1.23.1-blue.svg)](VERSION)
[![PWA](https://img.shields.io/badge/PWA-enabled-purple.svg)](manifest.json)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#license)

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd easydiet-tracker

# Start a local server (choose one)
python3 -m http.server 8080
# or
npx serve
# or
php -S localhost:8080

# Open in browser
open http://localhost:8080
```

The app works entirely in your browser - no installation or database setup required!

## 🔒 Privacy & Data Security

- **100% Local** - All data stays on your device, never sent to any server
- **No Tracking** - No analytics, cookies, or third-party services
- **Offline First** - Works completely offline after initial load
- **Your Data, Your Control** - Export, backup, or delete anytime
- **Open Source** - Inspect the code yourself

## ✨ Features at a Glance

- 📊 Visual calorie ring with daily progress tracking
- 🍎 70+ pre-loaded food categories organized by food groups
- 🔍 Searchable database of 200+ foods with detailed nutrition
- 💡 Smart food matching suggests existing categories
- 📱 Works offline as a Progressive Web App
- 🎯 Customizable calorie and macro targets
- 📈 Track protein, water, fibre, sugar, sodium, and more
- ⚠️ Warnings for ultra-processed and high-fat foods
- 💾 All data stored locally with IndexedDB
- 👆 Intuitive tap-to-add and long-press interactions

## Features

### 📊 Comprehensive Nutritional Tracking

- **Calorie Ring**: Visual circular progress showing daily calorie consumption vs target
- **Protein Tracker**: Monitor daily protein intake with customizable goals
- **Hydration Tracker**: Track water intake from food contributions (cups)
- **Saturated/Trans Fat**: Warning system for foods with ≥5g saturated/trans fat per serving
- **Fibre Tracker**: Ensure adequate daily fibre intake
- **Added Sugar Tracker**: Monitor added sugar consumption
- **Ultra-Processed Foods**: Track and limit ultra-processed food consumption
- **Salt/Sodium Tracker**: Monitor sodium with min/max target ranges

### 🍎 Food Management

- **Default Food Database**: 70+ food categories organized by food groups, ready to use
- **Searchable Food Database**: 200+ common foods with detailed nutrition data
- **Smart Food Matching**: Automatically suggests existing food icons for similar searches
- **Food Groups**: Fruits, Vegetables, Proteins, Grains, Dairy, Fats, Snacks, Beverages, and more
- **Hand-Based Serving Sizes**: Intuitive portion descriptions (fist, palm, cupped hand, etc.)
- **Recent Foods**: Quick access to recently logged foods
- **Favorite Foods**: Save frequently consumed foods for easy access

### 👆 Intuitive Interactions

- **Tap to Add**: Quick tap on any food icon adds 1 serving
- **Long Press for Precision**: Hold to enter exact serving amounts (supports decimals)
- **Serving Size Display**: See portion size when adjusting servings
- **Scroll Detection**: Prevents accidental taps while scrolling through lists
- **Progress Bar Breakdown**: Tap any tracker to see which foods contributed

### ℹ️ Educational Content

- **Info Buttons**: Learn why each nutrient matters for your health
- **Warning Badges**: Visual alerts for ultra-processed and high-fat foods
- **Nutritional Details**: Complete nutrition facts for every food category

### 🧭 Navigation

- **Sticky Food Group Nav**: Quick jump to any food group
- **Back to Top Button**: Easy return to the tracker dashboard
- **Smooth Scrolling**: Fluid navigation throughout the app

### ⚙️ Customizable Settings

- **Calorie Targets**: Set base calories and activity level bonuses
- **Macro Targets**: Customize goals for protein, carbs, fat, fibre, sugar
- **Water Target**: Set daily hydration goals
- **Salt Range**: Configure minimum and maximum sodium targets
- **Ultra-Processed Limit**: Set maximum daily servings

### 📱 Progressive Web App

- **Offline Support**: Works without internet connection
- **Installable**: Add to home screen on any device
- **Mobile-First Design**: Optimized for touch devices
- **Beautiful Icon**: Custom app icon with calorie ring and apple design

### 💾 Data Persistence

- **Stable Food IDs**: Your logged data persists across app updates
- **IndexedDB Storage**: All data stored locally on your device
- **Cache Management**: Long-press reset clears app cache without losing data
- **Auto-Recovery**: Invalid data is automatically detected and repaired

## Getting Started

### Running Locally

1. **Start a local server** (any of these will work):
   
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8080
   ```

2. **Open in browser**: Navigate to `http://localhost:8080`

3. **Start tracking**: The default food database loads automatically!

### Running Tests

1. Open the app in your browser at `http://localhost:8080`
2. Open DevTools Console (Cmd+Option+J on Mac, Ctrl+Shift+J on Windows)
3. Run: `runTests()`

## Usage

### Adding Servings

- **Tap** a food icon to add 1 serving
- **Long press** (hold ~0.5s) to enter a precise amount with serving size displayed

### Viewing Nutrition Info

- Tap the **ℹ** button on any food icon to see complete nutrition facts
- Tap **ℹ** on any tracker bar to learn about that nutrient

### Viewing Breakdowns

- Tap any **progress bar** (protein, water, fat, etc.) to see which foods contributed
- Tap any item in the breakdown to adjust its serving size

### Resetting Daily Counts

- **Tap** the reset button (↻) to clear all servings for today (with confirmation)
- **Long press** the reset button to clear app cache (preserves your data)

### Searching Foods

- Tap the **🔍** search button to find foods from the extended database
- Access **Recent** and **Favorite** foods from the search modal
- Add searched foods to your daily log

### Settings

| Setting | Description |
|---------|-------------|
| Base Calories | Daily calorie target before activity adjustment |
| Activity Level | Low (+0), Moderate (+200), or High (+400) calories |
| Protein Target | Daily protein goal in grams |
| Water Target | Daily hydration goal in cups |
| Carbs Target | Daily carbohydrate goal in grams |
| Fat Target | Daily fat goal in grams |
| Fibre Target | Daily fibre goal in grams |
| Sugar Target | Maximum added sugar in grams |
| Ultra-Processed | Maximum ultra-processed servings |
| Salt Min/Max | Sodium range in mg (default 500-2300mg) |

## Food Data Format

The default database (`default-data.csv`) includes these columns:

| Column | Description | Example |
|--------|-------------|---------|
| Food Group | Category group | "Fruits", "Proteins" |
| Food Category | Specific food | "Berries (strawberries; blueberries)" |
| Servings Low | Minimum recommended | 1 |
| Servings High | Maximum recommended | 3 |
| Serving Size | Portion description | "Cupped hand" |
| Calories | Per serving | 70 |
| Protein | Grams | 1.1 |
| Fibre | Grams | 4 |
| Carbs | Grams | 17 |
| Sugar | Grams | 10 |
| Added Sugar | Grams | 0 |
| Total Fat | Grams | 0.4 |
| Saturated Fat | Grams | 0.3 |
| Trans Fat | Grams | 0.1 |
| Ultra-Processed | true/false | false |
| Hydration | Cups water | 0.7 |
| Salt | Milligrams | 1 |

## 📲 Installing as PWA

### iOS (Safari)
1. Open the app in Safari
2. Tap the **Share** button (square with arrow)
3. Scroll and tap **"Add to Home Screen"**
4. Name it and tap **Add**

### Android (Chrome)
1. Open the app in Chrome
2. Tap the **menu** (⋮)
3. Tap **"Install app"** or **"Add to Home Screen"**
4. Confirm installation

### Desktop (Chrome/Edge/Safari)
1. Open the app in your browser
2. Click the **install icon** in the address bar
3. Or go to **Menu → Install EasyDiet Tracker**
4. The app will open in its own window

Once installed, the app works completely offline and updates automatically!

## 🌐 Deployment

### GitHub Pages

```bash
# Enable GitHub Pages in repository settings
# Set source to main branch / root

# Your app will be available at:
# https://username.github.io/repository-name
```

### Netlify

1. Connect your GitHub repository
2. Build command: (leave empty - no build needed)
3. Publish directory: `/` (root)
4. Deploy!

### Vercel

```bash
npm i -g vercel
vercel
# Follow prompts, no build configuration needed
```

### Traditional Web Server

Simply upload all files to your web server's public directory. The app is entirely static with no server-side requirements.

**Requirements:**
- Web server (Apache, Nginx, etc.)
- HTTPS (required for Service Workers)
- No backend or database needed

## Tech Stack

- **HTML5/CSS3/JavaScript** - No frameworks required, vanilla JS for maximum performance
- **IndexedDB** - Local data persistence with automatic data recovery
- **Service Worker** - Offline functionality and intelligent caching
- **SheetJS (xlsx)** - Excel and CSV file parsing for food database imports
- **Custom Fonts** - Outfit and JetBrains Mono via Google Fonts

## Architecture

```
├── index.html          # Main HTML structure
├── app.js              # Core application logic (128KB)
├── db.js               # IndexedDB database management
├── styles.css          # Complete styling and responsive design
├── sw.js               # Service worker for PWA functionality
├── tests.js            # Test suite (run in DevTools console)
├── manifest.json       # PWA manifest
├── default-data.csv    # Default food database
├── food-database.json  # Extended searchable food database
└── icons/              # App icons (SVG, PNG, Apple Touch)
```

## Browser Support

- Chrome/Edge 88+
- Safari 14+
- Firefox 78+

Modern browsers with IndexedDB and Service Worker support required.

## Troubleshooting

### App not loading data
- **Solution**: Long-press the reset button (↻) to clear cache and reload
- The default food database should load automatically on first run

### Changes not saving
- Check that your browser supports IndexedDB
- Ensure you're not in private/incognito mode
- Clear app cache and try again (long-press reset button)

### Service Worker issues
- Open DevTools → Application → Service Workers
- Click "Unregister" and refresh the page
- Or long-press the reset button to clear cache

### Search not working
- Verify `food-database.json` is present in the root directory
- Check browser console for any errors
- Reload the page

## Development

### Running Tests

Open the app in your browser and run in DevTools Console:

```javascript
runTests()  // Run all test suites
```

Tests cover:
- Data validation and sanitization
- Food ID generation and stability
- Database operations
- Nutrition calculations

### Making Changes

1. Edit files directly (no build process required)
2. Refresh browser to see changes
3. Run tests to verify functionality
4. Test on multiple devices/browsers

### Pre-commit Hook

A git pre-commit hook is included in `.githooks/` to run tests automatically before commits.

```bash
# Enable the pre-commit hook
git config core.hooksPath .githooks
```

## 🤔 FAQ

**Q: Do I need to create an account?**  
A: No! The app works entirely offline and stores everything locally on your device.

**Q: Will my data be lost if I clear my browser cache?**  
A: Browser cache clearing won't affect your data (stored in IndexedDB), but long-pressing the reset button will clear everything.

**Q: Can I use this on multiple devices?**  
A: Yes, but data won't sync between devices since everything is stored locally. Install the PWA on each device separately.

**Q: How do I backup my data?**  
A: Use the history export feature (📅 icon → Export CSV) to save your daily logs. Food databases can be re-imported from CSV files.

**Q: Can I customize the food database?**  
A: Yes! Import your own CSV or Excel file through Settings. See the expected format in the settings screen.

**Q: Does this replace professional nutrition advice?**  
A: No. This is a tracking tool. Always consult healthcare professionals for personalized nutrition guidance.

**Q: How accurate are the nutrition values?**  
A: Values are approximations based on common serving sizes. For precise tracking, use the search feature to log specific foods.

## Why EasyDiet?

| Feature | EasyDiet | Traditional Calorie Apps |
|---------|----------|-------------------------|
| **Privacy** | 100% local, no account | Requires account, data uploaded |
| **Offline** | Works completely offline | Requires internet connection |
| **Speed** | Tap to log in <1 second | Multiple screens to log food |
| **Food Groups** | Category-based tracking | Item-by-item barcode scanning |
| **Cost** | Free, no ads | Often subscription-based |
| **Setup** | Open and start | Create account, enter details |
| **Data Ownership** | You own all data | Company owns your data |
| **Learning Curve** | Immediate, intuitive | Complex interface |

## Contributing

Contributions are welcome! Here are some ways you can help:

- 🐛 Report bugs by opening an issue
- 💡 Suggest new features or improvements
- 🍎 Add more foods to the database
- 📖 Improve documentation
- 🧪 Add more tests
- 🌍 Translate to other languages
- 🎨 Improve UI/UX design

Please ensure tests pass before submitting pull requests.

## Version History

- **v1.23.1** (Current) - Bug fixes for daily tracking and local time handling
- **v1.23.0** - Added sweetened yogurts, pastries, and breakfast cereals to food database
- **v1.22.x** - Smart food matching: suggests existing food icons for similar searches
- **v1.21.0** - Added fried chicken, pita bread, and naan to food database
- **v1.18.x** - Stable food IDs, data persistence fixes, validation
- **v1.17.x** - Added banana to tropical fruits
- **v1.16.x** - New app icon, iOS alignment fixes
- **v1.15.x** - Searchable food database, help system, cache improvements
- **v1.14.x** - Navigation improvements, back-to-top button
- **v1.13.x** - Salt/sodium tracking, hydration fixes
- **v1.12.x** - Info buttons, educational content
- **v1.11.x** - Water tracking, confirmation dialogs

## 🎯 Design Philosophy

EasyDiet was built with these principles in mind:

1. **Privacy First** - Your health data belongs to you, not a corporation
2. **Simplicity** - Tap to log, no complicated forms or barcode scanning
3. **Speed** - Track your food in seconds, not minutes
4. **Offline Always** - Your nutrition tracker should work anywhere, anytime
5. **No Vendor Lock-in** - Export your data, use your own food database
6. **Visual Feedback** - Understand your nutrition at a glance with progress rings
7. **Education** - Learn why each nutrient matters for your health
8. **Accessibility** - Works on any device, no app store required

## 🙏 Acknowledgments

- **SheetJS** - For excellent Excel/CSV parsing
- **Google Fonts** - Outfit and JetBrains Mono typefaces
- **Nutrition Data** - Compiled from USDA and other public sources
- **Community** - Thanks to all contributors and users providing feedback

## 📄 License

MIT License - Feel free to use and modify!

Copyright (c) 2026 EasyDiet Tracker

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

**Made with ❤️ for health-conscious individuals who value privacy and simplicity**
