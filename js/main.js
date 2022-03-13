// Функции создания рандомных пользователей пользователей (Имя/коммент/аватар и тд)
import {createArrayUsers} from './createArrayUsers.js';
// Функция создания миниатюр на странице
import {renderingThumbnails} from './renderingThumbnails.js';
// Функция проверки длины комментария
import {checkStringLength} from './checkStringLength.js';
// Функция получения рандомного числа
import {getRandomPositiveInteger} from './getRandomPositiveInteger.js';


// Вызов функции создания рандомных пользователей
createArrayUsers(25);

// Вызов функции создания миниатюр на главной странице
const THUMBNAILS = 25;
for (let i = 1; i < THUMBNAILS + 1; i++) {
  const IMG = `./photos/${  i  }.jpg`;
  const COMMENTS = getRandomPositiveInteger(1, 25);
  const LIKES = getRandomPositiveInteger(100, 500);
  renderingThumbnails(IMG, COMMENTS, LIKES);
}

// Вызов функции проверки длины комментария
checkStringLength('Test', 18);

