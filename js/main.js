// 1 Функция создания рандомных пользователей пользователей (Имя/коммент/аватар и тд)
import './createArrayUsers.js';
// 2 Функция создания миниатюр на странице
import './renderingThumbnails.js';
// 3 Функция проверки длины комментария
import {checkStringLength} from './checkStringLength.js';
// 4 Функция получения рандомного числа
import {getRandomPositiveInteger} from './getRandomPositiveInteger.js';
// 5 Функция открытия большой картинки
import './openBigPicture.js';


// 3 Вызов Функции проверки длины комментария
checkStringLength('Test', 18);

// 4 Вызов Функции получения рандомного числа
getRandomPositiveInteger(0, 500);
