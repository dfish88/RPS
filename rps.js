const score = { player : 0, computer : 0};

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
        score['player'] = score['player'] + 1;
    }
    else if(
        (cs == "Rock" && ps == "Scissors") ||
        (cs == "Paper" && ps == "Rock") ||
        (cs == "Scissors" && ps == "Paper")
    )
    {
        message = "You Lose! " + cs + " beats " + ps;
        score['computer'] = score['computer'] + 1;
    }
    else
    {
        message = "Draw! Try again."
    }
    return message;
}

function displayScore(){
    const computerScore = document.querySelector('.computer-score');
    const playerScore = document.querySelector('.player-score');

    computerScore.textContent = 'Computer : ' + score['computer'].toString();
    playerScore.textContent = 'Player : ' + score['player'].toString();
}

function displayRoundStatus(status){
    const statusDiv = document.querySelector('.round-outcome');
    statusDiv.textContent = status;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let roundStatus = playRound(btn.id, getComputerChoice());
        displayRoundStatus(roundStatus);
        displayScore();
    });
});