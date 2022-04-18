// Функции открытия большой картинки
import { openBigPicture } from './openBigPicture.js';

// Блок в который будем вставлять шаблоны template
const listPictures = document.querySelector('.pictures');
// Поиск template
const templatePicture = document.querySelector('#picture').content;
// Поиск внутри template блок picture
const templatePictureItem = templatePicture.querySelector('.picture');

// Функция отрисовки миниатюр на странице
const drow = (img, comments, likes, index) => {
  // Делаем полный клон блока
  const taskPicture = templatePictureItem.cloneNode(true);
  // Задаем src для картинки
  const taskPictureImg = taskPicture.querySelector('img');
  taskPictureImg.src = img;
  // Задаем комментарий в picture__comments
  const taskPictureComments = taskPicture.querySelector('.picture__comments');
  taskPictureComments.textContent = comments;
  // Задаем лайки в picture__likes
  const taskPictureLikes = taskPicture.querySelector('.picture__likes');
  taskPictureLikes.textContent = likes;
  // Пушим на страницу
  listPictures.appendChild(taskPicture);
  // Ведем параметр dataset
  taskPicture.dataset.index = index;
};

// Функция создания миниатюр вызывается из photoArrayDatum при успешной загрузки данных с сервера
function drowThumbnails (photoArrayDatum) {
  const thumbnails = photoArrayDatum.length;

  // Цикл для парсинга массива photoArrayDatum
  for (let i = 0; i < thumbnails; i++) {
    const img = photoArrayDatum[i].url;
    const comments = photoArrayDatum[i].comments.length;
    const likes = photoArrayDatum[i].likes;
    drow(img, comments, likes, i);
  }
}

// Функция слежения за кликами на миниатюрку
function clickThumbnails () {
  const picturesTest = document.querySelector('.pictures');

  picturesTest.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      // Вызываем функцию открытия большой фотографии
      openBigPicture(evt.target.closest('a').getAttribute('data-index'));
    }
  });

}

export {drowThumbnails, clickThumbnails};
