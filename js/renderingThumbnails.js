import { arrayPicture } from './createArrayPicture.js';

// Блок в который будем вставлять шаблоны template
const listPictures = document.querySelector('.pictures');
// Поиск template
const templatePicture = document.querySelector('#picture').content;
// Поиск внутри template блок picture
const templatePictureItem = templatePicture.querySelector('.picture');
// Сколько картинок создать
const THUMBNAILS = arrayPicture.length;

// Функция создания миниатюр на странице
const renderingThumbnails = function (img, comments, likes) {
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
};

for (let i = 0; i < THUMBNAILS; i++) {
  const IMG = arrayPicture[i].src;
  const COMMENTS = arrayPicture[i].commentsCount;
  const LIKES = arrayPicture[i].likesCount;
  renderingThumbnails(IMG, COMMENTS, LIKES);
}

