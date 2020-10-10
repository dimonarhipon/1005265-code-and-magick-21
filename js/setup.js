'use strict';


// Создание и вставка похожих волшебников
(function () {
  const WIZARDS_COUNT = 4;

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);
  const createWizard = (count) => {
    const wizards = [];
    for (let i = 0; i < count; i++) {
      wizards.push({
        name: window.util.getElement(window.data.WIZARD_NAMES),
        fullName: window.util.getElement(window.data.WIZARD_FULL_NAMES),
        coatColor: window.util.getElement(window.data.COAT_COLORS),
        eyesColor: window.util.getElement(window.data.EYES_COLORS)
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
})();

