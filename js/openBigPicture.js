import {createDataUsers} from './createArrayUsers.js';
import {addComment} from './commentList.js';
import {isEscapeKey} from './util.js';

// Поиск всех миниатюр
const miniPicture = document.querySelectorAll('.picture');
// Поиск блока с большой фотографией
const bigPicture = document.querySelector('.big-picture');
// Поиск картинки в блоке большой фотографии
const bigPictureImage = bigPicture.querySelector('img');
// Поиск кнопки закрытия в блоке большой фотографии
const cancellButton = bigPicture.querySelector('.cancel');
// Поиск лайков в блоке большой фотографии
const bigPictureLikes = bigPicture.querySelector('.likes-count');
// Поиск комментов в блоке большой фотографии
const bigPictureCommentsСount = bigPicture.querySelector('.comments-count');
// Поиск описания к большой фотографии
const bigPictureDescription = bigPicture.querySelector('.social__caption');

// Закрытие окна с большой фотографией по клику на крестик
cancellButton.addEventListener('click', () => {
  closePopup();
});

// Функция для закрытия окна с большой фотографией по нажатию Escape
const onPopupEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closePopup();
  }
};

// Закрытие и удаление обработчика закрывания
function closePopup () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscapeKeydown);
  clearDataBigPicture();

  // Функция очистки данных у окна с большой фотографией
  function clearDataBigPicture () {
    // Очистка комментариев под фото
    const bigPictureCommentsItem = bigPicture.querySelectorAll('.social__comment');
    for (let j = 0; j < bigPictureCommentsItem.length; j++) {
      bigPictureCommentsItem[j].remove();
    }
    bigPictureLikes.textContent = '';
    bigPictureImage.src = '';
    bigPictureImage.alt = 'Фотография пользователя';
    bigPictureDescription.textContent = '';
  }
}

// Функция открытия большой фотографии
const openBigPicture = function (pictureIndex) {
  // Поиск лайков в миниатюрной картинке для подставляния в большую
  const miniPictureLikes = miniPicture[pictureIndex].querySelector('.picture__likes');
  // Поиск комментов в миниатюрной картинке для подставляния в большую
  const miniPictureComments = miniPicture[pictureIndex].querySelector('.picture__comments');

  // Обработчик по клику на миниатбру для открытия юольшой картинки
  miniPicture[pictureIndex].addEventListener('click', () => {
    // Меняем ссылку картинки
    bigPictureImage.src = `./photos/${  pictureIndex + 1 }.jpg`;
    // Вставляем лайки количественно
    bigPictureLikes.textContent = miniPictureLikes.textContent;
    // Вставляем комменты количественно
    bigPictureCommentsСount.textContent = miniPictureComments.textContent;
    // Вставляем описание к большой фотографии
    bigPictureDescription.textContent = createDataUsers[pictureIndex].description;
    // Снимаем класс hidden для открытия большой картинки
    bigPicture.classList.remove('hidden');
    // Отключаем скролл фона
    document.body.classList.add('modal-open');
    // Функция добавления комментария
    addComment(pictureIndex);
    // Подключение функции закрытия большого окна по нажатию Escape
    document.addEventListener('keydown', onPopupEscapeKeydown);
  });
};

// Цикл для создания функций открытия большой фотографии
for (let i = 0; i < miniPicture.length; i++) {
  openBigPicture(i);
}

// Скрытие .social__comment-count и .comments-loader (Согласно ТЗ по ДЗ 7)
bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');
