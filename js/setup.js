'use strict';

const WIZARD_NAMES = [`Иван `, `Хуан Себастьян `, `Мария `, `Кристоф `, `Виктор `, `Юлия `, `Люпита `, `Вашингтон `];
const WIZARD_FULL_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const wizards = [];

const createWizard = () => {
  for (let i = 0; i < WIZARD_NAMES.length; i++) {
    wizards.push({
      name: WIZARD_NAMES[i],
      fullName: WIZARD_FULL_NAMES[i],
      coatColor: COAT_COLORS[getRandomNumber(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[getRandomNumber(EYES_COLORS.length)]
    });
  }
  return wizards;
};
createWizard();

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const similarListElement = document.querySelector(`.setup-similar-list`);

const renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name + wizard.fullName;
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
