import { effectConfig } from './data.js';

// Бокс под слайдер
const boxSlider = document.querySelector('.img-upload__effect-level');
// Поле слайдера
const sliderElement = document.querySelector('.effect-level__slider');
// Поле значения слайдера
const valueElement = document.querySelector('.effect-level__value');
// Поиск списка радио кнопок
const effectsList = document.querySelector('.effects__list');
// Поиск фотографии
const imgUploadPreview = document.querySelector('.img-upload__preview img');
// Выбранное value фильтра из radio кнопки
let chekedValue;
// CSS название эффекта
let effectName;
// Метод счисления
let method = '';

// Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

// Слежение за изменением слайдера
sliderElement.noUiSlider.on('update', () => {
  // Меняет значение в input
  valueElement.value = sliderElement.noUiSlider.get();
  controlSlider();
});

// Получение от радио кнопки выбранный фильтр
effectsList.addEventListener('change', (evt) => {
  chekedValue = evt.target.closest('input[type="radio"]').value;
  sliderSetting();
});

// Функция применяющая эффект на фотографию. Вызывается при работе слайдера.
function controlSlider () {
  imgUploadPreview.style.filter = `${ effectName }(${ valueElement.value + method})`;
  return '';
}

// Функция подгрузки настроек для фильтров. Вызывается при изменении активной радио кнопки.
function sliderSetting () {
  // Если нет эффекта
  if (chekedValue === 'none') {
    closeSlider();
  } else {
    boxSlider.classList.remove('hidden');
    const effect = effectConfig[chekedValue];
    effectName = effect.effectProperty;
    method = effect.unit;
    sliderElement.noUiSlider.updateOptions(effect.sliderConfig);
  }
}

function closeSlider () {
  imgUploadPreview.style.filter = 'none';
  boxSlider.classList.add('hidden');
}

export {closeSlider};
