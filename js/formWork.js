// Модуль для работы с формой

// Импорт функции закрытия окна по escape
import {isEscapeKey} from './util.js';
import './formWorkValidation.js';
import './formWorkScale.js';

// Поиск окна выгрузки
const imgUpload = document.querySelector('.img-upload__overlay');
// Поиск кнопки закрытия окна выгрузки
const cancellButton = imgUpload.querySelector('.cancel');
// Инпут с данными
const imgUploadInput = document.querySelector('.img-upload__input');

const fieldHashtags = document.querySelector('.text__hashtags');
const fieldComment = document.querySelector('.text__description');

// Функция для закрытия окна с большой фотографией по нажатию Escape
const onPopupEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && evt.target !== fieldHashtags && evt.target !== fieldComment) {
    evt.preventDefault();
    closePopup();
  }
};

// Удаление обработчика функции закрытия по Escape
function closePopup () {
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscapeKeydown);
  imgUploadInput.value = '';
}

// Функция закрытия окна выгрузки по крестику
cancellButton.addEventListener('click', () => {
  closePopup();
});

// Открытие окна выгрузки при изменении инпута
imgUploadInput.onchange = function() {
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Подключение функции закрытия большого окна по нажатию Escape
  document.addEventListener('keydown', onPopupEscapeKeydown);
};
