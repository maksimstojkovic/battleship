const Ship = (initialHp) => {
  let hp = initialHp;

  const hit = () => {
    hp--;
  };

  const isSunk = () => hp <= 0;

  return { hit, isSunk };
};

export { Ship };
