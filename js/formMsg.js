// Импорт функции закрытия окна по escape
import {isEscapeKey} from './util.js';

let activeWindow;

const closeActiveWindow = () => {
  activeWindow.remove();
  activeWindow = '';
};

const msgEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeActiveWindow();
    document.removeEventListener('keydown', msgEscapeKeydown);
  }
};


function showFormSuccess () {
  // Поиск template
  const templateSucsess = document.querySelector('#success').content;
  // Поиск внутри template блок success
  const templateSucsessItem = templateSucsess.querySelector('.success');
  // Делаем полный клон блока
  const successClone = templateSucsessItem.cloneNode(true);
  // Пушим на страницу
  document.body.appendChild(successClone);

  const success = document.querySelector('.success');
  activeWindow = success;

  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', () => {
    closeActiveWindow();
    document.removeEventListener('click', successButton);
  });

  // Подключение функции закрытия большого окна по нажатию Escape
  document.addEventListener('keydown', msgEscapeKeydown);
}

function showFormError () {
  const imgUploadButton = document.querySelector('.img-upload__input');

  // Поиск template
  const templateSucsess = document.querySelector('#error').content;
  // Поиск внутри template блок error
  const templateSucsessItem = templateSucsess.querySelector('.error');
  // Делаем полный клон блока
  const errorClone = templateSucsessItem.cloneNode(true);
  // Пушим на страницу
  document.body.appendChild(errorClone);

  const error = document.querySelector('.error');
  activeWindow = error;

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    imgUploadButton.click();
    closeActiveWindow();
    document.removeEventListener('click', errorButton);
  });

  // Подключение функции закрытия большого окна по нажатию Escape
  document.addEventListener('keydown', msgEscapeKeydown);

}


export {showFormSuccess, showFormError};
