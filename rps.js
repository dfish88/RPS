const choices = { 0 : "Rock", 1 : "Paper", 2 : "Scissors"}

function getComputerChoice()
{
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
    return { winner : winner, message : message};
}

function game()
{
    var playerWins = 0;
    var computerWins = 0;

    for(let i = 0; i < 5; i++)
    {
        var playerMove = prompt("Enter your move: ");
        var computerMove = getComputerChoice();
        var result = playRound(playerMove, computerMove);

        if (result.winner == "Player")
            playerWins++;
        else if(result.winner == "Computer")
            computerWins++;

        console.log(result.message);
    }

    if (playerWins > computerWins)
    {
        console.log("You Win!");
    }
    else if (computerWins > playerWins)
    {
        console.log("You Lose!");
    }
    else
    {
        console.log("Draw!");
    }

    console.log("Final score is Player : " + playerWins.toString() + " Computer : " + computerWins.toString());

}

game();