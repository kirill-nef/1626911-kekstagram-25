// Модуль создания миниатюр на странице
import { drowThumbnails, clickThumbnails } from './drowThumbnails.js';
// Получение оригинального массива данных
import { getOriginalDataArray } from './main.js';

// Активный массив
let activeDataArray;

// Функция для экспорта масиива
const getActiveDataArray = () => activeDataArray;

// Функция сортироки
function getSorting () {
  // Первоначальная публикация, по умолчанию
  drowThumbnails(getOriginalDataArray());
  activeDataArray = getOriginalDataArray();
  clickThumbnails();

  // Блок фильтров
  const imgFilters =  document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');

  //Кнопка по умолчанию
  const buttonDefault = document.getElementById('filter-default');
  // Кнопка случайные
  const buttonRandom = document.getElementById('filter-random');
  // Кнопка обсуждаемые
  const buttonDiscussed = document.getElementById('filter-discussed');

  // RANDOM BUTTON
  buttonRandom.addEventListener('click', () => {
    cleanThumbnails();
    changeActiveButton(buttonRandom);
    sortRandomPhotos();
  });

  // DISCUSSED BUTTON
  buttonDiscussed.addEventListener('click', () => {
    cleanThumbnails();
    changeActiveButton(buttonDiscussed);
    sortDiscussed();
  });

  // DEFAULT BUTTON
  buttonDefault.addEventListener('click', () => {
    cleanThumbnails();
    changeActiveButton(buttonDefault);
    drowThumbnails(getOriginalDataArray());
  });

  // Функция чистки миниатюр
  function cleanThumbnails () {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
  }

  // Смена активной кнопки
  function changeActiveButton (newActiveButton) {
    const activeButton = document.querySelector('.img-filters__button--active');
    activeButton.classList.remove('img-filters__button--active');
    newActiveButton.classList.add('img-filters__button--active');
    activeButton.disabled = false;
    newActiveButton.disabled = true;
  }

  // Функция рандомной сортировки
  function sortRandomPhotos () {
    activeDataArray = getOriginalDataArray().slice().sort(() => Math.random() - 0.5).slice(0, 10);
    drowThumbnails(activeDataArray);
  }

  // Функция сортровки по количеству коментов
  function sortDiscussed () {
    activeDataArray = getOriginalDataArray().slice().sort((firstImage, secondImage) => secondImage.comments.length - firstImage.comments.length);
    drowThumbnails(activeDataArray);
  }
}


export {getActiveDataArray, getSorting};
