'use strict';


(function () {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  window.validation = {
    send: (input) => {
      if (input.validity.tooShort) {
        input.setCustomValidity(`Длинна поля должна состоять минимум из 2-х символов`);
      } else if (input.validity.tooLong) {
        input.setCustomValidity(`Длинна поля не должна превышать 25-ти символов`);
      } else if (input.validity.valueMissing) {
        input.setCustomValidity(`Обязательное поле`);
      } else {
        input.setCustomValidity(``);
      }
    },
    live: (input) => {
      const valueLength = input.value.length;
      if (valueLength < MIN_NAME_LENGTH) {
        input.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
      } else if (valueLength > MAX_NAME_LENGTH) {
        input.setCustomValidity(`Удалите лишние симв.`);
      } else {
        input.setCustomValidity(``);
      }
      input.reportValidity();
    }
  };
})();
