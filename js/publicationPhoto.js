const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fieleChooser = document.querySelector('.img-upload__start input[type=file]');
const photo = document.querySelector('.img-upload__preview img');

fieleChooser.addEventListener('change', () => {
  const file = fieleChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photo.src = URL.createObjectURL(file);
  }

});
