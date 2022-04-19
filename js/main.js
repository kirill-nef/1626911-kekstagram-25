//Модуль получения данных от сервера
import { getData } from './api.js';
// Модуль отправки формы с фотографией
import './formWork.js';
// Модуль изменения размера картинки в форме
import './formWorkScale.js';
// Модуль вызова сообщения
import { showAlert } from './util.js';
// Модель тестовый
import { getSorting } from './sorting.js';
// Модуль публикации фото из инпута
import './publicationPhoto.js';

// Отображение окна, если загрузка с сервера не удалась
const SHOW_ALERT_DELEY = 16000;

// Массив данных, подгружается из getData с  сервера
let arrayDatum;

// Массив для импорта
const getOriginalArrayDatum = () => arrayDatum;

// Получение данных с сервера и публикация в массив
getData().then((data) => {
  arrayDatum = data;
})
  .then(() => {
    if (arrayDatum === false) {
      showAlert('Не удалось загрузить данные с сервера, попробуйте обновить зайти позднее!', SHOW_ALERT_DELEY);
    }
    else {
      getSorting();
    }
  });

export { arrayDatum, getOriginalArrayDatum };
