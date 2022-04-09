// Модуль создания миниатюр на странице
import {renderingThumbnails} from './renderingThumbnails.js';
// Функция вывода сообщения об ошибке
import {showAlert} from './util.js';

// Массив с фотографиями и их данными
let photoDataArray;

// Получем данные с сервера
const getData = () => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера, попробуйте обновить зайти позднее!', 16000);
      return fetch;
    })
    .then((respone) => respone.json())
    .then((photoData) => {
      photoDataArray = photoData;
      // Вызываем функцию создания миниатюр на странице
      renderingThumbnails(photoDataArray);
    });
};

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
        onFail('Фотография успешно отправлена!', 6000);
      }
      else {
        onSuccess();
        onFail('Фотография отправлена, но с ошибкой!', 6000);
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз', 6000);
    });
};

export {photoDataArray, getData, sendData};
