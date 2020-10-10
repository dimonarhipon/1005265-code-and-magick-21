'use strict';

(function () {
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const GAP = 10;
  const FONT_GAP = 50;
  const TEXT_WIDTH = 50;
  const BAR_HEIGHT = -150;
  const BAR_WIDTH = 40;

  const CONTENT_X = CLOUD_X + GAP * 3;
  const CONTENT_Y = CLOUD_HEIGHT - GAP * 2;
  const GRAPH_Y = CLOUD_HEIGHT - GAP * 3;
  const TIME_Y = 220;
  const TEXT_X = CLOUD_WIDTH / 2;
  const TEXT_Y = CLOUD_Y * 2;
  const CONGRATULATION_TEXT = [`Ура вы победили!`, `Список результатов:`];

  const renderCloud = (ctx, x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };
  const writeText = (ctx, text, x, y) => {
    ctx.font = `16px PT Mono`;
    ctx.textBaseline = `hanging`;
    ctx.fillStyle = `rgb(0, 0, 0)`;
    ctx.fillText(text, x, y);
  };

  const getMaxElement = (arr) => {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = (ctx, players, times) => {
    renderCloud(
        ctx,
        CLOUD_X + 10,
        CLOUD_Y + 10,
        `rgba(0, 0, 0, 0.7)`
    );
    renderCloud(
        ctx,
        CLOUD_X,
        CLOUD_Y,
        `rgb(255, 255, 255)`
    );

    for (let i = 0; i < CONGRATULATION_TEXT.length; i++) {
      writeText(
          ctx,
          CONGRATULATION_TEXT[i],
          TEXT_X,
          TEXT_Y * (i + 1)
      );
    }

    let maxTime = getMaxElement(times);
    for (let i = 0; i < players.length; i++) {
      ctx.fillText(
          players[i],
          CONTENT_X + (TEXT_WIDTH + FONT_GAP) * i,
          CONTENT_Y
      );
      let time = Math.round(times[i]);
      ctx.fillText(
          time,
          CONTENT_X + (TEXT_WIDTH + FONT_GAP) * i,
          TIME_Y + ((BAR_HEIGHT * times[i]) / maxTime)
      );
    }
    for (let i = 0; i < players.length; i++) {
      if (players[i] === `Вы`) {
        ctx.fillStyle = `hsl(0, 100%, 50%)`;
      } else {
        let alfa = Math.round(Math.random() * 100);
        ctx.fillStyle = `hsl(207, ${alfa}%, 54%)`;
      }
      ctx.fillRect(
          CONTENT_X + (TEXT_WIDTH + FONT_GAP) * i,
          GRAPH_Y,
          BAR_WIDTH,
          (BAR_HEIGHT * times[i]) / maxTime
      );
    }
  };

})();
