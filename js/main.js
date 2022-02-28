// ============================= ДЗ module2-task1 =============================

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
//console.log(getRandomPositiveInteger(0, 25));

// Проверка количества символов в комментарии
function checkStringLength (inputString, letterMax) {
  if (inputString.length <= letterMax) {
    return true;
  } else {
    return false;
  }
}
//console.log(checkStringLength('string to test', 140));

// ============================= ДЗ module4-task1 =============================

// Массив имён
const USERS_NAMES = [
  'Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Артём', 'Илья', 'Кирилл', 'Михаил', 'Никита', 'Анастасия', 'Мария', 'Анна', 'Виктория', 'Екатерина', 'Наталья', 'Марина', 'Полина', 'София', 'Дарья', 'Алиса', 'Ксения'
];

// Массив коментов
const USERS_COMMENT = [
  'Всё отлично!, В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Итоговое составление массива с данными
const createArray = (generateValue) => {
  const createData = [];

  for (let i = 0; i <= generateValue - 1; i++) {
    createData[i] = {};
    createData[i].id = i + 1;
    createData[i].avatar = `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`;
    createData[i].message = USERS_COMMENT[getRandomPositiveInteger(0, USERS_COMMENT.length - 1)];
    createData[i].name = USERS_NAMES[getRandomPositiveInteger(0, USERS_NAMES.length - 1)];
  }

  return createData;
};
// console.log(createArray(25));
