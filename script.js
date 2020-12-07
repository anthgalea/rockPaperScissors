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
    //Play the game.
    const playGame = () => {
        const options = document.querySelectorAll('.options button');
        const playerHands = document.querySelector('.playerHands');
        const computerHands = document.querySelector('computerHands');
        const allHandSigns = document.querySelectorAll('.handSigns img');
    };

    //Call all the inner functions. 
    beginGame();
};

//Call the game function.
game();
