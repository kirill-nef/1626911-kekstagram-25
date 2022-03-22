// Модуль валидация формы

// Поиск формы
const uploadForm = document.querySelector('.img-upload__form');
// В форме поиск окна ввода с хэш-тегом
const hashTags = uploadForm.querySelector('.text__hashtags');
// Допустимые символы в форме

const hashTagsValidText = document.querySelector('.text__error-hashtag');

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

function validateHashTags(value) {
  const arrHashTags = value.split(' ');
  const uniqArrHashTags = new Set(arrHashTags);

  if (arrHashTags.length > 5) {
    hashTagsValidText.textContent = 'Хэш-тегов не может быть более 5 :(';
    return false;
  }
  else {
    hashTagsValidText.textContent = '';
    if (uniqArrHashTags.size < arrHashTags.length) {
      hashTagsValidText.textContent = 'Не должно быть повторяющихся Хэш-тегов :(';
      return false;
    }
    else {
      hashTagsValidText.textContent = '';
      //const re = new RegExp(/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/);
      // for (let i = 0; i > 5; i = i + 1) {
      //   re.test(arrHashTags[i]);
      // }
    }
  }
}

pristine.addValidator(hashTags, validateHashTags, 'Ошибка валидации');
