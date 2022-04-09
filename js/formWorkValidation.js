// Модуль валидация формы

// Функция вывода сообщения об ошибке
import {showAlert} from './util.js';
// Функция отправки формы
import {sendData} from './api.js';

// Поиск формы
const uploadForm = document.querySelector('.img-upload__form');
// В форме поиск окна ввода с хэш-тегом и комментом
const fieldHashtags = uploadForm.querySelector('.text__hashtags');
const fieldComment = uploadForm.querySelector('.text__description');

// Место вывода ошибки о валидации хэштега
const hashTagsValidText = document.querySelector('.text__error-hashtag');
// Место вывода ошибки о валидации комментария
const descriptionValidText = document.querySelector('.text__error-description');

// Конфиг Пристин
const pristine = new Pristine(uploadForm, {
  // укажем класс элемента, в котором нужно вывести ошибку
  classTo: 'text__el--description',
  // этот же класс добавим элементу label в разметке
  errorTextParent: 'text__el--description',
  // Для самого текста ошибки используем класс
  errorTextClass: 'text__error',
});

const setUserForSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      sendData(onSuccess, showAlert, formData);
    }
    else {
      showAlert('Проверьте правильность введенных данных!', 6000);
    }
  });
};

// Валидаця на повторения и количество хэштегов
function validateHashTags(value) {
  const arrHashTags = value.toLowerCase().split(' ');
  const uniqArrHashTags = new Set(arrHashTags);
  if (arrHashTags.length > 5) {
    hashTagsValidText.textContent = 'Хэш-тегов не может быть более 5';
    return false;
  }
  else {
    hashTagsValidText.textContent = '';
    if (uniqArrHashTags.size < arrHashTags.length) {
      hashTagsValidText.textContent = 'Не должно быть повторяющихся Хэштегов';
      return false;
    }
    else {
      hashTagsValidText.textContent = '';
    }
  }

  // Валидация хэштега на правильность ввода
  const re = new RegExp('^#[A-Za-zА-Яа-яЁё0-9]{1,20}$');
  for (let i = 0; i < arrHashTags.length; i++) {
    if (fieldHashtags.value.length > 0) {
      const curentHashtag = arrHashTags[i];
      const hashCheck = re.test(curentHashtag);
      if (hashCheck === false) {
        hashTagsValidText.textContent = 'Хэш-тег имеет ошибку или длину более 20 символов';
        if (curentHashtag === '' || curentHashtag === '#') {
          hashTagsValidText.textContent = 'Введите #ХэшТег';
        }
        return false;
      }
      else {
        hashTagsValidText.textContent = '';
      }
    } else {
      hashTagsValidText.textContent = '';
      return true;
    }
  }
  return true;
}

pristine.addValidator(fieldHashtags, validateHashTags, 'Ошибка валидации');

export {hashTagsValidText, descriptionValidText, fieldComment, fieldHashtags, setUserForSubmit};
