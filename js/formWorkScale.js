// Модуль работы с размером изображения

// Поле значения
const scaleControl = document.querySelector('.scale__control--value');
// Кнопка минус
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
// Кнопка плюс
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
// Загруженная картинка
const uploadImg = document.querySelector('.img-upload__preview img');


// Шаг изменения значения
const stepValue = 25;
// Минимальное и максимальное значение в поле
const minValue = 25;
const maxValue = 100;
// Хранимое значение
let scaleValue = scaleControl.value;

// Кнопка мин
buttonScaleSmaller.addEventListener('click', () => {
  scaleValue = Number(scaleValue) - Number(stepValue);
  if (scaleValue < minValue) {
    scaleValue = minValue;
  }
  scaleControl.value = scaleValue;
  applySizeImg();
});

// Кнопка макс
buttonScaleBigger.addEventListener('click', () => {
  scaleValue = Number(scaleValue) + Number(stepValue);
  if (scaleValue > maxValue) {
    scaleValue = maxValue;
  }
  scaleControl.value = scaleValue;
  applySizeImg();
});

// Функция привязки значения на картинку
function applySizeImg () {
  uploadImg.style.transform = `scale(${  scaleControl.value / 100  })`;
}
