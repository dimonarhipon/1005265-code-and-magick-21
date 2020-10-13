'use strict';

(function () {
  const dialogElement = document.querySelector(`.setup`);
  const dialogHandle = dialogElement.querySelector(`.upload`);

  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let dragged = false;
    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      dragged = true;
      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };
      // const dialogWidth = parseInt(getComputedStyle(dialogElement).getPropertyValue(`width`), 10);
      // const dialogHeight = parseInt(getComputedStyle(dialogElement).getPropertyValue(`height`), 10);

      dialogElement.style.top = dialogElement.offsetTop - shift.y + `px`;
      dialogElement.style.left = dialogElement.offsetLeft - shift.x + `px`;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
