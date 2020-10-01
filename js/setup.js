'use strict';

const WIZARD_NAMES = [`Иван `, `Хуан Себастьян `, `Мария `, `Кристоф `, `Виктор `, `Юлия `, `Люпита `, `Вашингтон `];
const WIZARD_FULL_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARDS_COUNT = 4;

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const createWizard = (count) => {
  const wizards = [];
  for (let i = 0; i < count; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES.length)],
      fullName: WIZARD_FULL_NAMES[getRandomNumber(WIZARD_FULL_NAMES.length)],
      coatColor: COAT_COLORS[getRandomNumber(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[getRandomNumber(EYES_COLORS.length)]
    });
  }
  return wizards;
};
const wizards = createWizard(WIZARDS_COUNT);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const similarListElement = document.querySelector(`.setup-similar-list`);

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name + wizard.fullName;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < WIZARDS_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);


const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);
const userNameInput = setup.querySelector(`.setup-user-name`);

const setupFireball = setup.querySelector(`.setup-fireball-wrap`);
const setupCoat = setup.querySelector(`.setup-wizard .wizard-coat`);
const setupEyes = setup.querySelector(`.setup-wizard .wizard-eyes`);

const userFireball = setup.querySelector(`[name=fireball-color]`);
const userCoat = setup.querySelector(`[name=coat-color]`);
const userEyes = setup.querySelector(`[name=eyes-color]`);

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const getColor = (array, element, input) => {
  let color = array[getRandomNumber(array.length)];

  element.style.fill = color;
  element.style.background = color;
  input.value = color;
};
const onPopupEscPress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    setup.classList.add(`hidden`);
  }
};
const formValidation = (input) => {
  if (input.validity.tooShort) {
    input.setCustomValidity(`Длинна поля должна состоять минимум из 2-х символов`);
  } else if (input.validity.tooLong) {
    input.setCustomValidity(`Длинна поля не должна превышать 25-ти символов`);
  } else if (input.validity.valueMissing) {
    input.setCustomValidity(`Обязательное поле`);
  } else {
    input.setCustomValidity(``);
  }
};
const formLiveValidation = (input) => {
  let valueLength = input.value.length;
  // console.log(valueLength, MIN_NAME_LENGTH, MAX_NAME_LENGTH);
  if (valueLength < MIN_NAME_LENGTH) {
    // console.log(`min`);
    input.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    // console.log(`max`);
    input.setCustomValidity(`Удалите лишние симв.`);
    // Если удалить maxlength="25"
  } else {
    // console.log(`0`);
    input.setCustomValidity(``);
  }

  input.reportValidity();
};
const inputStop = (evt) => evt.key === `Escape` ? evt.stopPropagation() : null;

const openPopup = () => {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
  userNameInput.addEventListener(`keydown`, (evt) => {
    inputStop(evt);
  });
  userNameInput.addEventListener(`invalid`, () => {
    formValidation(userNameInput);
  });
  userNameInput.addEventListener(`input`, () => {
    formLiveValidation(userNameInput);
  });
  // При таком исполнении formLiveValidation - не срабатывает. Почему?
  // userNameInput.addEventListener(`invalid`, formValidation(userNameInput));
  // userNameInput.addEventListener(`input`, formLiveValidation(userNameInput));


  setupFireball.addEventListener(`click`, () => {
    getColor(FIREBALL_COLORS, setupFireball, userFireball);
  });
  setupCoat.addEventListener(`click`, () => {
    getColor(COAT_COLORS, setupCoat, userCoat);
  });
  setupEyes.addEventListener(`click`, () => {
    getColor(EYES_COLORS, setupEyes, userEyes);
  });
};
const closePopup = () => {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
  userNameInput.removeEventListener(`keydown`, (evt) => {
    inputStop(evt);
  });
  userNameInput.removeEventListener(`invalid`, () => {
    formValidation(userNameInput);
  });
  userNameInput.removeEventListener(`input`, () => {
    formLiveValidation(userNameInput);
  });
  // userNameInput.removeEventListener(`invalid`, formValidation(userNameInput));
  // userNameInput.removeEventListener(`input`, formLiveValidation(userNameInput));


  setupFireball.removeEventListener(`click`, getColor(FIREBALL_COLORS, setupFireball, userFireball));
  setupCoat.removeEventListener(`click`, getColor(COAT_COLORS, setupCoat, userCoat));
  setupEyes.removeEventListener(`click`, getColor(EYES_COLORS, setupEyes, userEyes));
};

setupOpen.addEventListener(`click`, () => {
  openPopup();
});
setupClose.addEventListener(`click`, () => {
  closePopup();
});

