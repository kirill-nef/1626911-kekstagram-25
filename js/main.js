
//Модуль получения данных от сервера
import { getData } from './api.js';
// Модуль отправки формы с фотографией
import './formWork.js';
// Модуль изменения размера картинки в форме
import './formWorkScale.js';
// Модуль создания миниатюр на странице
import {renderingThumbnails} from './renderingThumbnails.js';

import { showAlert } from './util.js';

// Массив данных, подгружается из getData
let photoDataArray;

getData().then((data) => {
  photoDataArray = data;
})

  .then(() => {
    if (photoDataArray === false) {
      showAlert('Не удалось загрузить данные с сервера, попробуйте обновить зайти позднее!', 16000);
    }
    else {
      renderingThumbnails(photoDataArray);
    }

  });

export {photoDataArray};
