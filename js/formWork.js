// Модуль для работы с формой

// Импорт функции закрытия окна по escape
import {isEscapeKey} from './util.js';
import './formWorkValidation.js';

// Поиск окна выгрузки
const imgUpload = document.querySelector('.img-upload__overlay');
// Поиск кнопки закрытия окна выгрузки
const cancellButton = imgUpload.querySelector('.cancel');
// Инпут с данными
const imgUploadInput = document.querySelector('.img-upload__input');

// Функция для закрытия окна с большой фотографией по нажатию Escape
const onPopupEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgUpload.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closePopup();
  }
};

// Удаление обработчика функции закрытия по Escape
function closePopup () {
  document.removeEventListener('keydown', onPopupEscapeKeydown);
}

// Функция закрытия окна выгрузки по крестику
cancellButton.addEventListener('click', () => {
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

// Открытие окна выгрузки при изменении инпута
imgUploadInput.onchange = function() {
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Подключение функции закрытия большого окна по нажатию Escape
  document.addEventListener('keydown', onPopupEscapeKeydown);
};
