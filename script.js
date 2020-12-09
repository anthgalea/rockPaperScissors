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
        const computerHands = document.querySelector('.computerHands');
        const allHandSigns = document.querySelectorAll('.handSigns img');
        //Computer Choices.
        const computerChoices = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                //Computer decision from array.
                const computerNumber = Math.floor(Math.random() * 3);
                const computerDecision = computerChoices[computerNumber];
                //Call compareTheHandSigns here
                compareTheHandSigns(this.textContent, computerDecision);

                //Bring the images up to date.
                playerHands.src = `./assets/${this.textContent}.png`;
                computerHands.src = `./assets/${computerDecision}.png`;
            });
        });
    };

    //This function will update the points. 
    const updatePoints = () => {
        const playerPoints = document.querySelector('.playerPoints p');
        const computerPoints = document.querySelector('.computerPoints p');
        playerPoints.textContent = pPoints;
        computerPoints.textContent = cPoints;
    }

    const compareTheHandSigns = (playerDecision, computerDecision) =>{
        //Update text on screen.
        const theWinner = document.querySelector('.theWinner');
        //Determine if there is a tie between the player and the computer.
        if(playerDecision === computerDecision){
            theWinner.textContent = 'It is a tie';
            return;
        }
        //Determine if player has chosen rock.
        if(playerDecision === 'rock'){
            if(computerDecision === 'scissors'){
                theWinner.textContent = 'Player wins';
                return;
            }else{
                theWinner.textContent = 'Computer wins';
                return;
            }
        }
        //Determine if player has chosen paper.
        if(playerDecision === 'paper'){
            if(computerDecision === 'rock'){
                theWinner.textContent = 'Player wins';
                return;
            }else{
                theWinner.textContent = 'Computer wins';
                return;
            }
        }
        //Determine if player has chosen scissors.
        if(playerDecision === 'scissors'){
            if(computerDecision === 'paper'){
                theWinner.textContent = 'Player wins';
                return;
            }else{
                theWinner.textContent = 'Computer wins';
                return;
            }
        }
    }

    //Call all the inner functions. 
    beginGame();
    playGame();
};

//Call the game function.
game();
