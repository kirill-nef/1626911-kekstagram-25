import {isEscapeKey} from './util.js';
import {PHOTO_DESCRIPTIONS, USERS_COMMENTS} from './data.js';
import {arrayPicture} from './createArrayPicture.js';
import {createDataUsers} from './createArrayUsers.js';
import {downloadComments} from './downloadComments.js';

// Поиск всех миниатюр
const miniPicture = document.querySelectorAll('.picture');
// Поиск блока с большой фотографией
const bigPictureBlock = document.querySelector('.big-picture');
// Поиск картинки в блоке большой фотографии
const bigPicture = bigPictureBlock.querySelector('img');
// Поиск кнопки закрытия в блоке большой фотографии
const cancellButton = bigPictureBlock.querySelector('.cancel');
// Поиск лайков в блоке большой фотографии
const bigPictureLikes = bigPictureBlock.querySelector('.likes-count');
// Поиск комментов в блоке большой фотографии
const bigPictureCommentsСount = bigPictureBlock.querySelector('.comments-count');
// Поиск описания к большой фотографии
const bigPictureDescription = bigPictureBlock.querySelector('.social__caption');
// Поиск поля комментариев
const fieldComments = document.querySelector('.social__footer-text');

// Закрытие окна с большой фотографией по клику на крестик
cancellButton.addEventListener('click', () => {
  closePopup();
});

// Функция для закрытия окна с большой фотографией по нажатию Escape
const onPopupEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && evt.target !== fieldComments) {
    closePopup();
  }
};

// Закрытие и удаление обработчика закрывания
function closePopup () {
  bigPictureBlock.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscapeKeydown);
  clearDataBigPicture();

  // Функция очистки данных у окна с большой фотографией
  function clearDataBigPicture () {
    // Очистка комментариев под фото
    const bigPictureCommentsItem = bigPictureBlock.querySelectorAll('.social__comment');
    for (let j = 0; j < bigPictureCommentsItem.length; j++) {
      bigPictureCommentsItem[j].remove();
    }
    bigPictureLikes.textContent = '';
    bigPicture.src = '';
    bigPicture.alt = 'Фотография пользователя';
    bigPictureDescription.textContent = '';
  }
}


function counterComment (count) {
  const socialCommentCount = bigPictureBlock.querySelector('.social__comment-count');
  const commentsLoader = bigPictureBlock.querySelector('.comments-loader');

  if (count > 5) {
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
  } else {
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
}

// Поиск блока комментариев
const commentsList = document.querySelector('.social__comments');
// Поиск в template блок comments
const commentsItem = document.querySelector('#comments').content.querySelector('.social__comment');

// Функция открытия большой фотографии
const openBigPicture = function (pictureIndex) {
  // Поиск лайков в миниатюрной картинке для подставляния в большую
  const miniPictureLikes = miniPicture[pictureIndex].querySelector('.picture__likes');
  // Поиск комментов в миниатюрной картинке для подставляния в большую
  const miniPictureComments = miniPicture[pictureIndex].querySelector('.picture__comments');

  // Обработчик по клику на миниатюру для открытия большой картинки
  miniPicture[pictureIndex].addEventListener('click', () => {
    // Меняем ссылку картинки
    bigPicture.src = `./photos/${  pictureIndex + 1 }.jpg`;
    // Вставляем лайки количественно
    bigPictureLikes.textContent = miniPictureLikes.textContent;
    // Вставляем комменты количественно
    bigPictureCommentsСount.textContent = miniPictureComments.textContent;
    // Вставляем описание к большой фотографии
    bigPictureDescription.textContent = PHOTO_DESCRIPTIONS[arrayPicture[pictureIndex].descriptionNum];
    // Снимаем класс hidden для открытия большой картинки
    bigPictureBlock.classList.remove('hidden');
    // Отключаем скролл фона
    document.body.classList.add('modal-open');

    // Процедура публикации комментариев для фотографии //
    // Получам длину массива всех комментариев у данной фотографии
    const currentArrLength = arrayPicture[pictureIndex].commentsArr.length;

    for (let i = 0; i < currentArrLength; i++) {
      // Делаем полный клон блока
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
      // Функция счета комментариев, при необходимости появится кнопка подгрузки
      counterComment(bigPictureCommentsСount.textContent);
      // Функция подкачки фотографи
      downloadComments();
    }
    // Подключение функции закрытия большого окна по нажатию Escape
    document.addEventListener('keydown', onPopupEscapeKeydown);
  });
};

// Цикл для создания функций открытия большой фотографии
for (let i = 0; i < miniPicture.length; i++) {
  openBigPicture(i);
}
