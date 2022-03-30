import {createDataUsers} from './createArrayUsers.js';
import {arrayPicture} from './createArrayPicture.js';
import {USERS_COMMENTS} from './data.js';

// Текущий индекс фотографии
let currentIndex = '';
// Общее количество комментариев у текущей фотографии
let countComments = '';
// Контроль за выгруженными комментариями
let checkComment = '';

// Поиск блока с большой фотографией
const bigPictureSocial = document.querySelector('.big-picture__social');
// Поиск счетчика комментов в блоке большой фотографии
const сommentsСount = bigPictureSocial.querySelector('.comments-count');
const сommentsСountcurrent = bigPictureSocial.querySelector('.comments-count-current');
// Поиск блока комментариев
const commentsList = document.querySelector('.social__comments');
// Поиск в template блок comments
const commentsItem = document.querySelector('#comments').content.querySelector('.social__comment');
// Количество первоначально загруженных комментов
const countPreload = 5;

// Поиск блока с указанием числа комментариев
const socialCommentCount = bigPictureSocial.querySelector('.social__comment-count');
// Поиск кнопки Загрузить еще
const commentsLoader = bigPictureSocial.querySelector('.comments-loader');

// Индекс начального и конечного числа загрузки комментария
let fromComentsPreload = 0;
let toComentsPreload = countPreload;

// Поиск кнопки загрузки комментов
const buttonDownloadClick = document.querySelector('.comments-loader');

// Функция установки начальных значений, вызывается при закрытии окна боьшой фотографии
function defaultCommentsPreload () {
  fromComentsPreload = 0;
  toComentsPreload = countPreload;
  checkComment = 0;
}

// Обработчик кнопки загруки комментариев
buttonDownloadClick.addEventListener('click', () => {
  loaderComment(fromComentsPreload, toComentsPreload);
});

// Включение/отключение счетчика фоток и кнопки загрузки комментариев
function counterComment (pictureIndex) {
  // Получам данные и заносим в переменные
  currentIndex = pictureIndex;
  countComments = arrayPicture[currentIndex].commentsCount;

  if (countComments > countPreload) {
    // Включаем показ счетчика
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    // Подставляем число всех коментов в счетчик
    сommentsСount.textContent = countComments;
    // Вызов функции генерации комменатрия при начальном открытии окна
    loaderComment(fromComentsPreload, toComentsPreload);
  } else {
    // Выключаем показ счетчика
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    // Вызов функции генерации комменатрия при начальном открытии окна
    loaderComment(fromComentsPreload, countComments);
  }
}

// Фукция публикации комментов из массива
function loaderComment (fromIndex, toIndex) {
  for (let i = fromIndex; i < toIndex; i++) {
    // Делаем полный клон блока комментов
    const taskComments = commentsItem.cloneNode(true);
    // Ищем аватар пользователя в разметке
    const taskCommentsImg = taskComments.querySelector('img');
    // Ищем поле комментария пользователя в разметке
    const taskCommentsText = taskComments.querySelector('p');
    // Получаем уникальные сопоставленные номера user + commen сгенерированные для каждой картинки
    const currentUser = arrayPicture[currentIndex].commentsArr[i].user;
    const currentComment = arrayPicture[currentIndex].commentsArr[i].comment;
    // Берем информацию о пользователе из data.js и записываем в аватарку
    taskCommentsImg.src = createDataUsers[currentUser].avatar;
    taskCommentsImg.alt = createDataUsers[currentUser].name;
    // Вставляем комментарий в разметку
    taskCommentsText.textContent = USERS_COMMENTS[currentComment];
    // Публикуем на страницу
    commentsList.appendChild(taskComments);
  }


  сommentsСountcurrent.textContent = commentsList.querySelectorAll('.social__comment').length;

  // console.log(countComments + ' длина общая');
  // console.log(fromIndex + ' ' + toIndex + ' поступившие индексы');

  // Обновляем данные в переменных
  checkComment = toComentsPreload + countPreload;
  fromComentsPreload = toComentsPreload;

  if (countComments > checkComment) {
    toComentsPreload = toComentsPreload + countPreload;
  }
  else {
    toComentsPreload = countComments;
  }

  if (fromComentsPreload === toComentsPreload) {
    bigPictureSocial.querySelector('.comments-loader').classList.add('hidden');
  }

  // console.log(fromComentsPreload + ' ' + toComentsPreload + ' выходные индексы');

}

export {counterComment, defaultCommentsPreload};
