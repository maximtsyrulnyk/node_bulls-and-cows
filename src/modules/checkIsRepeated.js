/**
 * @param {string} input
 * @returns {boolean}
 */
function checkIsRepeated(input) {
  const digits = input.split('');
  const uniqueDigits = new Set(digits);

  return uniqueDigits.size !== digits.length;
}

module.exports = { checkIsRepeated };
