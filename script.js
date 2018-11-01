let winner;
let result = 0;
for (i=0; i<=5; i++)
{
roundScore = turn();
result = result + roundScore;
}
result > 0 ? console.log('You Win!') : console.log('You Lose!'); 
function computerPlay() 
// Obtains the computers random answer
{
  const rand = Math.floor(Math.random() * (3));

  switch (rand) {
    case 0:
      return 'Rock';
    case 1:
      return 'Scissors';
    case 2:
      return 'Paper';
    default:
      break;
  }
}
function playerPlay()
//Obtains the answer from the user
{
  let playerChoice = prompt('Please enter your choice: Rock, Paper, Or Scissors?').toLowerCase();
  switch (playerChoice) 
  {
    case 'rock':
    return 'Rock';
  case 'scissors':
    return 'Scissors';
  case 'paper':
    return 'Paper';
  
    default:
    console.log('i dont think ' + playerChoice + ' was an option, lets try again...');
    playerPlay();
  }
}

function turn()
{

  let computerAnswer = computerPlay();
  let playerAnswer = playerPlay();

  //Tie Test first
  if (playerAnswer == computerAnswer)
  {
    console.log('Tie!');
    return 0;
  }
  //Player answers rock
  if (playerAnswer == 'Rock') 
  {
    if (computerAnswer == 'Paper')
    {
      console.log('Paper beats Rock, sorry!');
      return -1;
    }  
    if (computerAnswer == 'Scissors')
    {
      console.log('Rock beats Scissors, you win!');
      return 1;
    }  
  }

  //Player answers Scissors
  if (playerAnswer == 'Scissors') 
  {
    if (computerAnswer == 'Rock')
    {
      console.log('Rock beats Scissors, sorry!');
      return -1;
    }  
    if (computerAnswer == 'Paper')
    {
      console.log('Scissors beats paper , you win!');
      return 1;
    }  
  }

//Player answers Paper
if (playerAnswer == 'Paper') 
{
  if (computerAnswer == 'Scissors')
  {
    console.log('Scissors beats Paper, sorry!');
    return -1;
  }  
  if (computerAnswer == 'Paper')
  {
    console.log('Scissors beats Paper, you win!');
    return 1;
  }  
}
  
}