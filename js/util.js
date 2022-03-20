// Функция генерации рандомного числа из заданного диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Проверка на нажатие кнопки Escape, возвращает true/false
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger, isEscapeKey};
