const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    document.querySelector(".intro").style.transition =
        "opacity 1s ease, transform 1s ease";

    document.querySelector(".intro").style.opacity = "0";

    document.querySelector(".intro").style.transform =
        "translateY(-20px)";

    setTimeout(() => {

        /*
         * Scene 2 will be added here.
         *
         * For now, we simply change the message
         * so we can test the transition.
         */

        document.querySelector(".intro").innerHTML = `
            <div class="symbol">♡</div>

            <p class="small-text">For my Carmilla</p>

            <h1>Sabu</h1>

            <p class="subtitle">
                There's something I need you to see.
            </p>
        `;

        document.querySelector(".intro").style.transform =
            "translateY(0)";

        document.querySelector(".intro").style.opacity = "1";

    }, 1000);

});
