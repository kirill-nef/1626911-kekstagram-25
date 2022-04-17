// Для вызова функции открытия большой картинки
import { openBigPicture } from './openBigPicture.js';

// Блок в который будем вставлять шаблоны template
const listPictures = document.querySelector('.pictures');
// Поиск template
const templatePicture = document.querySelector('#picture').content;
// Поиск внутри template блок picture
const templatePictureItem = templatePicture.querySelector('.picture');
// Сколько картинок создать

// Функция отрисовки миниатюр на странице
const drow = function (img, comments, likes, index) {
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

  taskPicture.dataset.index = index;
};

// Функция создания миниатюр вызывается из photoArrayDatum при успешной загрузки данных с сервера
function drowThumbnails (photoArrayDatum) {
  const THUMBNAILS = photoArrayDatum.length;

  // Цикл для парсинга массива photoArrayDatum
  for (let i = 0; i < THUMBNAILS; i++) {
    const IMG = photoArrayDatum[i].url;
    const COMMENTS = photoArrayDatum[i].comments.length;
    const LIKES = photoArrayDatum[i].likes;
    drow(IMG, COMMENTS, LIKES, i);
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
