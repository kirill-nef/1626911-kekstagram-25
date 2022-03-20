// Модуль для работы с формой

// Импорт функции закрытия окна по escape
import {isEscapeKey} from './util.js';

// Поиск окна выгрузки
const imgUpload = document.querySelector('.img-upload__overlay');
// Поиск кнопки закрытия окна выгрузки
const cancellButton = imgUpload.querySelector('.cancel');
// Инпут с данными
const imgUploadInput = document.querySelector('.img-upload__input');


const textHashtags = document.querySelector('.text__hashtags')
const pristineHashtags = new Pristine(textHashtags);

const textDescription = document.querySelector('.text__hashtags')
const pristineComments = new Pristine(textDescription);

pristineHashtags.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristineHashtags.validate();

  if (isValid) {
    console.log('Валид');
  }
  else {
    console.log('Невалид');
  }
});







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
