const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", startHeartScene);

function startHeartScene() {

    const intro = document.querySelector(".intro");

    intro.style.transition = "opacity 1s ease, transform 1s ease";
    intro.style.opacity = "0";
    intro.style.transform = "translateY(-20px)";

    setTimeout(() => {

        intro.innerHTML = `
            <div class="heart-scene">

                <p class="small-text">Carmilla & Cecilion</p>

                <h2>Your heart</h2>

                <div class="heart-container">
                    <div class="heart-glow"></div>
                    <div class="heart">♥</div>
                </div>

                <div class="heart-number">100</div>

                <p class="heart-description">
                    I wish I had been more careful with it.
                </p>

                <button id="beginButton">
                    Begin
                    <span>♡</span>
                </button>

            </div>
        `;

        intro.style.transform = "translateY(0)";
        intro.style.opacity = "1";

        document
            .getElementById("beginButton")
            .addEventListener("click", startMistakes);

    }, 1000);
}


function startMistakes() {

    const intro = document.querySelector(".intro");

    intro.style.transition = "opacity 0.7s ease";
    intro.style.opacity = "0";

    setTimeout(() => {

        showMistake(0);

        intro.style.opacity = "1";

    }, 700);
}


/*
    Your mistakes.

    We will eventually add more interactions
    and animations to each one.
*/

const mistakes = [

    {
        number: "01",
        title: "The morning",
        text:
            "This morning, I thought you were being dry with me.",
        realization:
            "But you were dealing with trouble at home... and I didn't understand that.",
        heart: 75
    },

    {
        number: "02",
        title: "I didn't protect you",
        text:
            "When we were playing Cecilion, I was supposed to have your back.",
        realization:
            "But I failed to protect you from the enemies.",
        heart: 50
    },

    {
        number: "03",
        title: "I let you sleep upset",
        text:
            "I knew you were upset...",
        realization:
            "And I still let you go to sleep that way.",
        heart: 25
    }

];


let currentMistake = 0;


function showMistake(index) {

    const intro = document.querySelector(".intro");
    const mistake = mistakes[index];

    intro.innerHTML = `

        <div class="mistake-scene">

            <div class="mistake-number">
                ${mistake.number}
            </div>

            <h2>${mistake.title}</h2>

            <div class="mistake-heart">
                <span>♥</span>
            </div>

            <p class="mistake-text">
                ${mistake.text}
            </p>

            <p class="realization">
                ${mistake.realization}
            </p>

            <div class="heart-status">
                ♥ ${mistake.heart}
            </div>

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


/*
    Final broken-heart scene.
*/

function showBrokenHeart() {

    const intro = document.querySelector(".intro");

    intro.innerHTML = `

        <div class="broken-scene">

            <div class="mistake-number">
                04
            </div>

            <div class="broken-heart">
                💔
            </div>

            <div class="heart-status broken-status">
                ♥ 0
            </div>

            <h2>Game over.</h2>

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


/*
    This will become the emotional apology scene.
*/

function showRealization() {

    const intro = document.querySelector(".intro");

    intro.classList.add("mistake-fade");

    setTimeout(() => {

        intro.innerHTML = `

            <div class="realization-scene">

                <div class="symbol">♡</div>

                <p class="small-text">
                    I finally realized...
                </p>

                <h2>
                    Those weren't points.
                </h2>

                <p>
                    They were cracks in your heart.
                </p>

                <button id="continueButton">
                    Continue
                    <span>♡</span>
                </button>

            </div>

        `;

        intro.classList.remove("mistake-fade");

        document
            .getElementById("continueButton")
            .addEventListener("click", () => {

                alert("Our next scene will be the real apology.");

            });

    }, 700);
}
