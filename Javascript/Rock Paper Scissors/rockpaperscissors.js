

console.log('hi');

const getUserChoice = (userInput) => {
  const userInputLower = userInput.toLowerCase();
  const allowedChoices = ['rock', 'paper', 'scissors'];
  if (allowedChoices.includes(userInputLower)) {
    return userInputLower;
  } else {
    console.log('Invalid input. Please choose rock, paper, or scissors.');
    return null;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      console.log('Error: Invalid computer choice');
      return null;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  // Determine the winner based on the game rules
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
};

let userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
if (userChoice !== null) {
  const result = determineWinner(userChoice, computerChoice);
  console.log(result); // Output: You win!, Computer wins!, or It's a tie!
} else {
  console.log('Invalid user input. Please try again.');
}