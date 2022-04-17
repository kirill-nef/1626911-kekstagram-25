// Проверка на нажатие кнопки Escape, возвращает true/false
const isEscapeKey = (evt) => evt.key === 'Escape';

// export {getRandomPositiveInteger, isEscapeKey};
export {isEscapeKey};

// Функция вывода сообщения с ошибкой на экран
const showAlert = (message, time) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '50px 250px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = 1.5;
  alertContainer.style.backgroundImage = 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, time);
};

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {showAlert, debounce};
