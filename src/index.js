import "./style.scss";
import { AI, Player } from "./player/player";
import { UI } from "./ui/ui";

const printBoards = (player1, player2) => {
  console.log("----------");
  player1.getBoard().printBoard();
  player2.getBoard().printBoard();
  console.log("----------");
};

const requestCoordinates = (msg) => {
  const coordList = [];
  let coords = [];
  let promptMsg = msg;

  for (;;) {
    const coordsRaw = prompt(promptMsg);
    if (!coordsRaw) return [[]];

    coords = coordsRaw
      .replace("[", "")
      .replace("]", "")
      .replace(" ", "")
      .split(",")
      .map((coord) => Number(coord));

    let retry = coords.length % 2 !== 0;
    for (let value of coords) {
      if (typeof value !== "number" || isNaN(value)) {
        retry = true;
        promptMsg = "Invalid format. Try again!\n" + msg;
        break;
      }
    }

    if (retry) continue;

    break;
  }

  for (let i = 0; i < coords.length; i += 2) {
    coordList.push([coords[i], coords[i + 1]]);
  }

  return coordList;
};

const placeAllShips = (player) => {
  const availableShips = [2, 3, 3, 4, 5];

  for (let shipLength of availableShips) {
    for (;;) {
      const coords = requestCoordinates(
        `Enter coordinates for a ship of length ${shipLength} in format [[x1,y1],[x2,y2]]`
      );

      if (!coords) continue;

      const minX = Math.min(coords[0][0], coords[1][0]);
      const maxX = Math.max(coords[0][0], coords[1][0]);
      const minY = Math.min(coords[0][1], coords[1][1]);
      const maxY = Math.max(coords[0][1], coords[1][1]);

      if (maxX - minX + (maxY - minY) != shipLength) continue;
      if (!player.getBoard().placeShip(...coords)) continue;

      console.log(
        `Ship of length ${shipLength} placed at ${coords[0]}, ${coords[1]}`
      );

      break;
    }
  }
};

const placeAllShipsAuto = (player) => {
  const availableShips = [2, 3, 3, 4, 5];
  const playerBoard = player.getBoard();

  for (let shipLength of availableShips) {
    for (;;) {
      const isHorizontal = Math.random() < 0.5;

      let x = -1;
      let y = -1;
      let shipPlaced = false;

      if (isHorizontal) {
        x = Math.floor(Math.random() * (playerBoard.getWidth() - shipLength));
        y = Math.floor(Math.random() * playerBoard.getHeight());
        shipPlaced = playerBoard.placeShip([x, y], [x + shipLength - 1, y]);
      } else {
        x = Math.floor(Math.random() * playerBoard.getWidth());
        y = Math.floor(Math.random() * (playerBoard.getHeight() - shipLength));
        shipPlaced = playerBoard.placeShip([x, y], [x, y + shipLength - 1]);
      }

      if (!shipPlaced) continue;

      break;
    }
  }
};

const Game = (() => {
  let player1 = null;
  let player2 = null;

  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;

  const init = () => {
    player1 = Player();
    player2 = AI();
  };

  const play = () => {
    // placeAllShips(player);
    placeAllShipsAuto(player1);
    placeAllShipsAuto(player2);

    UI.renderGrids();
    UI.addGridListener(player2, UI.attackClickHandler);
  };

  return { getPlayer1, getPlayer2, init, play };
})();

// Game.play();
Game.init();
UI.render(Game.getPlayer1(), Game.getPlayer2());
Game.play();

// UI.setStatus("Select positions for ship of length 2");

export { Game };
