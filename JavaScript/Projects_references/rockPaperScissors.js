const getUserChoice = (userInput) => {
  const userInputLower = userInput.toLowerCase();
  if (userInputLower == 'rock' || userInputLower == 'paper' || userInputLower == 'scissors' || userInputLower == 'bomb') {
    return userInputLower;
  } else {
    console.log('Invalid selection! Chose one of the following: Rock, Paper, or Scissors.')
  }
}

function getComputerChoice() {
  const computerSelectNum = Math.floor(Math.random() * 4);
  if(computerSelectNum == 0) {
    return 'rock';
  } else if (computerSelectNum == 1) {
    return 'paper';
  } else if (computerSelectNum == 2) {
    return 'scissors'
  } else if (computerSelectNum == 3) {
    return 'bomb';
  } else {
    console.log('computer error, please reload.')
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice == 'bomb') {
    return ('Boom! You found the secret to always win!'); 
  }
  if(computerChoice == 'bomb') {
    return ('You lose! The computer figured out how to use bombs!');
  }
  if(userChoice == computerChoice) {
    return 'This match is a tie!'; 
  } if(userChoice == 'rock') {
    if(computerChoice == 'paper') {
      return ('You lose!')
    } else {
      return ('You Win!')
    }
  } if(userChoice == 'paper') {
    if(computerChoice == 'scissors') {
      return ('You lose!')
    } else {
      return ('You Win!')
    }
  } if(userChoice == 'scissors') {
    if(computerChoice == 'rock') {
      return ('You lose!')
    } else {
      return ('You Win!')
    }
  }
}

 function playGame() {
  const userChoice = getUserChoice('paper'); // You can change this to 'rock', 'paper', 'scissors', or 'bomb' to test different scenarios
  console.log(`User Choice: ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
 }
playGame();

