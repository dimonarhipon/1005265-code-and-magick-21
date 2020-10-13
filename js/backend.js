'use strict';

(function () {
  const URL_POST = `https://21.javascript.pages.academy/code-and-magick`;
  const URL_GET = `https://21.javascript.pages.academy/code-and-magick/data`;

  const statusCode = {
    OK: 200,
  };

  const TIMEOUT_IN_MS = 7000;

  window.backend = {
    save: (data, onLoad, onError) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      // JSON.parse(xhr.response);
      xhr.addEventListener(`load`, function () {
        onLoad(xhr.response);
      });

      xhr.open(`POST`, URL_POST);
      xhr.send(data);
    },

    load: (onLoad, onError) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        if (statusCode.OK !== xhr.status) {
          onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
        }
        onLoad(xhr.response);
      });

      xhr.addEventListener(`error`, function () {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, function () {
        onError(`Запрос не успел выполниться за + ${xhr.timeout} мс`);
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open(`GET`, URL_GET);
      xhr.send();
    }
  };
})();
