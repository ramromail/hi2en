# Learn English - Hindi to English Flash Cards

A modern, interactive flash card application designed specifically for Hindi speakers learning English. Features comprehensive vocabulary and phrases with automatic randomization and mobile-friendly swipe gestures.

## Features

- **Hindi to English Learning**: Specialized content for Hindi speakers
- **Dual Language Display**: See both Hindi and English simultaneously on each card
- **Vocabulary Section (शब्दावली)**: 95+ essential English words with Hindi translations
- **Phrases Section (वाक्य)**: 75+ practical English phrases for daily conversation
- **Automatic Shuffling**: Content randomized on every page load for varied learning
- **Swipe Gestures**: Mobile-friendly left/right swipe navigation
- **Responsive Design**: Bootstrap-powered layout for all devices
- **Progress Tracking**: Visual progress bar shows your advancement
- **Multiple Navigation Options**: Swipe, keyboard, or button controls
- **GitHub Pages Ready**: Static files for easy hosting

## Content Overview

### Vocabulary (शब्दावली)
Covers essential categories:
- **People & Family**: व्यक्ति → Person, माता-पिता → Parents
- **Daily Objects**: पानी → Water, खाना → Food, घर → House
- **Professions**: डॉक्टर → Doctor, शिक्षक → Teacher
- **Places**: अस्पताल → Hospital, स्कूल → School
- **Colors**: लाल → Red, नीला → Blue, हरा → Green
- **Numbers**: एक → One, दो → Two, तीन → Three
- **Transportation**: गाड़ी → Car, बस → Bus, ट्रेन → Train

### Phrases (वाक्य)
Essential conversations:
- **Greetings**: आप कैसे हैं? → How are you?
- **Introductions**: मेरा नाम राम है → My name is Ram
- **Travel**: बाथरूम कहाँ है? → Where is the bathroom?
- **Shopping**: यह कितना है? → How much is this?
- **Emergency**: मुझे मदद चाहिए → I need help
- **Daily Situations**: क्या आप अंग्रेजी बोलते हैं? → Do you speak English?

## How to Use

### Navigation Options
1. **Swipe Gestures** (Mobile/Tablet):
   - Swipe left: Next card
   - Swipe right: Previous card

2. **Keyboard Navigation** (Desktop):
   - Left Arrow: Previous card
   - Right Arrow: Next card

3. **Button Controls**: Use Previous/Next buttons

4. **Section Switching**: Toggle between शब्दावली (Vocabulary) and वाक्य (Phrases)

5. **Shuffle Content**: Refresh the page to get new random order

### Learning Tips
- Each card shows both Hindi and English simultaneously for efficient learning
- Progress bar helps track your advancement through the content
- Refresh page anytime to practice with different order
- Focus on pronunciation while reading English translations
- Use in daily practice sessions for best results

## Setup for GitHub Pages

1. Upload all files to your GitHub repository
2. Go to Settings > Pages in your repository
3. Select "Deploy from a branch" and choose "main"
4. Your app will be available at `https://yourusername.github.io/repositoryname`

## Customizing Content

### Adding Vocabulary

Edit `data/vocabulary.json` with your own Hindi-English pairs:

```json
[
    {
        "front": "हिंदी शब्द",
        "back": "English Translation"
    }
]
```

### Adding Phrases

Edit `data/phrases.json` with your own Hindi-English phrases:

```json
[
    {
        "front": "हिंदी वाक्य",
        "back": "English Sentence"
    }
]
```

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Custom styling
├── script.js           # JavaScript functionality
├── data/
│   ├── vocabulary.json # Hindi-English vocabulary (95+ words)
│   └── phrases.json    # Hindi-English phrases (75+ phrases)
└── README.md          # This documentation
```

## Technologies Used

- **HTML5**: Modern semantic structure
- **CSS3**: Custom styling with animations and transitions
- **Bootstrap 5**: Responsive grid system and components
- **Vanilla JavaScript (ES6+)**: Interactive functionality
- **JSON**: Structured data storage
- **Fisher-Yates Algorithm**: True randomization of content

## Browser Support

Works in all modern browsers that support ES6+ features:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Target Audience

- Hindi speakers learning English
- Students preparing for English proficiency tests
- Professionals needing English for workplace communication
- Anyone wanting to improve Hindi-English vocabulary and phrases

## License

This project is open source and available under the MIT License. 