const URL_GET = 'https://25.javascript.pages.academy/kekstagram/data';
const URL_SEND = 'https://25.javascript.pages.academy/kekstagram';

// Получем данные с сервера
const getData = () =>  fetch(URL_GET)
  .then((respone) => respone.json())
  .then((photoData) => photoData)
  .catch(() => false);

// Отправляем данные на сервер
const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL_SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
