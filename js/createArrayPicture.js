// Функция получения рандомного числа
import { getRandomPositiveInteger } from './util.js';
import { USERS_NAMES, USERS_COMMENTS, PHOTO_DESCRIPTIONS } from './data.js';

// Количество фотографий
const quantity = 25;

// Создание массива фотографий
const arrayPicture = [];
const createPicture = (index) => {
  for (let i = 0; i <= index - 1; i++) {
    // Создание объекта в массиве
    arrayPicture[i] = {};
    // Ссылка на фото
    arrayPicture[i].src = `photos/${  i + 1  }.jpg`;
    // Количество лайков у фото
    arrayPicture[i].likesCount = getRandomPositiveInteger(15, 200);
    // Описание фотографии (получаем любое описание из data.js)
    arrayPicture[i].descriptionNum = getRandomPositiveInteger(0, PHOTO_DESCRIPTIONS.length - 1);
    // Колличество комментариев у фото
    arrayPicture[i].commentsCount = getRandomPositiveInteger(4, 22);

    // Из полученного числа комментариев в массив занесем порядковые номера рандомных коменатриев из data.js
    arrayPicture[i].commentsArr = [];
    for (let j = 0; j < arrayPicture[i].commentsCount; j++) {
      arrayPicture[i].commentsArr[j] = {};
      arrayPicture[i].commentsArr[j].user = getRandomPositiveInteger(0, USERS_NAMES.length - 1);
      arrayPicture[i].commentsArr[j].comment = getRandomPositiveInteger(0, USERS_COMMENTS.length - 1);
    }
  }
};

createPicture(quantity);

export {arrayPicture};
