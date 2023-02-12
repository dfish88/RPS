const choices = { 0 : "Rock", 1 : "Paper", 2 : "Scissors"}

function getComputerChoice()
{
    var choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

console.log(getComputerChoice());