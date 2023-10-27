import { AI, Player } from "./player";

test("attackPlayer hit", () => {
  const player1 = Player();
  const player2 = Player();
  player2.getBoard().placeShip([0, 0], [1, 0]);
  expect(player1.attackPlayer(player2, [0, 0])).toBe(true);
});

test("attackPlayer miss", () => {
  const player1 = Player();
  const player2 = Player();
  // Still true as attackPlayer only reports successful execution
  expect(player1.attackPlayer(player2, [0, 0])).toBe(true);
});

test("attackPlayer out of bounds", () => {
  const player1 = Player();
  const player2 = Player();
  expect(player1.attackPlayer(player2, [10, 10])).toBe(false);
});

test("valid board boundaries", () => {
  const player = Player();
  expect(player.getBoard().placeShip([9, 9], [9, 9])).toBe(true);
  expect(player.getBoard().placeShip([10, 10], [10, 10])).toBe(false);
});

test("AI attackPlayer one space hit", () => {
  const ai = AI();
  const player = Player();
  ai.attackPlayer(player);

  let hits = 0;
  const playerBoard = player.getBoard();

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (playerBoard.isSpaceHit([x, y])) hits++;
    }
  }

  expect(hits).toBe(1);
});
