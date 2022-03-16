import {createDataUsers} from './createArrayUsers.js';
import {addComment} from './commentList.js';

// Поиск всех миниатюр
const miniPicture = document.querySelectorAll('.picture');
// Поиск блока с большой фотографией
const bigPicture = document.querySelector('.big-picture');
// Поиск картинки в блоке большой фотографии
const bigPictureSrc = bigPicture.querySelector('img');
// Поиск кнопки закрытия в блоке большой фотографии
const cancellButton = bigPicture.querySelector('.big-picture__cancel');
// Поиск лайков в блоке большой фотографии
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
// Поиск описания к большой фотографии
const bigPictureDescription = bigPicture.querySelector('.social__caption');
// Поиск body
const body = document.querySelector('body');

// Функция открытия большой фотографии
const openBigPicture = function (numberPicture) {
  // Поиск лайков в миниатюрной картинке для подставляния в большую
  const miniPictureLikes = miniPicture[numberPicture].querySelector('.picture__likes');
  // Поиск комментов в миниатюрной картинке для подставляния в большую
  const miniPictureComments = miniPicture[numberPicture].querySelector('.picture__comments');

  // Обработчик по клику на миниатбру
  miniPicture[numberPicture].addEventListener('click', () => {
    // Меняем ссылку картинки
    bigPictureSrc.src = `./photos/${  numberPicture + 1 }.jpg`;
    // Вставляем лайки количественно
    bigPictureLikes.textContent = (miniPictureLikes.textContent);
    // Вставляем комменты количественно
    bigPictureComments.textContent = (miniPictureComments.textContent);
    // Вставляем описание к большой фотографии
    bigPictureDescription.textContent = (createDataUsers[numberPicture].description);
    // Снимаем класс hidden для открытия большой картинки
    bigPicture.classList.remove('hidden');
    // Отключаем скролл фона
    body.classList.add('modal-open');
    // Функция добавления комментария
    addComment(numberPicture);
  });
};

// Цикл для создания функций открытия большой фотографии
for (let i = 0; i < miniPicture.length; i++) {
  openBigPicture(i);
}

// Закрытие окна с большой фотографией по крестику
cancellButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

// Закрытие окна с большой фотографией по крестику по ESC
window.onkeydown = function(event) {
  if (event.keyCode === 27) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

// Скрытие .social__comment-count и .comments-loader
bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');
