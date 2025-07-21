class FlashCardApp {
    constructor() {
        this.vocabularyData = [];
        this.phrasesData = [];
        this.currentSection = 'vocabulary';
        this.currentIndex = 0;
        
        this.initializeElements();
        this.attachEventListeners();
        this.loadData();
    }

    initializeElements() {
        this.vocabBtn = document.getElementById('vocab-btn');
        this.phrasesBtn = document.getElementById('phrases-btn');
        this.flashCard = document.getElementById('flash-card');
        this.frontText = document.getElementById('front-text');
        this.backText = document.getElementById('back-text');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
    }

    attachEventListeners() {
        this.vocabBtn.addEventListener('click', () => this.switchSection('vocabulary'));
        this.phrasesBtn.addEventListener('click', () => this.switchSection('phrases'));
        this.prevBtn.addEventListener('click', () => this.previousCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());
        
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
            // Prevent default scrolling behavior during swipe
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

            // Check if it's a horizontal swipe (not vertical)
            if (absDeltaX > minSwipeDistance && absDeltaY < maxVerticalDistance && absDeltaX > absDeltaY) {
                if (deltaX > 0) {
                    // Swipe right - go to previous card
                    this.previousCard();
                } else {
                    // Swipe left - go to next card
                    this.nextCard();
                }
            }
        });

        // Also add mouse drag support for desktop
        let isMouseDown = false;
        let mouseStartX = 0;

        this.flashCard.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            mouseStartX = e.clientX;
            this.flashCard.style.cursor = 'grabbing';
        });

        this.flashCard.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
                e.preventDefault();
            }
        });

        this.flashCard.addEventListener('mouseup', (e) => {
            if (isMouseDown) {
                const deltaX = e.clientX - mouseStartX;
                const absDeltaX = Math.abs(deltaX);

                if (absDeltaX > minSwipeDistance) {
                    if (deltaX > 0) {
                        // Drag right - go to previous card
                        this.previousCard();
                    } else {
                        // Drag left - go to next card
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
        // Fisher-Yates shuffle algorithm
        const shuffled = [...array]; // Create a copy to avoid mutating original
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    async loadData() {
        try {
            const [vocabResponse, phrasesResponse] = await Promise.all([
                fetch('data/vocabulary.json'),
                fetch('data/phrases.json')
            ]);
            
            this.vocabularyData = this.shuffleArray(await vocabResponse.json());
            this.phrasesData = this.shuffleArray(await phrasesResponse.json());
            
            this.updateDisplay();
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError();
        }
    }

    showError() {
        this.frontText.innerHTML = 'Error loading data';
        this.backText.innerHTML = 'Please check data files';
    }

    switchSection(section) {
        this.currentSection = section;
        this.currentIndex = 0;
        
        // Update nav buttons
        this.vocabBtn.classList.toggle('active', section === 'vocabulary');
        this.phrasesBtn.classList.toggle('active', section === 'phrases');
        
        this.updateDisplay();
    }

    getCurrentData() {
        return this.currentSection === 'vocabulary' ? this.vocabularyData : this.phrasesData;
    }

    updateDisplay() {
        const data = this.getCurrentData();
        
        if (data.length === 0) {
            this.frontText.innerHTML = 'No data available';
            this.backText.innerHTML = 'Please add some cards';
            this.updateProgress(0);
            this.updateNavigation();
            return;
        }

        const currentCard = data[this.currentIndex];
        // Show both Hindi and English on the front side
        this.frontText.innerHTML = `
            <div class="hindi-text">
                ${currentCard.front}
            </div>
            <div class="english-text">
                ${currentCard.back}
            </div>
        `;
        
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