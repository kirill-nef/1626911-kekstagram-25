// Модуль создания миниатюр на странице
import { drowThumbnails, clickThumbnails } from './drowThumbnails.js';
// Получение оригинального массива данных
import { getOriginalArrayDatum } from './main.js';
// функция debounce
import {debounce} from './util.js';

//Кнопка по умолчанию
const buttonDefault = document.getElementById('filter-default');
// Кнопка случайные
const buttonRandom = document.getElementById('filter-random');
// Кнопка обсуждаемые
const buttonDiscussed = document.getElementById('filter-discussed');
// Блок с кнопками
const imgFilters =  document.querySelector('.img-filters');

// Активный массив
let activeArrayDatum;
const DELEY = 500;
// Функция для экспорта масиива
const getActiveArrayDatum = () => activeArrayDatum;

// Функция чистки миниатюр из списка
const cleanThumbnails = () => {
  document.querySelectorAll('.picture').forEach((el) => el.remove());
};

// Смена активной кнопки
const changeActiveButton = (newActiveButton) => {
  cleanThumbnails();
  const activeButton = document.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
  newActiveButton.classList.add('img-filters__button--active');
};

// По кнопке! Функция рандомной сортировки
const sortRandomPhotos = () => {
  changeActiveButton(buttonRandom);
  activeArrayDatum = getOriginalArrayDatum().slice().sort(() => Math.random() - 0.5).slice(0, 10);
  drowThumbnails(activeArrayDatum);
};

// По кнопке! Функция сортровки по количеству коментов
const sortDiscussed = () => {
  changeActiveButton(buttonDiscussed);
  activeArrayDatum = getOriginalArrayDatum().slice().sort((firstImage, secondImage) => secondImage.comments.length - firstImage.comments.length);
  drowThumbnails(activeArrayDatum);
};

// По кнопке! Функция сортровки по количеству коментов
const sortDefault = () => {
  changeActiveButton(buttonDefault);
  activeArrayDatum = getOriginalArrayDatum();
  drowThumbnails(activeArrayDatum);
};

// Функция сортироки
const getSorting = () => {
  // Отображаем блок с кнопками
  imgFilters.classList.remove('img-filters--inactive');

  // Первоначальная публикация, по умолчанию
  activeArrayDatum = getOriginalArrayDatum();
  drowThumbnails(activeArrayDatum);
  clickThumbnails();

  // RANDOM BUTTON
  buttonRandom.addEventListener('click', debounce(sortRandomPhotos, DELEY));
  // DISCUSSED BUTTON
  buttonDiscussed.addEventListener('click', debounce(sortDiscussed, DELEY));
  // DEFAULT BUTTON
  buttonDefault.addEventListener('click', debounce(sortDefault, DELEY));
};

export {getActiveArrayDatum, getSorting};
