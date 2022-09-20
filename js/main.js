function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max < min) {
    return new Error('Invalid arguments');
  }
  if (min === max) {
    return min;
  }
  return Math.random() * (max - min) + min;
}

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

getRandomNumber(1, 3);
checkStringLength('Строка', 6);
