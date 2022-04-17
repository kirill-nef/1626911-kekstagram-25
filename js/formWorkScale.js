// Поле значения
const scaleControl = document.querySelector('.scale__control--value');
// Кнопка минус
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
// Кнопка плюс
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
// Загруженная картинка
const uploadImg = document.querySelector('.img-upload__preview img');

// Шаг изменения значения
const STEP_VALUE = 25;
// Минимальное и максимальное значение в поле
const MIN_VALUE = 25;
const MAX_VALUE = 100;
// Хранимое значение
let scaleValue = scaleControl.value;

// Кнопка мин
buttonScaleSmaller.addEventListener('click', () => {
  scaleValue = Number(scaleValue) - Number(STEP_VALUE);
  if (scaleValue < MIN_VALUE) {
    scaleValue = MIN_VALUE;
  }
  scaleControl.value = scaleValue;
  applySizeImg();
});

// Кнопка макс
buttonScaleBigger.addEventListener('click', () => {
  scaleValue = Number(scaleValue) + Number(STEP_VALUE);
  if (scaleValue > MAX_VALUE) {
    scaleValue = MAX_VALUE;
  }
  scaleControl.value = scaleValue;
  applySizeImg();
});

// Функция привязки значения на картинку
function applySizeImg () {
  uploadImg.style.transform = `scale(${  scaleControl.value / 100  })`;
}
