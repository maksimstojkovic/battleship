const Gameboard = () => {
  const shots = [];
  const ships = [];

  for (let i = 0; i < 8; i++) {
    shots[i] = [];
    for (let j = 0; j < 8; j++) {
      shots[i][j] = 0;
    }
  }

  const placeShip = () => {};
  const receiveAttack = () => {};
  const gameOver = () => {};

  return { placeShip, receiveAttack, gameOver };
};

export { Gameboard };
