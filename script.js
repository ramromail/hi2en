class FlashCardApp {
    constructor() {
        this.phrasesData = [];
        this.currentIndex = 0;
        this.frontLang = 'hi'; // Default: Hindi on front
        this.backLang = 'en';  // Default: English on back
        
        this.languageNames = {
            'hi': 'Hindi',
            'en': 'English', 
            'fi': 'Finnish'
        };
        
        this.initializeElements();
        this.attachEventListeners();
        this.loadData();
    }

    initializeElements() {
        this.flashCard = document.getElementById('flash-card');
        this.frontContent = document.getElementById('front-content');
        this.backContent = document.getElementById('back-content');
        
        // Language selection controls
        this.frontLangSelect = document.getElementById('front-lang-select');
        this.backLangSelect = document.getElementById('back-lang-select');
        this.swapLangsBtn = document.getElementById('swap-langs-btn');
        
        // Initialize language selectors with default values
        if (this.frontLangSelect) this.frontLangSelect.value = this.frontLang;
        if (this.backLangSelect) this.backLangSelect.value = this.backLang;
    }

    attachEventListeners() {
        // Language selection listeners
        if (this.frontLangSelect) {
            this.frontLangSelect.addEventListener('change', (e) => {
                this.frontLang = e.target.value;
                this.updateDisplay();
            });
        }
        
        if (this.backLangSelect) {
            this.backLangSelect.addEventListener('change', (e) => {
                this.backLang = e.target.value;
                this.updateDisplay();
            });
        }
        
        if (this.swapLangsBtn) {
            this.swapLangsBtn.addEventListener('click', () => this.swapLanguages());
        }
        
        // Click navigation on card
        this.setupClickHandlers();
    }

    setupClickHandlers() {
        this.flashCard.addEventListener('click', (e) => {
            // Get click position relative to the card
            const rect = this.flashCard.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const cardWidth = rect.width;
            const leftHalf = cardWidth / 2;
            
            // Determine which side was clicked
            if (clickX < leftHalf) {
                // Clicked left side - previous card
                this.previousCard();
            } else {
                // Clicked right side - next card
                this.nextCard();
            }
        });
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    async loadData() {
        try {
            const phrasesResponse = await fetch('data/phrases.json');
            const phrasesRaw = await phrasesResponse.json();
            
            this.phrasesData = this.shuffleArray(this.convertTrilingualData(phrasesRaw));
            this.updateDisplay();
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError();
        }
    }

    convertTrilingualData(rawData) {
        const convertedData = [];
        
        if (Array.isArray(rawData)) {
            return rawData.map(item => ({
                hi: item.front,
                en: item.back,
                fi: '',
                chapter: 'legacy',
                englishKey: item.back
            }));
        }
        
        Object.keys(rawData).forEach(chapterKey => {
            const chapter = rawData[chapterKey];
            
            Object.keys(chapter).forEach(englishKey => {
                const phraseData = chapter[englishKey];
                
                convertedData.push({
                    hi: phraseData.hi || englishKey,
                    en: phraseData.en || englishKey,
                    fi: phraseData.fi || englishKey,
                    chapter: chapterKey,
                    englishKey: englishKey
                });
            });
        });
        
        return convertedData;
    }

    showError() {
        this.frontContent.textContent = 'Error loading data';
        this.backContent.textContent = 'Please check data files';
    }

    swapLanguages() {
        const temp = this.frontLang;
        this.frontLang = this.backLang;
        this.backLang = temp;
        
        if (this.frontLangSelect) this.frontLangSelect.value = this.frontLang;
        if (this.backLangSelect) this.backLangSelect.value = this.backLang;
        
        this.updateDisplay();
    }

    getCurrentData() {
        return this.phrasesData;
    }

    updateDisplay() {
        const data = this.getCurrentData();
        
        if (data.length === 0) {
            this.frontContent.textContent = 'No data available';
            this.backContent.textContent = 'Please add some cards';
            return;
        }

        const currentCard = data[this.currentIndex];
        
        // Get parent elements to apply flag backgrounds
        const frontSection = this.frontContent.closest('.card-half-top');
        const backSection = this.backContent.closest('.card-half-bottom');
        
        // Remove existing flag classes
        frontSection.classList.remove('card-section-hi', 'card-section-en', 'card-section-fi');
        backSection.classList.remove('card-section-hi', 'card-section-en', 'card-section-fi');
        
        // Add flag background classes based on current languages
        frontSection.classList.add(`card-section-${this.frontLang}`);
        backSection.classList.add(`card-section-${this.backLang}`);
        
        // Update content with language-specific styling
        this.frontContent.textContent = currentCard[this.frontLang] || 'No translation available';
        this.frontContent.className = `flashcard-text fw-medium ${this.frontLang}-text`;
        
        this.backContent.textContent = currentCard[this.backLang] || 'No translation available';
        this.backContent.className = `flashcard-text fw-medium ${this.backLang}-text`;
    }

    previousCard() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
        }
    }

    nextCard() {
        const data = this.getCurrentData();
        if (this.currentIndex < data.length - 1) {
            this.currentIndex++;
            this.updateDisplay();
        }
    }

}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FlashCardApp();
}); 