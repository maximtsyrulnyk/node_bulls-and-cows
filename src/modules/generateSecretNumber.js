/**
 * @returns {string}
 */
function generateSecretNumber() {
  const digits = [];

  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10).toString();

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  return digits.join('');
}

module.exports = { generateSecretNumber };
