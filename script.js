const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes-btn');

let yesScale = 1;
let noScale = 1;
let slideIndex = 0;

// 1. "No" Button Interaction
function handleNoClick() {
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
    noScale -= 0.2;
    noBtn.style.transform = `scale(${noScale})`;
    if (noScale < 0.2) {
        noBtn.style.display = 'none';
    }
}

// 2. Go to Step 2
function goToStep2() {
    step1.style.display = 'none';
    step2.classList.remove('hidden');
    step2.style.display = 'block';
    startSlideshow();
}

// 3. Go to Step 3 (Letter Page)
function goToStep3() {
    step2.style.display = 'none';
    step3.classList.remove('hidden');
    step3.style.display = 'block';
}

// 4. Slideshow Logic
function startSlideshow() {
    const slides = document.querySelectorAll('.slideshow-img');
    if (slides.length === 0) return;

    setInterval(() => {
        slides[slideIndex].classList.remove('active');
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].classList.add('active');
    }, 5000); 
}
