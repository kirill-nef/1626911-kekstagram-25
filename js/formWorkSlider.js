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
  boxSlider.classList.remove('hidden');
  // Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
  if (chekedValue === 'chrome') {
    effectName = 'grayscale';
    method = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
    return '';
  }
  // Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
  if (chekedValue === 'sepia') {
    effectName = 'sepia';
    method = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
    return '';
  }
  // Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
  if (chekedValue === 'marvin') {
    effectName = 'invert';
    method = '%';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    });
    return '';
  }
  // Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
  if (chekedValue === 'phobos') {
    effectName = 'blur';
    method = 'px';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    });
    return '';
  }
  // Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
  if (chekedValue === 'heat') {
    effectName = 'brightness';
    method = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    });
    return '';
  }
  // Если нет эффекта
  if (chekedValue === 'none') {
    imgUploadPreview.style.filter = 'none';
    boxSlider.classList.add('hidden');
  }
}
