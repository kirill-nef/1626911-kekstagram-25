// Функция получения рандомного числа
import {getRandomPositiveInteger} from './util.js';
// Массив данных пользователей
import {USERS_NAMES} from './data.js';

// Функция по созданию массива с пользователями и данными
const createDataUsers = [];

const createArrayUsers = (indexUsers) => {
  for (let i = 0; i <= indexUsers - 1; i++) {
    createDataUsers[i] = {};
    createDataUsers[i].id = i + 1;
    createDataUsers[i].avatar = `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`;
    createDataUsers[i].name = USERS_NAMES[getRandomPositiveInteger(0, USERS_NAMES.length - 1)];
  }
};

// Вызов функции создания массива пользователей в количестве 25
createArrayUsers(25);

export {createDataUsers};
