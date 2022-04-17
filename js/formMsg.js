function showFormSuccess () {
  // Поиск template
  const templateSucsess = document.querySelector('#success').content;
  // Поиск внутри template блок success
  const templateSucsessItem = templateSucsess.querySelector('.success');

  // Делаем полный клон блока
  const successClone = templateSucsessItem.cloneNode(true);
  // Пушим на страницу
  document.body.appendChild(successClone);

  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', () => {
    const success = document.querySelector('.success');
    success.remove();
    document.removeEventListener('click', successButton);
  });
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

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    imgUploadButton.click();
    const error = document.querySelector('.error');
    error.remove();
    document.removeEventListener('click', errorButton);
  });
}


export {showFormSuccess, showFormError};
