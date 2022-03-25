// Модуль валидация формы

// Поиск формы
const uploadForm = document.querySelector('.img-upload__form');
// В форме поиск окна ввода с хэш-тегом
const hashTags = uploadForm.querySelector('.text__hashtags');
// Место вывода ошибки о валидации хэштега
const hashTagsValidText = document.querySelector('.text__error-hashtag');

// Конфиг Пристин
const pristine = new Pristine(uploadForm, {
  // укажем класс элемента, в котором нужно вывести ошибку
  classTo: 'text__el--description',
  // этот же класс добавим элементу label в разметке
  errorTextParent: 'text__el--description',
  // Для самого текста ошибки используем класс
  errorTextClass: 'text__error',
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    return true;
  } else {
    return false;
  }
});

// Валидаця на повторения и количество хэштегов
function validateHashTags(value) {
  const arrHashTags = value.split(' ');
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
    if (hashTags.value.length > 0) {
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

pristine.addValidator(hashTags, validateHashTags, 'Ошибка валидации');
