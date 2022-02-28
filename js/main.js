// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
console.log(getRandomPositiveInteger(1, 11));


// Проверка количества символов в комментарии
function checkStringLength (inputString, letterMax) {
  if (inputString.length <= letterMax) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('string to test', 140);

