let noClickCount = 0;

function goToScreen(screenNumber) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });

    // Show the target screen
    document.getElementById(`screen-${screenNumber}`).classList.remove('hidden');
}

function handleNo() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const title = document.querySelector('#screen-1 h1');

    noClickCount++;

    // First No Click
    if (noClickCount === 1) {
        title.innerText = "Are you sure? 🥺";
    } 
    // Subsequent No Clicks
    else {
        // Decrease No button size
        const currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        noBtn.style.fontSize = `${Math.max(0, currentNoSize - 5)}px`; // Stops at 0
        
        // Increase Yes button size
        const currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        const currentYesPadding = parseFloat(window.getComputedStyle(yesBtn).padding);
        
        yesBtn.style.fontSize = `${currentYesSize + 10}px`;
        yesBtn.style.padding = `${currentYesPadding + 5}px`;
        
        // Optional: Change text to be more pleading
        title.innerText = "Please... 😭";
        
        // If 'No' becomes too small, hide it
        if (currentNoSize < 10) {
            noBtn.style.display = 'none';
        }
  
    }
}
