'use strict';

(function () {
  window.data = {
    WIZARD_NAMES: [`Иван `, `Хуан Себастьян `, `Мария `, `Кристоф `, `Виктор `, `Юлия `, `Люпита `, `Вашингтон `],
    WIZARD_FULL_NAMES: [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`],
    COAT_COLORS: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    EYES_COLORS: [`black`, `red`, `blue`, `yellow`, `green`],
    FIREBALL_COLORS: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`],
  };

  // const createWizard = (count) => {
  //   const wizards = [];
  //   for (let i = 0; i < count; i++) {
  //     wizards.push({
  //       name: window.util.getElement(window.data.WIZARD_NAMES),
  //       fullName: window.util.getElement(window.data.WIZARD_FULL_NAMES),
  //       coatColor: window.util.getElement(window.data.COAT_COLORS),
  //       eyesColor: window.util.getElement(window.data.EYES_COLORS)
  //     });
  //   }
  //   return wizards;
  // };
  // const wizards = createWizard(WIZARDS_COUNT);
})();
