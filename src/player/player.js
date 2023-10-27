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

  const generateCoordinate = () => {
    const x = Math.floor(Math.random() * boardSize);
    const y = Math.floor(Math.random() * boardSize);
    return [x, y];
  };

  return {
    generateCoordinate,
    attackPlayer: player.attackPlayer,
    getBoard: player.getBoard,
  };
};

export { Player, AI };
