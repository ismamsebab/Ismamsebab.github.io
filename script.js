const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", startHeartScene);


/* =========================================
   SCENE 1 → SCENE 2
========================================= */

function startHeartScene() {

    const intro = document.querySelector(".intro");

    fadeOut(intro);

    setTimeout(() => {

        intro.innerHTML = `

            <div class="heart-scene">

                <p class="small-text">
                    Carmilla & Cecilion
                </p>

                <h2>Your heart</h2>

                <div class="heart-container">

                    <div class="heart-glow"></div>

                    <div class="heart intact-heart">
                        ♥
                    </div>

                </div>

                <div class="heart-number">
                    100
                </div>

                <p class="heart-description">
                    I wish I had been more careful with it.
                </p>

                <button id="beginButton">
                    Begin
                    <span>♡</span>
                </button>

            </div>

        `;

        fadeIn(intro);

        document
            .getElementById("beginButton")
            .addEventListener("click", startMistakes);

    }, 900);
}


/* =========================================
   MISTAKES
========================================= */

const mistakes = [

    {
        number: "01",

        title: "The morning",

        text:
            "This morning, I thought you were being dry with me.",

        realization:
            "But you were dealing with trouble at home... and I didn't understand that.",

        heart: 75,

        crack: "crack-1"
    },

    {
        number: "02",

        title: "I didn't protect you",

        text:
            "When we were playing Cecilion, I was supposed to have your back.",

        realization:
            "But I failed to protect you from the enemies.",

        heart: 50,

        crack: "crack-2"
    },

    {
        number: "03",

        title: "I let you sleep upset",

        text:
            "I knew you were upset...",

        realization:
            "And I still let you go to sleep that way.",

        heart: 25,

        crack: "crack-3"
    }

];


let currentMistake = 0;


/* =========================================
   START MISTAKES
========================================= */

function startMistakes() {

    const intro = document.querySelector(".intro");

    fadeOut(intro);

    setTimeout(() => {

        showMistake(0);

        fadeIn(intro);

    }, 700);
}


/* =========================================
   SHOW MISTAKE
========================================= */

function showMistake(index) {

    const intro = document.querySelector(".intro");

    const mistake = mistakes[index];

    intro.innerHTML = `

        <div class="mistake-scene">

            <div class="mistake-number">
                ${mistake.number}
            </div>

            <h2>
                ${mistake.title}
            </h2>

            <div class="damage-heart ${mistake.crack}">

                <span class="heart-symbol">
                    ♥
                </span>

                <span class="crack-line"></span>

            </div>

            <div class="heart-status">
                ♥ ${mistake.heart}
            </div>

            <p class="mistake-text">
                ${mistake.text}
            </p>

            <p class="realization">
                ${mistake.realization}
            </p>

            <button id="acceptButton">

                I understand

                <span>♡</span>

            </button>

        </div>

    `;


    document
        .getElementById("acceptButton")
        .addEventListener("click", acceptMistake);
}


/* =========================================
   ACCEPT MISTAKE
========================================= */

function acceptMistake() {

    const intro = document.querySelector(".intro");

    intro.classList.add("mistake-fade");

    setTimeout(() => {

        currentMistake++;

        if (currentMistake < mistakes.length) {

            showMistake(currentMistake);

        } else {

            showBrokenHeart();

        }

        intro.classList.remove("mistake-fade");

    }, 700);
}


/* =========================================
   BROKEN HEART
========================================= */

function showBrokenHeart() {

    const intro = document.querySelector(".intro");

    intro.innerHTML = `

        <div class="broken-scene">

            <div class="broken-heart-large">

                <span>♥</span>

                <i></i>
                <b></b>

            </div>

            <div class="heart-status broken-status">
                ♥ 0
            </div>

            <h2>
                Game over.
            </h2>

            <p>
                I thought I was playing with a health bar.
            </p>

            <p>
                But it wasn't a game.
            </p>

            <button id="realizationButton">

                Continue

                <span>♡</span>

            </button>

        </div>

    `;

    document
        .getElementById("realizationButton")
        .addEventListener("click", showRealization);
}


/* =========================================
   REALIZATION
========================================= */

function showRealization() {

    const intro = document.querySelector(".intro");

    fadeOut(intro);

    setTimeout(() => {

        intro.innerHTML = `

            <div class="realization-scene">

                <div class="symbol">
                    ♡
                </div>

                <p class="small-text">
                    I finally realized...
                </p>

                <h2>
                    Those weren't points.
                </h2>

                <p>
                    They were cracks in your heart.
                </p>

                <p>
                    And I was the one who caused them.
                </p>

                <button id="continueButton">

                    Continue

                    <span>♡</span>

                </button>

            </div>

        `;

        fadeIn(intro);

        document
            .getElementById("continueButton")
            .addEventListener("click", showBasantiScene);

    }, 1000);
}


