// Модуль создания миниатюр на странице
import { drowThumbnails, clickThumbnails } from './drowThumbnails.js';
// Получение оригинального массива данных
import { getOriginalArrayDatum } from './main.js';
// функция debounce
import {debounce} from './util.js';

// Активный массив
let activeArrayDatum;
const DELEY = 300;
// Функция для экспорта масиива
const getActiveArrayDatum = () => activeArrayDatum;

// Функция сортироки
function getSorting () {
  // Первоначальная публикация, по умолчанию
  drowThumbnails(getOriginalArrayDatum());
  activeArrayDatum = getOriginalArrayDatum();
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
  buttonRandom.addEventListener('click', debounce(sortRandomPhotos, DELEY));
  // DISCUSSED BUTTON
  buttonDiscussed.addEventListener('click', debounce(sortDiscussed, DELEY));
  // DEFAULT BUTTON
  buttonDefault.addEventListener('click', debounce(sortDefault, DELEY));


  // Функция чистки миниатюр из списка
  function cleanThumbnails () {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
  }

  // Смена активной кнопки
  function changeActiveButton (newActiveButton) {
    cleanThumbnails();
    const activeButton = document.querySelector('.img-filters__button--active');
    activeButton.classList.remove('img-filters__button--active');
    newActiveButton.classList.add('img-filters__button--active');
  }

  // По кнопке! Функция рандомной сортировки
  function sortRandomPhotos () {
    changeActiveButton(buttonRandom);
    activeArrayDatum = getOriginalArrayDatum().slice().sort(() => Math.random() - 0.5).slice(0, 10);
    drowThumbnails(activeArrayDatum);
  }

  // По кнопке! Функция сортровки по количеству коментов
  function sortDiscussed () {
    changeActiveButton(buttonDiscussed);
    activeArrayDatum = getOriginalArrayDatum().slice().sort((firstImage, secondImage) => secondImage.comments.length - firstImage.comments.length);
    drowThumbnails(activeArrayDatum);
  }

  // По кнопке! Функция сортровки по количеству коментов
  function sortDefault () {
    changeActiveButton(buttonDefault);
    activeArrayDatum = getOriginalArrayDatum();
    drowThumbnails(activeArrayDatum);
  }

}


export {getActiveArrayDatum, getSorting};
