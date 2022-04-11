import {photoDataArray} from './main.js';

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
const сommentsСountCurrent = bigPictureSocial.querySelector('.comments-count-current');
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

// Функция установки начальных значений, вызывается при закрытии окна боьшой фотографии
function defaultCommentsPreload () {
  fromComentsPreload = 0;
  toComentsPreload = countPreload;
  checkComment = 0;
}

// Обработчик кнопки загруки комментариев
commentsLoader.addEventListener('click', () => {
  loaderComment(fromComentsPreload, toComentsPreload);
});

// Включение/отключение счетчика фоток и кнопки загрузки комментариев
function counterComment (pictureIndex) {
  // Получам данные и заносим в переменные
  currentIndex = pictureIndex;
  countComments = photoDataArray[currentIndex].comments.length;

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

    // Берем информацию о пользователе массива и записываем в аватарку
    taskCommentsImg.src = photoDataArray[currentIndex].comments[i].avatar;
    taskCommentsImg.alt = photoDataArray[currentIndex].comments[i].name;
    // Вставляем комментарий в разметку
    taskCommentsText.textContent = photoDataArray[currentIndex].comments[i].message;
    // Публикуем на страницу
    commentsList.appendChild(taskComments);
  }
  // Показываем текущее колличество отображенных комментов
  сommentsСountCurrent.textContent = commentsList.querySelectorAll('.social__comment').length;

  // Обновляем данные в переменных
  checkComment = toComentsPreload + countPreload;
  fromComentsPreload = toComentsPreload;

  // Условие, чтобы было невозможно запросить несуществующие комментарии
  if (countComments > checkComment) {
    toComentsPreload = toComentsPreload + countPreload;
  }
  else {
    toComentsPreload = countComments;
  }
  if (fromComentsPreload === toComentsPreload) {
    commentsLoader.classList.add('hidden');
  }
}

export {counterComment, defaultCommentsPreload};
