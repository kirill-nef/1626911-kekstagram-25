// Получем данные с сервера
const getData = () =>  fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((respone) => respone.json())
  .then((photoData) => photoData)
  .catch(() => false);

// Отправляем данные на сервер
const sendData = (onSuccess, onFail, body) => {
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
      }
      else {
        onSuccess();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
