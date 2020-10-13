'use strict';


// Создание и вставка похожих волшебников
(function () {
  const WIZARDS_COUNT = 4;

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const setup = document.querySelector(`.setup`);

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  const similarListElement = document.querySelector(`.setup-similar-list`);

  const renderWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const successHandler = (wizards) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    // console.log(wizards);
    similarListElement.appendChild(fragment);
    setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.backend.load(successHandler, errorHandler);
})();
