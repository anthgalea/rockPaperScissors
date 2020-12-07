const game = () => {
    let pPoints = 0;
    let cPoints = 0;

    //Begin the game.
    const beginGame = () => {
        const playButton = document.querySelector('.startScreen button');
        const startScreen = document.querySelector('.startScreen');
        const contest = document.querySelector('.contest');

        playButton.addEventListener('click', () => {
            startScreen.classList.add('fadeOut');
            contest.classList.add('fadeIn');
        });
    };

    //Call all the inner functions.
    beginGame();
};

//Call the game function.
game();
