'use strict';

const WIZARD_NAMES = [`Иван `, `Хуан Себастьян `, `Мария `, `Кристоф `, `Виктор `, `Юлия `, `Люпита `, `Вашингтон `];
const WIZARD_FULL_NAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const wizards = [
  {
    name: WIZARD_NAMES[0],
    fullname: WIZARD_FULL_NAME[0],
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[0],
  },
  {
    name: WIZARD_NAMES[1],
    fullname: WIZARD_FULL_NAME[1],
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[1],
  },
  {
    name: WIZARD_NAMES[2],
    fullname: WIZARD_FULL_NAME[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYES_COLOR[2],
  },
  {
    name: WIZARD_NAMES[3],
    fullname: WIZARD_FULL_NAME[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYES_COLOR[3],
  },
  {
    name: WIZARD_NAMES[4],
    fullname: WIZARD_FULL_NAME[4],
    coatColor: COAT_COLOR[4],
    eyesColor: EYES_COLOR[getRandomNumber(EYES_COLOR.length)],
  },
  {
    name: WIZARD_NAMES[5],
    fullname: WIZARD_FULL_NAME[5],
    coatColor: COAT_COLOR[getRandomNumber(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomNumber(EYES_COLOR.length)],
  },
  {
    name: WIZARD_NAMES[6],
    fullname: WIZARD_FULL_NAME[6],
    coatColor: COAT_COLOR[getRandomNumber(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomNumber(EYES_COLOR.length)],
  },
  {
    name: WIZARD_NAMES[7],
    fullname: WIZARD_FULL_NAME[7],
    coatColor: COAT_COLOR[getRandomNumber(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomNumber(EYES_COLOR.length)],
  },
];

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const similarListElement = document.querySelector(`.setup-similar-list`);

const renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name + wizard.fullname;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
  // let beta = getRandomNumber(wizards.length);
  // попробовал сделать случайный вывод
  // вместо i можно подставить beta
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);


