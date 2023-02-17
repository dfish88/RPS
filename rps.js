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
    var winner = "";

    if( 
        (ps == "Rock" && cs == "Scissors") ||
        (ps == "Paper" && cs == "Rock") ||
        (ps == "Scissors" && cs == "Paper")
    )
    {
        message = "You Win! " + ps + " beats " + cs;
        winner = "Player";
    }
    else if(
        (cs == "Rock" && ps == "Scissors") ||
        (cs == "Paper" && ps == "Rock") ||
        (cs == "Scissors" && ps == "Paper")
    )
    {
        message = "You Lose! " + cs + " beats " + ps;
        winner = "Computer";
    }
    else
    {
        message = "Draw! Try again."
        winner = "";
    }
    return message;
}

function displayStatus(status){
    const statusDiv = document.querySelector('.game-status');
    statusDiv.textContent = status;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let gameStatus = playRound(btn.id, getComputerChoice());
        displayStatus(gameStatus);
    });
});