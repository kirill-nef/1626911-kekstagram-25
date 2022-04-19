import { getActiveArrayDatum } from './sorting.js';

// Количество первоначально загруженных комментов
const PRELOAD = 5;

// Поиск блока с большой фотографией
const bigPictureSocial = document.querySelector('.big-picture__social');
// Поиск счетчика комментов в блоке большой фотографии
const сommentsСount = bigPictureSocial.querySelector('.comments-count');
const сommentsСountCurrent = bigPictureSocial.querySelector('.comments-count-current');
// Поиск блока комментариев
const commentsList = document.querySelector('.social__comments');
// Поиск в template блок comments
const commentsItem = document.querySelector('#comments').content.querySelector('.social__comment');

// Поиск блока с указанием числа комментариев
const socialCommentCount = bigPictureSocial.querySelector('.social__comment-count');
// Поиск кнопки Загрузить еще
const commentsLoader = bigPictureSocial.querySelector('.comments-loader');

// Текущий индекс фотографии
let currentIndex = '';
// Общее количество комментариев у текущей фотографии
let countComments = '';
// Контроль за выгруженными комментариями
let checkComment = '';

// Индекс начального и конечного числа загрузки комментария
let fromComentsPreload = 0;
let toComentsPreload = PRELOAD;

// Функция установки начальных значений, вызывается при закрытии окна боьшой фотографии
const setDefaultCommentsPreload = () => {
  fromComentsPreload = 0;
  toComentsPreload = PRELOAD;
  checkComment = 0;
};

// Фукция публикации комментов из массива
const postComments = (fromIndex, toIndex) => {
  // Получаем массив комментов
  const element = getActiveArrayDatum()[currentIndex];

  // Публикуем...
  for (let i = fromIndex; i < toIndex; i++) {
    // Делаем полный клон блока комментов
    const taskComments = commentsItem.cloneNode(true);
    // Ищем аватар пользователя в разметке
    const taskCommentsImg = taskComments.querySelector('img');
    // Ищем поле комментария пользователя в разметке
    const taskCommentsText = taskComments.querySelector('p');

    // Берем информацию о пользователе массива и записываем в аватарку
    taskCommentsImg.src = element.comments[i].avatar;
    taskCommentsImg.alt = element.comments[i].name;
    // Вставляем комментарий в разметку
    taskCommentsText.textContent = element.comments[i].message;
    // Публикуем на страницу
    commentsList.appendChild(taskComments);
  }
  // Показываем текущее колличество отображенных комментов
  сommentsСountCurrent.textContent = commentsList.querySelectorAll('.social__comment').length;

  // Обновляем данные в переменных
  checkComment = toComentsPreload + PRELOAD;
  fromComentsPreload = toComentsPreload;

  // Условие, чтобы было невозможно запросить несуществующие комментарии
  toComentsPreload = (countComments > checkComment) ? toComentsPreload = toComentsPreload + PRELOAD : toComentsPreload = countComments;

  if (fromComentsPreload === toComentsPreload) {
    commentsLoader.classList.add('hidden');
  }
};

const loadComments = () => {
  postComments(fromComentsPreload, toComentsPreload);
};

// Обработчик кнопки загруки комментариев
commentsLoader.addEventListener('click', loadComments);

// Включение/отключение счетчика фоток и кнопки загрузки комментариев
const monitorCommentCounters = (pictureIndex) => {
  // Получам данные о текущей картинке и заносим в переменные
  currentIndex = pictureIndex;
  // Получаем из массива нужный элемент и узнаем длину массива с комментами
  const element = getActiveArrayDatum()[currentIndex];
  countComments = element.comments.length;

  if (countComments > PRELOAD) {
    // Включаем показ счетчика
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    // Подставляем число всех коментов в счетчик
    сommentsСount.textContent = countComments;
    // Вызов функции генерации комменатрия при начальном открытии окна
    postComments(fromComentsPreload, toComentsPreload);
  } else {
    // Выключаем показ счетчика
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    // Вызов функции генерации комменатрия при начальном открытии окна
    postComments(fromComentsPreload, countComments);
  }
};

export {monitorCommentCounters, setDefaultCommentsPreload, loadComments};