/* =========================================
   BASANTI SCENE
========================================= */

function showBasantiScene() {

    const intro = document.querySelector(".intro");

    fadeOut(intro);

    setTimeout(() => {

        intro.innerHTML = `

            <div class="basanti-scene">

                <div class="cartoon-couple">

                    <div class="cartoon-heart">
                        ♥
                    </div>

                    <div class="cartoon-face">
                        🥺
                    </div>

                </div>

                <p class="small-text">
                    But then I remembered...
                </p>

                <h2>
                    That smile.
                </h2>

                <p class="basanti-text">
                    Basanti smile kar deee...
                </p>

                <div class="music-note">
                    ♪ ♫ ♪
                </div>

                <button id="warmButton">

                    Smile for me ♡

                </button>

            </div>

        `;

        fadeIn(intro);

        document
            .getElementById("warmButton")
            .addEventListener("click", startWarmScene);

    }, 900);
}


/* =========================================
   WARM TRANSITION
========================================= */

function startWarmScene() {

    document.body.classList.add("warm-mode");

    const intro = document.querySelector(".intro");

    fadeOut(intro);

    setTimeout(() => {

        intro.innerHTML = `

            <div class="warm-scene">

                <div class="symbol warm-heart">
                    ♥
                </div>

                <p class="small-text">
                    Sabu...
                </p>

                <h2>
                    Can I try to fix it?
                </h2>

                <p>
                    I know an apology can't erase
                    what happened.
                </p>

                <p>
                    But I want to show you
                    that I mean it.
                </p>

                <button id="repairButton">

                    Let me try ♡

                </button>

            </div>

        `;

        fadeIn(intro);

        document
            .getElementById("repairButton")
            .addEventListener("click", startRepair);

    }, 900);
}


/* =========================================
   REPAIR
========================================= */

function startRepair() {

    const intro = document.querySelector(".intro");

    fadeOut(intro);

    setTimeout(() => {

        intro.innerHTML = `

            <div class="repair-scene">

                <p class="small-text">
                    One tap at a time...
                </p>

                <div
                    id="repairHeart"
                    class="repair-heart broken-repair"
                >
                    ♥
                </div>

                <div id="repairText">

                    Touch the heart.

                </div>

            </div>

        `;

        fadeIn(intro);

        document
            .getElementById("repairHeart")
            .addEventListener("click", repairHeart);

    }, 700);
}


let repairCount = 0;


function repairHeart() {

    const heart = document.getElementById("repairHeart");

    const text = document.getElementById("repairText");

    repairCount++;

    heart.classList.add("repair-pulse");

    setTimeout(() => {

        heart.classList.remove("repair-pulse");

    }, 300);


    if (repairCount === 1) {

        text.innerHTML =
            "One mistake doesn't define everything.";

        heart.classList.remove("broken-repair");

    }

    else if (repairCount === 2) {

        text.innerHTML =
            "I'm learning.";

    }

    else if (repairCount === 3) {

        text.innerHTML =
            "I'm listening.";

    }

    else if (repairCount === 4) {

        text.innerHTML =
            "I'm going to do better.";

    }

    else if (repairCount >= 5) {

        heart.classList.add("fully-repaired");

        text.innerHTML =
            "♡ Thank you for hearing me. ♡";

        setTimeout(() => {

            showApology();

        }, 1800);

    }

}


/* =========================================
   FINAL APOLOGY
========================================= */

function showApology() {

    const intro = document.querySelector(".intro");

    fadeOut(intro);

    setTimeout(() => {

        intro.innerHTML = `

            <div class="apology-scene">

                <p class="small-text">
                    Sabu
                </p>

                <h2>
                    I'm sorry.
                </h2>

                <p>
                    I don't want to make excuses
                    for the things I did.
                </p>

                <p>
                    I just want you to know
                    that I understand them now.
                </p>

                <p>
                    And I want to be better for you.
                </p>

                <button id="reelButton">

                    There's one more thing ♡

                </button>

            </div>

        `;

        fadeIn(intro);

        document
            .getElementById("reelButton")
            .addEventListener("click", () => {

                alert(
                    "Your Reel will go here ❤️"
                );

            });

    }, 900);
}


/* =========================================
   HELPERS
========================================= */

function fadeOut(element) {

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    element.style.opacity = "0";

    element.style.transform =
        "translateY(-15px)";
}


function fadeIn(element) {

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    element.style.opacity = "1";

    element.style.transform =
        "translateY(0)";
}
