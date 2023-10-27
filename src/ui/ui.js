import { prependChild, appendChild } from "../helper";

const UI = (() => {
  const boardSize = 10; // Width and height of game board
  const body = document.querySelector("body");
  let player1Obj = null;
  let player2Obj = null;

  const setStatus = (msg) => {
    document.querySelector(".status").textContent = msg;
  };

  const gameOver = (playerNumber) => {
    setStatus(`Player ${playerNumber} Wins!`);
  };

  const addGridListener = (player, handler) => {
    [player1Obj, player2Obj].forEach((p, index) => {
      if (p === player) {
        const grid = document.querySelector(
          `.board:nth-of-type(${index + 1}) .grid`
        );
        grid.querySelectorAll(".grid-cell").forEach((cell) => {
          cell.addEventListener("click", handler);
        });
      }
    });
  };

  const attackClickHandler = (e) => {
    const x = e.target.dataset.col;
    const y = e.target.dataset.row;

    // Already hit
    if (player2Obj.getBoard().isSpaceHit([x, y])) return;

    // Check for invalid attack
    if (!player1Obj.attackPlayer(player2Obj, [x, y])) return;

    // Reload grid
    UI.renderGrids();

    // Check if player 1 won
    if (player2Obj.getBoard().allShipsSunk()) return gameOver(1);

    // Re-add attack click handlers to grid
    addGridListener(player2Obj, attackClickHandler);

    // Give player 1 another shot if successful hit
    if (player2Obj.getBoard().isShipHit([x, y])) return;

    // Player 2's turn
    for (;;) {
      const coord = player2Obj.generateCoordinate();

      // Already hit
      if (player1Obj.getBoard().isSpaceHit(coord)) continue;

      // Check for invalid attack
      if (!player2Obj.attackPlayer(player1Obj, coord)) continue;

      // Reload grid
      UI.renderGrids();

      // Check if player 2 won
      if (player1Obj.getBoard().allShipsSunk()) return gameOver(2);

      // Re-add attack click handlers to grid
      addGridListener(player2Obj, attackClickHandler);

      // Give player 2 another shot if successful hit
      if (player1Obj.getBoard().isShipHit(coord)) continue;

      break;
    }
  };

  const buildGrid = (parent, player) => {
    for (let y = boardSize - 1; y >= 0; y--) {
      appendChild(parent, "p", "grid-y-index").textContent = y;
      for (let x = 0; x < boardSize; x++) {
        const isShip = player.getBoard().isShip([x, y]);
        const spaceHit = player.getBoard().isSpaceHit([x, y]);
        const shipHit = player.getBoard().isShipHit([x, y]);
        const classes =
          "grid-cell" +
          (shipHit ? " hit" : spaceHit ? " miss" : isShip ? " ship" : "");
        const space = appendChild(parent, "button", classes);
        space.dataset.col = x;
        space.dataset.row = y;
      }
    }

    appendChild(parent, "p", "grid-x-index");
    for (let x = 0; x < boardSize; x++) {
      appendChild(parent, "p", "grid-x-index").textContent = x;
    }
  };

  const renderGrids = () => {
    [player1Obj, player2Obj].forEach((player, index) => {
      const grid = document.querySelector(
        `.board:nth-of-type(${index + 1}) .grid`
      );
      grid.replaceChildren();
      buildGrid(grid, player);
    });
  };

  const render = (gamePlayer1, gamePlayer2) => {
    player1Obj = gamePlayer1;
    player2Obj = gamePlayer2;

    const container = prependChild(body, "div", "container");

    // Create status message and boards
    appendChild(container, "h1", "status").textContent = "Placeholder";
    const boards = appendChild(container, "div", "boards");
    const player1 = appendChild(boards, "div", "board player-1");
    const player2 = appendChild(boards, "div", "board player-2");

    const player1Title = appendChild(player1, "h2", "title");
    player1Title.textContent = "Player 1";
    appendChild(player1, "div", "grid");

    const player2Title = appendChild(player2, "h2", "title");
    player2Title.textContent = "Player 2";
    appendChild(player2, "div", "grid");

    renderGrids();
  };

  return {
    setStatus,
    addGridListener,
    attackClickHandler,
    renderGrids,
    render,
  };
})();

export { UI };
