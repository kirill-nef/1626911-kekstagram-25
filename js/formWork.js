// Модуль для работы с формой

// Импорт функции закрытия окна по escape
import {isEscapeKey} from './util.js';
// Закрытие слайдера
import  {closeSlider} from './formWorkSlider.js';
// Поля вывода ошибок по инпутам
import  {fieldComment, fieldHashtags, setUserForSubmit} from './formWorkValidation.js';

// Значение слайдера по умолчанию
const DEFAUL_VALUE_SCALE = 100;

// Поиск окна выгрузки
const imgUpload = document.querySelector('.img-upload__overlay');
// Поиск кнопки закрытия окна выгрузки
const cancellButtonUpload = document.getElementById('upload-cancel');
// Инпут с данными
const imgUploadInput = document.querySelector('.img-upload__input');
// Фотография
const uploadImg = document.querySelector('.img-upload__preview img');
// Поля ввода комментов и хэштегов
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
// Место вывода ошибки о валидации хэштега или коммента
const hashTagsValidText = document.querySelector('.text__error-hashtag');
const descriptionValidText = document.querySelector('.text__error-description');
// Инпут с процентами размера фотографии
const scaleControl = document.querySelector('.scale__control--value');
// Кнопки выбора эффекта
const effectsRadio = document.querySelectorAll('.effects__radio');

// Удаление обработчика функции закрытия по Escape
const closePopupUpload = () => {
  closeSlider();
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
  scaleControl.value = DEFAUL_VALUE_SCALE;
  textHashtags.value = '';
  textDescription.value = '';
  hashTagsValidText.textContent = '';
  descriptionValidText.textContent = '';
  effectsRadio[0].checked = true;
  uploadImg.style = null;
  uploadImg.src = '';
};

// Функция для закрытия окна с большой фотографией по нажатию Escape
const onPopupEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && evt.target !== fieldHashtags && evt.target !== fieldComment) {
    evt.preventDefault();
    closePopupUpload();
    document.removeEventListener('keydown', onPopupEscapeKeydown);
  }
};

// Функция закрытия окна выгрузки по крестику
cancellButtonUpload.addEventListener('click', () => {
  closePopupUpload();
});

// При изменении инпута открывать окно формы
imgUploadInput.addEventListener('change', () => {
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Подключение функции закрытия большого окна по нажатию Escape
  document.addEventListener('keydown', onPopupEscapeKeydown);
});

// Активация функции валидации, после которой пойдет отправка формы
setUserForSubmit(closePopupUpload);
