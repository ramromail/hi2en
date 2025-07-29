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
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        
        // Language selection controls
        this.frontLangSelect = document.getElementById('front-lang-select');
        this.backLangSelect = document.getElementById('back-lang-select');
        this.swapLangsBtn = document.getElementById('swap-langs-btn');
        
        // Initialize language selectors with default values
        if (this.frontLangSelect) this.frontLangSelect.value = this.frontLang;
        if (this.backLangSelect) this.backLangSelect.value = this.backLang;
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());
        
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
        
        // Touch/swipe functionality
        this.setupSwipeHandlers();
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.previousCard();
                    break;
                case 'ArrowRight':
                    this.nextCard();
                    break;
                case ' ':
                    e.preventDefault();
                    this.swapLanguages();
                    break;
            }
        });
    }

    setupSwipeHandlers() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        const minSwipeDistance = 50;
        const maxVerticalDistance = 100;

        this.flashCard.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.flashCard.addEventListener('touchmove', (e) => {
            if (Math.abs(e.touches[0].clientX - startX) > 10) {
                e.preventDefault();
            }
        });

        this.flashCard.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const absDeltaX = Math.abs(deltaX);
            const absDeltaY = Math.abs(deltaY);

            if (absDeltaX > minSwipeDistance && absDeltaY < maxVerticalDistance && absDeltaX > absDeltaY) {
                if (deltaX > 0) {
                    this.previousCard();
                } else {
                    this.nextCard();
                }
            }
        });

        // Mouse drag support
        let isMouseDown = false;
        let mouseStartX = 0;

        this.flashCard.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            mouseStartX = e.clientX;
            this.flashCard.style.cursor = 'grabbing';
        });

        this.flashCard.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
                const deltaX = e.clientX - mouseStartX;
                if (Math.abs(deltaX) > 10) {
                    e.preventDefault();
                }
            }
        });

        this.flashCard.addEventListener('mouseup', (e) => {
            if (isMouseDown) {
                const deltaX = e.clientX - mouseStartX;
                if (Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                        this.previousCard();
                    } else {
                        this.nextCard();
                    }
                }
            }
            isMouseDown = false;
            this.flashCard.style.cursor = '';
        });

        this.flashCard.addEventListener('mouseleave', () => {
            isMouseDown = false;
            this.flashCard.style.cursor = '';
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
            this.updateProgress(0);
            this.updateNavigation();
            return;
        }

        const currentCard = data[this.currentIndex];
        
        // Get parent elements to apply flag backgrounds
        const frontSection = this.frontContent.closest('.flex-fill');
        const backSection = this.backContent.closest('.flex-fill');
        
        // Remove existing flag classes
        frontSection.classList.remove('card-section-hi', 'card-section-en', 'card-section-fi');
        backSection.classList.remove('card-section-hi', 'card-section-en', 'card-section-fi');
        
        // Add flag background classes based on current languages
        frontSection.classList.add(`card-section-${this.frontLang}`);
        backSection.classList.add(`card-section-${this.backLang}`);
        
        // Update content with language-specific styling
        this.frontContent.textContent = currentCard[this.frontLang] || 'No translation available';
        this.frontContent.className = `fs-4 fw-medium ${this.frontLang}-text`;
        
        this.backContent.textContent = currentCard[this.backLang] || 'No translation available';
        this.backContent.className = `fs-4 fw-medium ${this.backLang}-text`;
        
        this.updateProgress((this.currentIndex + 1) / data.length * 100);
        this.updateNavigation();
    }

    updateProgress(percentage) {
        this.progressFill.style.width = `${percentage}%`;
        const data = this.getCurrentData();
        this.progressText.textContent = `${this.currentIndex + 1} / ${data.length}`;
    }

    updateNavigation() {
        const data = this.getCurrentData();
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === data.length - 1;
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