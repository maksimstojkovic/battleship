const Ship = (initialHp) => {
  let hp = initialHp;

  const hit = () => {
    if (hp > 0) {
      hp--;
      return true;
    }
    return false;
  };

  const isSunk = () => hp <= 0;

  return { hit, isSunk };
};

export { Ship };
