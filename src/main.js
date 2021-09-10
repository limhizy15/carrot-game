"use strict";

import PopUp from "./popup.js";
import { GameBuilder, Reason } from "./game.js";

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(5)
  .withCarrotCount(2)
  .withBugCount(2)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay ?";
      break;
    case Reason.win:
      message = "You WIN !";
      break;
    case Reason.lose:
      message = "You LOSE !";
      break;
    default:
      throw new Error("Not valid");
  }

  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
