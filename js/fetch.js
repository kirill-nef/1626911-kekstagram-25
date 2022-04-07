/*
4. Просмотр загруженных изображений
4.1. Загрузка изображений от других пользователей производится сразу после открытия страницы с удалённого сервера: https://25.javascript.pages.academy/kekstagram/data.

4.2. Если при загрузке данных с сервера произошла ошибка запроса, нужно показать соответствующее сообщение. Дизайн блока с сообщением нужно придумать самостоятельно.

4.3. Все загруженные изображения показаны на главной странице в виде миниатюр. DOM-элемент миниатюры генерируется на основе шаблонного элемента picture, расположенного в элементе template на странице.

4.4. При нажатии на любую из миниатюр, показывается блок .big-picture, содержащий полноэкранное изображение с количеством лайков и комментариев. Элементу body задаётся класс modal-open. Данные, описывающие изображение, должны подставляться в соответствующие элементы в разметке.нажатия)

4.5. Выход из полноэкранного режима просмотра фотографии осуществляется либо нажатием на иконку крестика .big-picture__cancel в правом верхнем углу блока .big-picture, либо нажатием на клавишу Esc. У элемента body удаляется класс modal-open.
*/

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((respone) => respone.json())
  .then((photoData) => {
    render(photoData);
  });

//

function render (photoData) {
  console.log(photoData.length);
}


// // ПОЛУЧЕНИЕ

// const createLoader = (onSuccess, onError) => () => {

//   fetch(
//     'https://25.javascript.pages.academy/kekstagram/data',
//     {
//       method: 'GET',
//       credentials: 'same-origin',
//     },
//   )

//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(`${response.status} ${response.statusText}`);
//     })

//     .then((data) => {
//       onSuccess('Результат', data);
//     })

//     .catch((err) => {
//       onError(err);
//     });
// };

// const loadData = createLoader(console.log, console.error);

// loadData();

// ОТПРАВКА
/*
const data1 = new FormData();
data1.append('scale', '100');

fetch(
  'https://25.javascript.pages.academy/kekstagram/',
  {
    method: 'POST',
    credentials: 'same-origin',
    body: data1,
    // body: new FormData(),
  },
)
  .then((response) => {
    // Номер ошибки
    console.log(response.status);
    //если код будет в пределах 200-299 тогда true
    console.log(response.ok);
    return response.json();
  })

  .then((data) => {
    console.log('Результат', data);
  })

  .catch((err) => {
    console.log(err);
    console.log('Нет соединения с сервером');
  });
*/

