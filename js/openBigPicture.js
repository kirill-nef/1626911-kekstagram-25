import {isEscapeKey} from './util.js';
import {getActiveArrayDatum} from './sorting.js';
import {monitorCommentCounters, setDefaultCommentsPreload} from './loadComments.js';

// Поиск блока с большой фотографией
const bigPictureBlock = document.querySelector('.big-picture');
// Поиск картинки в блоке большой фотографии
const bigPicture = bigPictureBlock.querySelector('img');
// Поиск лайков в блоке большой фотографии
const bigPictureLikes = bigPictureBlock.querySelector('.likes-count');
// Поиск описания к большой фотографии
const bigPictureDescription = bigPictureBlock.querySelector('.social__caption');
// Поиск поля ввода комментариев
const fieldComments = document.querySelector('.social__footer-text');
// Поиск кнопки закрытия в блоке большой фотографии
const cancellButtonPicture = document.getElementById('picture-cancel');

// Функция очистки данных у окна с большой фотографией
const clearDataBigPicture = () => {
  // Очистка комментариев под фото
  bigPictureBlock.querySelector('.social__comments').innerHTML = '';

  bigPictureLikes.textContent = '';
  bigPicture.src = '';
  bigPicture.alt = 'Фотография пользователя';
  bigPictureDescription.textContent = '';
};

// Закрытие и удаление обработчика закрывания
const closePopupPicture = () => {
  bigPictureBlock.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearDataBigPicture();
  setDefaultCommentsPreload();
};

// Функция для закрытия окна с большой фотографией по нажатию Escape
const onPopupEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && evt.target !== fieldComments) {
    closePopupPicture();
    document.removeEventListener('keydown', onPopupEscapeKeydown);
  }
};

// Функция открытия большой фотографии вызывается при клике из функции renderingTh....
const openBigPicture = (index) => {
  const element = getActiveArrayDatum()[index];
  // Меняем ссылку картинки
  bigPicture.src = `${element.url}`;
  // Вставляем лайки
  bigPictureLikes.textContent = element.likes;
  // Вставляем описание к большой фотографии
  bigPictureDescription.textContent = element.description;
  // Снимаем класс hidden для открытия большой картинки
  bigPictureBlock.classList.remove('hidden');
  // Отключаем скролл фона
  document.body.classList.add('modal-open');
  // Вызов функции работы с комментариями и их количествами
  monitorCommentCounters(index);
  // Подключение функции закрытия большого окна по нажатию Escape
  document.addEventListener('keydown', onPopupEscapeKeydown);
};

// Закрытие окна с большой фотографией по клику на крестик
cancellButtonPicture.addEventListener('click', () => {
  closePopupPicture();
  document.removeEventListener('click', cancellButtonPicture);
});

export {openBigPicture};
