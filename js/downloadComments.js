import {createDataUsers} from './createArrayUsers.js';
import {arrayPicture} from './createArrayPicture.js';
import {USERS_COMMENTS} from './data.js';

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
const countPreload = 2;
// Индекс начального и конечного числа загрузки комментария
let minComentsPreload = 0;
let maxComentsPreload = countPreload;

// Поиск кнопки загрузки комментов
const buttonDownloadClick = document.querySelector('.comments-loader');

// Функция установки начальных значений, вызывается при закрытии окна боьшой фотографии
function defaultCommentsPreload () {
  minComentsPreload = 0;
  maxComentsPreload = countPreload;
}

// Функция подкачки 5(countPreload) комментариев
function downloadComments (pictureIndex) {
  // Создание обработчика на клик
  buttonDownloadClick.addEventListener('click', () => {

    // Число, которое получится после нажатия на кнопку
    const lengthComments = maxComentsPreload + countPreload;
    // Длина комментариев в массиве
    const lengthArrComments = arrayPicture[pictureIndex].commentsArr.length;

    minComentsPreload = minComentsPreload + countPreload;

    // Если число привысит количество в массиве
    if (lengthComments > lengthArrComments) {
      maxComentsPreload = lengthArrComments;
    }
    else {
      maxComentsPreload = maxComentsPreload + countPreload;
    }

    loaderComment(pictureIndex, minComentsPreload, maxComentsPreload);
  });
}

// Включение/отключение счетчика фоток и кнопки загрузки комментариев
function counterComment (pictureIndex) {
  // Общее количество комментариев
  const count = arrayPicture[pictureIndex].commentsCount;
  // Поиск блока с указанием числа комментариев
  const socialCommentCount = bigPictureSocial.querySelector('.social__comment-count');
  // Поиск кнопки Загрузить еще
  const commentsLoader = bigPictureSocial.querySelector('.comments-loader');

  if (count > countPreload) {
    // Включаем показ счетчика
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    // Подключение функции докачки комментариев
    downloadComments(pictureIndex);
    // Подставляем число видимых фотографий
    сommentsСountcurrent.textContent = countPreload;
    // Подставляем число всех коментов в счетчик
    сommentsСount.textContent = count;
    // Вызов функции генерации комменатрия при начальном открытии окна
    loaderComment(pictureIndex, minComentsPreload, maxComentsPreload);
  } else {
    // Выключаем показ счетчика
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    // Вызов функции генерации комменатрия при начальном открытии окна
    loaderComment(pictureIndex, minComentsPreload, count);
  }
}

// Фукция публикации комментов из массива
function loaderComment (pictureIndex, fromIndex, toIndex) {
  for (let i = fromIndex; i < toIndex; i++) {
    // Делаем полный клон блока комментов
    const taskComments = commentsItem.cloneNode(true);
    // Ищем аватар пользователя в разметке
    const taskCommentsImg = taskComments.querySelector('img');
    // Ищем поле комментария пользователя в разметке
    const taskCommentsText = taskComments.querySelector('p');
    // Получаем уникальные сопоставленные номера user + commen сгенерированные для каждой картинки
    const currentUser = arrayPicture[pictureIndex].commentsArr[i].user;
    const currentComment = arrayPicture[pictureIndex].commentsArr[i].comment;
    // Берем информацию о пользователе из data.js и записываем в аватарку
    taskCommentsImg.src = createDataUsers[currentUser].avatar;
    taskCommentsImg.alt = createDataUsers[currentUser].name;
    // Вставляем комментарий в разметку
    taskCommentsText.textContent = USERS_COMMENTS[currentComment];
    // Публикуем на страницу
    commentsList.appendChild(taskComments);
    // Функция подкачки фотографи
  }
}

export {counterComment, defaultCommentsPreload};
