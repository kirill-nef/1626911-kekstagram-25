
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
// Массив данных, подгружается из getData с  сервера
let photoDataArray;

// Массив для импорта
const getOriginalDataArray = () => photoDataArray;

// Получение данных с сервера и публикация в массив
getData().then((data) => {
  photoDataArray = data;
})
  .then(() => {
    if (photoDataArray === false) {
      showAlert('Не удалось загрузить данные с сервера, попробуйте обновить зайти позднее!', 16000);
    }
    else {
      getSorting();
    }
  });

export { photoDataArray, getOriginalDataArray };
