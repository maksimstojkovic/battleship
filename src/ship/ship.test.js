import { Ship } from "./ship";

test("hit success", () => {
  const ship = Ship(1);
  expect(ship.hit()).toBe(true);
});

test("hit fail", () => {
  const ship = Ship(1);
  expect(ship.hit()).toBe(true);
  expect(ship.hit()).toBe(false);
});

test("isSunk true", () => {
  const ship = Ship(1);
  expect(ship.isSunk()).toBe(false);
});

test("isSunk false", () => {
  const ship = Ship(1);
  expect(ship.hit()).toBe(true);
  expect(ship.isSunk()).toBe(true);
});
