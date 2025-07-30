# Learn Languages - Tri-lingual Flash Cards

A modern, minimalist flashcard application supporting multiple languages with a beautiful dark theme design. Perfect for language learners who want to study translations between Hindi, English, and Finnish.

## Features

- **Tri-lingual Support**: Learn between Hindi, English, and Finnish
- **Dynamic Language Selection**: Choose any source and target language combination
- **Flag Visual Indicators**: Subtle flag icons show which language is which
- **Ultra-minimalist Design**: Pure black theme with zero distractions
- **Automatic Shuffling**: Content randomized on every page load for varied learning
- **Click Navigation**: Simple left/right click zones for intuitive phrase browsing
- **Bootstrap-Native Layout**: Clean, professional interface using Bootstrap components
- **Responsive Design**: Perfect scaling on any device from mobile to desktop
- **Instant Language Swap**: One-click language switching with visual feedback
- **Distraction-Free Interface**: No animations, no clutter - pure focus on learning
- **Offline-First**: Works completely offline with locally bundled dependencies
- **Comprehensive Content**: 1700+ phrases covering essential conversations and vocabulary

## Supported Languages

- **Hindi (हिं)** 🇮🇳 - With beautiful Devanagari script support
- **English (EN)** 🇬🇧 - International standard
- **Finnish (FI)** 🇫🇮 - Complete phrase translations

## How to Use

### Language Selection
- **Footer Controls**: Use the language selectors to choose your source and target languages
- **Swap Button**: Click ⇄ or press Space to instantly swap languages
- **Dynamic Updates**: Flags and content update immediately when you change languages

### Navigation
1. **Click Navigation** (All Devices):
   - Click left half of card: Previous phrase
   - Click right half of card: Next phrase
   - Responsive cursor feedback shows navigation zones

2. **Language Swapping**:
   - Click ⇄ button in footer to swap languages
   - Space key also swaps languages for keyboard users

### Visual Language Indicators
- **Small flag icons** appear in the corners of each card section
- **Top section**: Shows flag for source language
- **Bottom section**: Shows flag for target language
- **Automatic positioning**: Flags update when you swap languages

## Content Overview

The application includes comprehensive language content covering:

- **Greetings & Introductions**: Basic social interactions
- **Daily Conversations**: Common phrases for everyday situations  
- **Travel & Navigation**: Essential phrases for getting around
- **Shopping & Commerce**: Useful expressions for transactions
- **Emergency Situations**: Important phrases for urgent needs
- **Numbers & Time**: Counting and temporal expressions
- **Family & Relationships**: Personal and social connections
- **Food & Dining**: Restaurant and meal-related vocabulary
- **Work & Professional**: Business and career terminology
- **Health & Medical**: Healthcare-related expressions

## Design Philosophy

### Dark Theme Benefits
- **Eye-friendly**: Pure black background reduces strain during long study sessions
- **OLED-optimized**: Saves battery on modern mobile devices
- **Professional appearance**: Elegant, modern aesthetic
- **Better focus**: Minimal distractions keep attention on learning content

### Ultra-Minimalist Interface
- **Zero animations**: Static design eliminates all distractions
- **Bootstrap-native components**: Professional layout using tested UI patterns
- **Click-optimized**: Large, intuitive interaction zones
- **Clean typography**: High contrast text with perfect responsive scaling
- **Subtle indicators**: Flag icons provide context without visual clutter
- **Pure focus**: Every element serves the learning experience

## Setup for GitHub Pages

1. Upload all files to your GitHub repository
2. Go to Settings > Pages in your repository
3. Select "Deploy from a branch" and choose "main"
4. Your app will be available at `https://yourusername.github.io/repositoryname`

## File Structure

```
├── index.html          # Main application HTML (88 lines)
├── styles.css          # Minimal custom CSS + Bootstrap utilities (272 lines)
├── script.js           # Clean application logic (201 lines)
├── assets/
│   ├── css/
│   │   └── bootstrap.min.css    # Bootstrap 5.3.2 for offline use
│   └── js/
│       └── bootstrap.bundle.min.js  # Bootstrap JS components
├── data/
│   └── phrases.json    # Tri-lingual phrase database (100 chapters)
└── README.md          # This documentation
```

**Total Custom Code: Only 561 lines** - Ultra-lean codebase thanks to Bootstrap!

## Data Format

The application uses a structured JSON format for tri-lingual content:

```json
{
  "001": {
    "Hello": {
      "hi": "नमस्ते",
      "en": "Hello", 
      "fi": "Hei"
    }
  }
}
```

## Technologies Used

- **HTML5**: Semantic structure with Bootstrap components for accessibility
- **Bootstrap 5**: Native navbar, footer, and utility classes for professional layout
- **CSS3**: Minimal custom styling using modern responsive units (rem, vh, clamp)
- **Vanilla JavaScript (ES6+)**: Clean class-based architecture with modern features
- **JSON**: Structured tri-lingual data storage with chapter-based organization
- **Offline-First Design**: All dependencies bundled locally - zero internet required
- **SVG Data URIs**: Crisp flag icons embedded directly in CSS
- **Static Design**: No animations or transitions - pure performance focus

## Browser Support

Works in all modern browsers:
- Chrome 70+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers with ES6+ support

## Target Audience

- **Multi-language learners**: Anyone studying Hindi, English, or Finnish
- **Language exchange students**: Perfect for conversation practice
- **Travelers**: Essential phrases for visiting India, UK, or Finland
- **Language enthusiasts**: Clean interface for efficient vocabulary building
- **Mobile learners**: Optimized for on-the-go study sessions

## Offline Usage

This application works completely offline! All dependencies are bundled locally:

```
flashcard/
├── assets/
│   ├── css/
│   │   └── bootstrap.min.css    # Bootstrap 5.3.2 CSS (227KB)
│   └── js/
│       └── bootstrap.bundle.min.js  # Bootstrap 5.3.2 JS (79KB)
├── data/
│   └── phrases.json            # Tri-lingual phrase data
├── index.html                  # Main application
├── styles.css                  # Custom responsive styling
└── script.js                   # Application logic
```

**Benefits of Local Assets:**
- ✅ **Zero internet dependency** - Works in airplane mode
- ⚡ **Faster loading** - No CDN requests 
- 🔒 **Enhanced privacy** - No external tracking
- 📱 **Mobile-friendly** - No data usage after initial download

## Contributing

Feel free to contribute by:
- Adding new language phrases to the JSON structure
- Improving the user interface
- Suggesting new features
- Reporting bugs or issues

## License

This project is open source and available under the MIT License. 