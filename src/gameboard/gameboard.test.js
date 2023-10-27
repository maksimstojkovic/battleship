import { Gameboard } from "./gameboard";

test("placeShip success", () => {
  // Board is 10x10
  const board = Gameboard(10, 10);
  expect(board.placeShip([0, 0], [1, 0])).toBe(true);
});

test("placeShip diagonal", () => {
  // Board is 10x10
  const board = Gameboard(10, 10);
  expect(board.placeShip([0, 0], [1, 1])).toBe(false);
});

test("placeShip overlap", () => {
  const board = Gameboard(10, 10);
  expect(board.placeShip([0, 0], [1, 0])).toBe(true);
  expect(board.placeShip([0, 0], [0, 1])).toBe(false);
});

test("placeShip too long one side", () => {
  const board = Gameboard(10, 10);
  expect(board.placeShip([0, 0], [10, 0])).toBe(false);
});

test("placeShip too long two sides", () => {
  const board = Gameboard(10, 10);
  expect(board.placeShip([-1, 0], [10, 0])).toBe(false);
});

test("placeShip out of bounds", () => {
  const board = Gameboard(10, 10);
  expect(board.placeShip([10, 0], [11, 0])).toBe(false);
});

test("receiveAttack hit", () => {
  const board = Gameboard(10, 10);
  board.placeShip([0, 0], [1, 0]);
  expect(board.receiveAttack([0, 0])).toBe(true);
});

test("receiveAttack already hit", () => {
  const board = Gameboard(10, 10);
  board.placeShip([0, 0], [1, 0]);
  expect(board.receiveAttack([0, 0])).toBe(true);
  expect(board.receiveAttack([0, 0])).toBe(false);
});

test("receiveAttack miss", () => {
  const board = Gameboard(10, 10);
  expect(board.receiveAttack([0, 0])).toBe(false);
});

test("receiveAttack out of bounds", () => {
  const board = Gameboard(10, 10);
  expect(board.receiveAttack([10, 10])).toBe(false);
});

test("isSpaceHit already hit", () => {
  const board = Gameboard(10, 10);
  board.receiveAttack([0, 0]);
  expect(board.isSpaceHit([0, 0])).toBe(true);
});

test("isSpaceHit not hit", () => {
  const board = Gameboard(10, 10);
  expect(board.isSpaceHit([0, 0])).toBe(false);
});

test("isSpaceHit out of bounds", () => {
  const board = Gameboard(10, 10);
  expect(board.isSpaceHit([10, 10])).toBe(false);
});

test("allShipsSunk true", () => {
  const board = Gameboard(10, 10);
  board.placeShip([0, 0], [1, 0]);
  board.receiveAttack([0, 0]);
  board.receiveAttack([1, 0]);
  expect(board.allShipsSunk()).toBe(true);
});

test("allShipsSunk false", () => {
  const board = Gameboard(10, 10);
  board.placeShip([0, 0], [1, 0]);
  expect(board.allShipsSunk()).toBe(false);
});

test("allShipsSunk true for empty board", () => {
  const board = Gameboard(10, 10);
  expect(board.allShipsSunk()).toBe(true);
});
