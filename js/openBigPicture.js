import {isEscapeKey} from './util.js';
import {PHOTO_DESCRIPTIONS} from './data.js';
import {arrayPicture} from './createArrayPicture.js';
import {counterComment, defaultCommentsPreload} from './downloadComments.js';

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
// Поиск описания к большой фотографии
const bigPictureDescription = bigPictureBlock.querySelector('.social__caption');
// Поиск поля ввода комментариев
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

  defaultCommentsPreload();
}

// Функция открытия большой фотографии
const openBigPicture = function (pictureIndex) {
  // Поиск лайков в миниатюрной картинке для подставляния в большую
  const usersLikes = arrayPicture[pictureIndex].likesCount;

  // Обработчик по клику на миниатюру для открытия большой картинки
  miniPicture[pictureIndex].addEventListener('click', () => {
    // Меняем ссылку картинки
    bigPicture.src = `./photos/${  pictureIndex + 1 }.jpg`;
    // Вставляем лайки количественно
    bigPictureLikes.textContent = usersLikes;
    // Вставляем описание к большой фотографии
    bigPictureDescription.textContent = PHOTO_DESCRIPTIONS[arrayPicture[pictureIndex].descriptionNum];
    // Снимаем класс hidden для открытия большой картинки
    bigPictureBlock.classList.remove('hidden');
    // Отключаем скролл фона
    document.body.classList.add('modal-open');
    // Вызов функции работы с омментариями и их количествами
    counterComment(pictureIndex);
    // Подключение функции закрытия большого окна по нажатию Escape
    document.addEventListener('keydown', onPopupEscapeKeydown);
  });
};

// Цикл для создания функций открытия большой фотографии
for (let i = 0; i < miniPicture.length; i++) {
  openBigPicture(i);
}
