import { Gameboard } from "../gameboard/gameboard";

const boardSize = 10;

const Player = () => {
  // Use 10x10 board
  const gameboard = Gameboard(boardSize, boardSize);

  const getBoard = () => gameboard;
  const attackPlayer = (player, coord) => {
    if (coord.length !== 2) return false;

    player.getBoard().receiveAttack(coord);
    return player.getBoard().isSpaceHit(coord);
  };

  return { attackPlayer, getBoard };
};

const AI = () => {
  const player = Player();
  let lastAttackCoordinate = null;

  const getLastAttackCoordinate = () => lastAttackCoordinate;

  const attackPlayer = (player) => {
    for (;;) {
      const x = Math.floor(Math.random() * boardSize);
      const y = Math.floor(Math.random() * boardSize);

      player.getBoard().receiveAttack([x, y]);

      // Loop until confirmed hit
      if (!player.getBoard().isSpaceHit([x, y])) continue;

      lastAttackCoordinate = [x, y];

      return true;
    }
  };

  return { getLastAttackCoordinate, attackPlayer, getBoard: player.getBoard };
};

export { Player, AI };
