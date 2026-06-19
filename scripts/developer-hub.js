const startButton =
    document.getElementById(
        "startChallengeBtn"
    );

startButton.addEventListener(
    "click",
    () => {

        const difficulty =
            document.getElementById(
                "difficultyLevel"
            ).value;

        const category =
            document.getElementById(
                "category"
            ).value;

        localStorage.setItem(
            "selectedDifficulty",
            difficulty
        );

        localStorage.setItem(
            "selectedCategory",
            category
        );

        window.location.href =
            "developer-challenge.html";

    }
);