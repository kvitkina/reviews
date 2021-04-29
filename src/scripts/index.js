import '../styles/index.scss';

//drop-select
const dropSelects = document.querySelectorAll('.form__item_type_select');

const selectInit = (elem) => {
  const formInput = elem.querySelector('.form__input');
  const formList = elem.querySelector('.form__list');
  const formListItems = formList.querySelectorAll('.form__list-item');
  const formInputIcon = elem.querySelector('.form__input-icon');

  elem.addEventListener('click', () => {
      formList.classList.toggle('form__list_visible');
      formInputIcon.classList.toggle('form__input-icon_rotate');
  });

  formListItems.forEach(item => {
    item.addEventListener('click', () => {
      formInput.value = item.textContent;
    });
  });
};

for (let item of dropSelects) {
  selectInit(item);
};

//checkbox
const formCheckbox = document.querySelector('.form__checkbox-content');
const formCheckboxIcon = formCheckbox.querySelector('.form__checkbox-icon');
const formCheckboxInput = formCheckbox.querySelector('.form__checkbox-input');
const formTemperature = document.querySelector('.form__temperature');

formCheckbox.addEventListener('click', () => {
  formCheckboxIcon.classList.toggle('form__checkbox-icon_visible');
  formCheckbox.classList.toggle('form__checkbox-content_checked');
  formTemperature.classList.toggle('form__temperature_visible');
});

formCheckboxIcon.addEventListener('click', () => {
  formCheckboxIcon.classList.remove('form__checkbox-icon_visible');
  formCheckbox.classList.remove('form__checkbox-content_checked');
  formTemperature.classList.remove('form__temperature_visible');
});

//time
const formTime = document.querySelectorAll('.form__time-wrapper');

const selectTime = (elem) => {
  const formInputButton = elem.querySelector('.form__input-button');
  const formInputsCircle = elem.querySelector('.form__input-circle');

  formInputsCircle.addEventListener('click', () => {
    formInputsCircle.classList.toggle('form__input-circle_active');
    formInputButton.classList.toggle('form__input-button_active');
  })
};

for (let item of formTime) {
  selectTime(item);
};
