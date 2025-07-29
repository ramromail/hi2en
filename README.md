# Learn Languages - Tri-lingual Flash Cards

A modern, minimalist flashcard application supporting multiple languages with a beautiful dark theme design. Perfect for language learners who want to study translations between Hindi, English, and Finnish.

## Features

- **Tri-lingual Support**: Learn between Hindi, English, and Finnish
- **Dynamic Language Selection**: Choose any source and target language combination
- **Flag Visual Indicators**: Subtle flag icons show which language is which
- **Dark Theme Design**: Easy on the eyes with pure black background and elegant styling
- **Automatic Shuffling**: Content randomized on every page load for varied learning
- **Swipe Gestures**: Mobile-friendly left/right swipe navigation
- **Responsive Design**: Bootstrap-powered layout optimized for all devices
- **Progress Tracking**: Visual progress bar shows your advancement
- **Multiple Navigation Options**: Swipe, keyboard arrows, or button controls
- **Minimalist Interface**: Clean, distraction-free design focuses on learning
- **GitHub Pages Ready**: Static files for easy hosting
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

### Navigation Options
1. **Swipe Gestures** (Mobile/Tablet):
   - Swipe left: Next card
   - Swipe right: Previous card

2. **Keyboard Navigation** (Desktop):
   - Left Arrow: Previous card
   - Right Arrow: Next card
   - Spacebar: Swap languages

3. **Button Controls**: Use < and > buttons for navigation

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

### Minimalist Interface
- **Clean typography**: High contrast text for maximum readability
- **Subtle indicators**: Flag icons provide context without visual clutter
- **Responsive scaling**: Content adapts beautifully to any screen size
- **Gesture-friendly**: Large touch targets and smooth swipe responses

## Setup for GitHub Pages

1. Upload all files to your GitHub repository
2. Go to Settings > Pages in your repository
3. Select "Deploy from a branch" and choose "main"
4. Your app will be available at `https://yourusername.github.io/repositoryname`

## File Structure

```
├── index.html          # Main application HTML
├── styles.css          # Dark theme styling and responsive design
├── script.js           # Application logic and language handling
├── data/
│   └── phrases.json    # Tri-lingual phrase database
└── README.md          # This documentation
```

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

- **HTML5**: Semantic structure with modern accessibility features
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and custom properties
- **Bootstrap 5**: Responsive components and utility classes
- **Vanilla JavaScript (ES6+)**: Modern async/await and class-based architecture
- **JSON**: Structured tri-lingual data storage
- **SVG**: Crisp flag icons with embedded data URIs
- **CSS Animations**: Smooth transitions and hover effects

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

## Contributing

Feel free to contribute by:
- Adding new language phrases to the JSON structure
- Improving the user interface
- Suggesting new features
- Reporting bugs or issues

## License

This project is open source and available under the MIT License. 