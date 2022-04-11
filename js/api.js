// Модуль создания миниатюр на странице

// Получем данные с сервера
const getData = () =>  fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((respone) => respone.json())
  .then((photoData) => photoData)
  .catch(() => false);

const sendData = (onSuccess, message, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        message('Фотография успешно отправлена!', 6000);
      }
      else {
        onSuccess();
        message('Фотография отправлена, но с ошибкой!', 6000);
      }
    })
    .catch(() => {
      message('Не удалось отправить форму. Попробуйте ещё раз', 6000);
    });
};

export {getData, sendData};
