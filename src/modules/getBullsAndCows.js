/**
 * @param {string} itemToCheck
 * @param {number} index
 * @param {string} wholeNumber
 * @returns {boolean}
 */
function checkIsBull(itemToCheck, index, wholeNumber) {
  const wholeNumberDigits = wholeNumber.split('');

  if (wholeNumberDigits[index] === itemToCheck) {
    return true;
  }

  return false;
}

function getBullsAndCows(secret, guess) {
  let bulls = 0;
  let cows = 0;
  const secretArray = secret.split('');
  const guessArray = guess.split('');

  guessArray.forEach((digit, index) => {
    if (checkIsBull(digit, index, secret)) {
      bulls++;
    } else if (secretArray.includes(digit)) {
      cows++;
    }
  });

  return { bulls, cows };
}

module.exports = { getBullsAndCows };
