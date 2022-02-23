// Вывод рандомного числа, взято с ресурса:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  max = Math.floor(max + 1);
  min = Math.ceil(min);

  if (max < min) {
    max = Math.floor(max - 1);
    min = Math.ceil(min + 1);
  }

  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(10, 100);

// Проверка количества символов в комментарии
function checkStringLength (inputString, letterMax) {
  if (inputString.length <= letterMax) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('string to test', 140);
