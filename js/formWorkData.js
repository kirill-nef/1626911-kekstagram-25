// Модуль в котором хранятся настройки эффектов для фотографии

const effectConfig = {
  chrome: {
    effectProperty: 'grayscale',
    unit: '',
    sliderConfig: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  sepia: {
    effectProperty: 'sepia',
    unit: '',
    sliderConfig: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  marvin: {
    effectProperty: 'invert',
    unit: '%',
    sliderConfig:{
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  phobos: {
    effectProperty: 'blur',
    unit: 'px',
    sliderConfig: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },
  heat: {
    effectProperty: 'brightness',
    unit: '',
    sliderConfig: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

export {effectConfig};
