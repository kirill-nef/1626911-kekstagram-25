// Функции создания рандомных пользователей пользователей (Имя/коммент/аватар и тд)
import {createArrayUsers} from './Users-create.js';
// Функция создания миниатюр на странице
import {renderingThumbnails} from './renderingThumbnails.js';
// Функция проверки длины комментария
import {checkStringLength} from './checkStringLength.js';

// Вызов функции создания миниатюр на главной странице
renderingThumbnails('/photos/1.jpg', 'comments', '777');
// Вызов функции создания рандомных пользователей
createArrayUsers(25);
// Вызов функции проверки длины комментария
checkStringLength('Test', 18);

