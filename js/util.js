'use strict';

(function () {
  window.util = {
    getElement: (array) => {
      const randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },
    getColor: (array, element) => {
      const color = window.util.getElement(array);

      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    }
  };
})();

