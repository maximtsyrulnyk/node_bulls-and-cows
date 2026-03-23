const readline = require('readline-sync');
const { generateSecretNumber } = require('./modules/generateSecretNumber');
const checkIsValidUserInput = require('./modules/checkIsValidUserInput');
const { checkIsRepeated } = require('./modules/checkIsRepeated');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

function startGame() {
  const secret = generateSecretNumber();
  let isGuessed = false;

  // console.log('Welcome to Bulls and Cows!');

  while (!isGuessed) {
    const input = readline.question('Enter your 4-digit guess: ');

    if (!checkIsValidUserInput(input) || checkIsRepeated(input)) {
      // eslint-disable-next-line
      console.error('Error: input must be a 4-digit number with unique digits.');
      continue;
    }

    const { bulls } = getBullsAndCows(secret, input);

    if (bulls === 4) {
      // console.log(`Congratulations! You guessed the number: ${secret}`);
      isGuessed = true;
    } else {
      // console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    }
  }
}

startGame();
