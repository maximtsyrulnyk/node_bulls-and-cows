/**
 * @param {string} userInput
 * @returns {boolean}
 */
function checkIsValidUserInput(userInput) {
  const fourDigitsRegex = /^[0-9]{4}$/;

  // Перевіряємо оригінальний рядок, а не число,
  // щоб не втратити нуль на початку (наприклад '0123')
  if (!fourDigitsRegex.test(userInput)) {
    return false;
  }

  return true;
}

module.exports = checkIsValidUserInput;
