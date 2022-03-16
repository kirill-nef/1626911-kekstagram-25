// Функция получения рандомного числа
import {getRandomPositiveInteger} from './getRandomPositiveInteger.js';

// Блок в который будем вставлять шаблоны template
const listPictures = document.querySelector('.pictures');
// Поиск template
const templatePicture = document.querySelector('#picture').content;
// Поиск внутри template блок picture
const templatePictureItem = templatePicture.querySelector('.picture');
// Сколько картинок создать
const THUMBNAILS = 25;

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

for (let i = 1; i < THUMBNAILS + 1; i++) {
  const IMG = `./photos/${  i  }.jpg`;
  const COMMENTS = getRandomPositiveInteger(15, 50);
  const LIKES = getRandomPositiveInteger(100, 500);
  renderingThumbnails(IMG, COMMENTS, LIKES);
}

