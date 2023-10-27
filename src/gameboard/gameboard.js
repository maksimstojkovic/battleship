import { Ship } from "../ship/ship";

const Gameboard = (width, height) => {
  const board = [];
  const ships = [];

  for (let i = 0; i < width; i++) {
    board[i] = [];
    for (let j = 0; j < height; j++) {
      board[i][j] = { hit: false, ship: null };
    }
  }

  const getWidth = () => width;
  const getHeight = () => height;
  const getShips = () => ships;

  const placeShip = (coord1, coord2) => {
    const minX = Math.min(coord1[0], coord2[0]);
    const maxX = Math.max(coord1[0], coord2[0]);
    const minY = Math.min(coord1[1], coord2[1]);
    const maxY = Math.max(coord1[1], coord2[1]);

    // Out of bounds
    if (minX < 0 || maxX >= width || minY < 0 || maxY >= height) {
      return false;
    }

    // Diagonal
    if (!(minX === maxX || minY === maxY)) {
      return false;
    }

    // Overlap
    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        if (board[x][y].ship) return false;
      }
    }

    const ship = Ship(maxX - minX + (maxY - minY) + 1);
    ships.push(ship);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        board[x][y].ship = ship;
      }
    }

    return true;
  };

  const receiveAttack = (coord) => {
    let x = coord[0];
    let y = coord[1];

    // Out of bounds
    if (x < 0 || x >= width || y < 0 || y >= height) return false;

    // Already hit
    if (board[x][y].hit) return false;

    board[x][y].hit = true;

    if (board[x][y].ship) {
      board[x][y].ship.hit();
      return true;
    }

    return false;
  };

  const checkCoordinate = (coord, func) => {
    let x = coord[0];
    let y = coord[1];

    if (x < 0 || x >= width || y < 0 || y >= height) return false;

    return func(coord);
  };

  const isShip = (coord) => {
    return checkCoordinate(coord, (coord) => !!board[coord[0]][coord[1]].ship);
  };

  const isSpaceHit = (coord) => {
    return checkCoordinate(coord, (coord) => board[coord[0]][coord[1]].hit);
  };

  const isShipHit = (coord) => {
    return isSpaceHit(coord) && isShip(coord);
  };

  const allShipsSunk = () => {
    return ships.reduce((allSunk, ship) => allSunk && ship.isSunk(), true);
  };

  const printBoard = () => {
    const output = [];

    for (let y = 0; y < height; y++) {
      output.push(height - y - 1);
      for (let x = 0; x < width; x++) {
        output.push(
          board[x][height - y - 1].hit
            ? "X"
            : board[x][height - y - 1].ship
            ? "O"
            : " "
        );
      }
      output.push("\n");
    }

    output.push(" ");
    for (let x = 0; x < width; x++) output.push(x);

    console.log(output.join(""));
  };

  return {
    getWidth,
    getHeight,
    getShips,
    placeShip,
    receiveAttack,
    isShip,
    isSpaceHit,
    isShipHit,
    allShipsSunk,
    printBoard,
  };
};

export { Gameboard };
