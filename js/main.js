// Вывод рандомного числа, взято с ресурса:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  max = Math.floor(max + 1)
  min = Math.ceil(min)

  if (max < min) {
    max = Math.floor(max - 1)
    min = Math.ceil(min + 1)
  }

  return Math.floor(Math.random() * (max - min)) + min
}
console.log(getRandomInt(10, 10))

// Посчитать длину текста
const letterMax = 140
var letter = document.querySelector(".test-js").textContent.length

if (letter < letterMax) {
  console.log("Длина вашего комментария " + letter + "/" + letterMax)

} else {
  console.log("Вы привысили максимальную длину комментария " + letter + "/" + letterMax)
}
