// Проверка количества символов в комментарии

const checkStringLength = (inputString, letterMax) => {
  if (inputString.length <= letterMax) {
    return true;
  } else {
    return false;
  }
};

export {checkStringLength};
