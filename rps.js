const game = {
    playerScore : 0,
    computerScore : 0,
    active : true
}

const ui = {
    statusDiv : document.querySelector('.round-outcome'),
    playerScore : document.querySelector('.player-score'),
    computerScore : document.querySelector('.computer-score')
}

function fullRound(playerChoice){

    if(!game.active) return;

    let roundStatus = playRound(playerChoice, getComputerChoice());
    displayRoundStatus(roundStatus);
    displayScore();

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

    if( 
        (ps == "Rock" && cs == "Scissors") ||
        (ps == "Paper" && cs == "Rock") ||
        (ps == "Scissors" && cs == "Paper")
    )
    {
        message = "You Win! " + ps + " beats " + cs;
        game.playerScore = game.playerScore + 1;
    }
    else if(
        (cs == "Rock" && ps == "Scissors") ||
        (cs == "Paper" && ps == "Rock") ||
        (cs == "Scissors" && ps == "Paper")
    )
    {
        message = "You Lose! " + cs + " beats " + ps;
        game.computerScore = game.computerScore + 1;
    }
    else
    {
        message = "Draw! Try again."
    }
    return message;
}

function restartGame(){
    game.active = true;
    game.computerScore = 0;
    game.playerScore = 0;
    ui.statusDiv.textContent = 'Click a button to play!';
    ui.playerScore.textContent = 'Player : 0';
    ui.computerScore.textContent = 'Computer : 0';
}

function endGame(){
    if (game.playerScore > game.computerScore) ui.statusDiv.textContent = 'Game Over, You win!';
    else ui.statusDiv.textContent = 'Game Over, You Lose!';
    game.active = false;
}

function displayScore(){
    ui.computerScore.textContent = 'Computer : ' + game.computerScore.toString();
    ui.playerScore.textContent = 'Player : ' + game.playerScore.toString();
}

function displayRoundStatus(status){
    ui.statusDiv.textContent = status;
}

const buttons = document.querySelectorAll('.choice-button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => { fullRound(btn.id) });
});

const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener('click', restartGame);