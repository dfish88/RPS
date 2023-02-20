const game = {
    playerScore : 0,
    playerCurrentChoice : '',
    computerScore : 0,
    computerCurrentChoice : '',
    active : true
}

const ui = {
    messageDiv : document.querySelector('.game-message'),
    playerScore : document.querySelector('.player-score'),
    playerCurrentChoice : document.querySelector('.player-choice'),
    computerScore : document.querySelector('.computer-score'),
    computerCurrentChoice : document.querySelector('.computer-choice'),
    restartDiv : document.querySelector('.restart')
}

function fullRound(playerChoice){

    if(!game.active) return;

    let roundStatus = playRound(playerChoice, getComputerChoice());
    displayRoundResults(roundStatus);

    if (game.computerScore >= 5 || game.playerScore >= 5) endGame();
}

function getComputerChoice()
{
    const choices = { 0 : "Rock", 1 : "Paper", 2 : "Scissors"}
    var choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection)
{
    var ps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    var cs = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    var message = "";

    game.playerCurrentChoice = ps.charAt(0);
    game.computerCurrentChoice = cs.charAt(0);

    if( 
        (ps == "Rock" && cs == "Scissors") ||
        (ps == "Paper" && cs == "Rock") ||
        (ps == "Scissors" && cs == "Paper")
    )
    {
        message = "You Win, " + ps.charAt(0) + " beats " + cs.charAt(0);
        game.playerScore = game.playerScore + 1;
    }
    else if(
        (cs == "Rock" && ps == "Scissors") ||
        (cs == "Paper" && ps == "Rock") ||
        (cs == "Scissors" && ps == "Paper")
    )
    {
        message = "You Lose, " + cs.charAt(0) + " beats " + ps.charAt(0);
        game.computerScore = game.computerScore + 1;
    }
    else
    {
        message = "Draw, Try again"
    }
    return message;
}

function restartGame(){
    game.active = true;
    game.computerScore = 0;
    game.playerScore = 0;
    ui.messageDiv.textContent = 'Click a button to play';
    ui.playerScore.textContent = 'Player : 0';
    ui.computerScore.textContent = 'Computer : 0';
    ui.computerCurrentChoice.textContent = '?';
    ui.playerCurrentChoice.textContent = '?';
    ui.restartDiv.style.visibility = 'hidden';
}

function endGame(){
    if (game.playerScore > game.computerScore) ui.messageDiv.textContent = 'Game Over, You win!';
    else ui.messageDiv.textContent = 'Game Over, You Lose!';
    game.active = false;
    ui.restartDiv.style.visibility = 'visible';
}

function displayRoundResults(status){
    ui.computerScore.textContent = 'Computer : ' + game.computerScore.toString();
    ui.playerScore.textContent = 'Player : ' + game.playerScore.toString();
    ui.messageDiv.textContent = status;
    ui.playerCurrentChoice.textContent = game.playerCurrentChoice;
    ui.computerCurrentChoice.textContent = game.computerCurrentChoice;
}

const buttons = document.querySelectorAll('.choice-button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => { fullRound(btn.id) });
});

const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener('click', restartGame);