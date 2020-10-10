'use strict';

(function () {
  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const userNameInput = setup.querySelector(`.setup-user-name`);

  setupOpen.addEventListener(`click`, () => {
    openPopup();
  });

  setupClose.addEventListener(`click`, () => {
    closePopup();
  });

  const onPopupEscPress = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      setup.classList.add(`hidden`);
    }
  };
  const inputStop = (evt) => evt.key === `Escape` ? evt.stopPropagation() : null;
  //
  const formValidationName = () => window.validation.send(userNameInput);
  const formLiveValidationName = () => window.validation.live(userNameInput);
  //
  const openPopup = () => {
    setup.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);
    userNameInput.addEventListener(`keydown`, inputStop);

    userNameInput.addEventListener(`invalid`, formValidationName);
    userNameInput.addEventListener(`input`, formLiveValidationName);

    setupFireball.addEventListener(`click`, getColorFareball);
    setupCoat.addEventListener(`click`, getColorCout);
    setupEyes.addEventListener(`click`, getColorEyes);
  };

  const closePopup = () => {
    setup.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
    userNameInput.removeEventListener(`keydown`, inputStop);

    userNameInput.removeEventListener(`invalid`, formValidationName);
    userNameInput.removeEventListener(`input`, formLiveValidationName);

    setupFireball.removeEventListener(`click`, getColorFareball);
    setupCoat.removeEventListener(`click`, getColorCout);
    setupEyes.removeEventListener(`click`, getColorEyes);
  };

  // Логика формирования рандомного цвета
  const setupFireball = setup.querySelector(`.setup-fireball-wrap`);
  const setupCoat = setup.querySelector(`.setup-wizard .wizard-coat`);
  const setupEyes = setup.querySelector(`.setup-wizard .wizard-eyes`);

  const getColorFareball = () => window.util.getColor(window.data.FIREBALL_COLORS, setupFireball);
  const getColorCout = () => window.util.getColor(window.data.COAT_COLORS, setupCoat);
  const getColorEyes = () => window.util.getColor(window.data.EYES_COLORS, setupEyes);

})();

