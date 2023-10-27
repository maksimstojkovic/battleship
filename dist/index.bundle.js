/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/gameboard/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/ship/ship.js");


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

    const ship = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(maxX - minX + (maxY - minY));
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

  const isSpaceHit = (coord) => {
    let x = coord[0];
    let y = coord[1];

    if (x < 0 || x >= width || y < 0 || y >= height) return false;

    return board[x][y].hit;
  };

  const isShipHit = (coord) => {
    let x = coord[0];
    let y = coord[1];

    return isSpaceHit(coord) && !!board[x][y].ship;
  };

  const allShipsSunk = () => {
    let allSunk = true;

    for (let ship of ships) {
      if (!ship.isSunk()) {
        allSunk = false;
        break;
      }
    }

    return allSunk;
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
    isSpaceHit,
    isShipHit,
    allShipsSunk,
    printBoard,
  };
};




/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ AI),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard */ "./src/gameboard/gameboard.js");


const boardSize = 10;

const Player = () => {
  // Use 10x10 board
  const gameboard = (0,_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(boardSize, boardSize);

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




/***/ }),

/***/ "./src/ship/ship.js":
/*!**************************!*\
  !*** ./src/ship/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");


const printBoards = (player1, player2) => {
  console.log("----------");
  player1.getBoard().printBoard();
  player2.getBoard().printBoard();
  console.log("----------");
};

const requestCoordinates = (msg) => {
  const coordList = [];
  let coords = [];
  let promptMsg = msg;

  for (;;) {
    const coordsRaw = prompt(promptMsg);
    if (!coordsRaw) return [[]];

    coords = coordsRaw
      .replace("[", "")
      .replace("]", "")
      .replace(" ", "")
      .split(",")
      .map((coord) => Number(coord));

    let retry = coords.length % 2 !== 0;
    for (let value of coords) {
      if (typeof value !== "number" || isNaN(value)) {
        retry = true;
        promptMsg = "Invalid format. Try again!\n" + msg;
        break;
      }
    }

    if (retry) continue;

    break;
  }

  for (let i = 0; i < coords.length; i += 2) {
    coordList.push([coords[i], coords[i + 1]]);
  }

  return coordList;
};

const placeAllShips = (player) => {
  const availableShips = [2];
  // const availableShips = [2, 3, 3, 4, 5];

  for (let shipLength of availableShips) {
    for (;;) {
      const coords = requestCoordinates(
        `Enter coordinates for a ship of length ${shipLength} in format [[x1,y1],[x2,y2]]`
      );

      if (!coords) continue;

      const minX = Math.min(coords[0][0], coords[1][0]);
      const maxX = Math.max(coords[0][0], coords[1][0]);
      const minY = Math.min(coords[0][1], coords[1][1]);
      const maxY = Math.max(coords[0][1], coords[1][1]);

      if (maxX - minX + (maxY - minY) != shipLength) continue;
      if (!player.getBoard().placeShip(...coords)) continue;

      console.log(
        `Ship of length ${shipLength} placed at ${coords[0]}, ${coords[1]}`
      );

      break;
    }
  }
};

const placeAllShipsAuto = (player) => {
  const availableShips = [2];
  // const availableShips = [2, 3, 3, 4, 5];
  const playerBoard = player.getBoard();

  for (let shipLength of availableShips) {
    for (;;) {
      const isHorizontal = Math.random() < 0.5;

      let x = -1;
      let y = -1;
      let shipPlaced = false;

      if (isHorizontal) {
        x = Math.floor(Math.random() * (playerBoard.getWidth() - shipLength));
        y = Math.floor(Math.random() * playerBoard.getHeight());
        shipPlaced = playerBoard.placeShip([x, y], [x + shipLength - 1, y]);
      } else {
        x = Math.floor(Math.random() * playerBoard.getWidth());
        y = Math.floor(Math.random() * (playerBoard.getHeight() - shipLength));
        shipPlaced = playerBoard.placeShip([x, y], [x, y + shipLength - 1]);
      }

      if (!shipPlaced) continue;

      break;
    }
  }
};

const Game = (() => {
  const play = () => {
    const player = (0,_player_player__WEBPACK_IMPORTED_MODULE_0__.Player)();
    const ai = (0,_player_player__WEBPACK_IMPORTED_MODULE_0__.AI)();

    // placeAllShips(player);
    placeAllShipsAuto(player);
    placeAllShipsAuto(ai);

    while (!player.getBoard().allShipsSunk() && !ai.getBoard().allShipsSunk()) {
      let msg = "Enter the coordinate to strike in the format [x,y]";
      for (;;) {
        printBoards(player, ai);

        // Player attacks

        const coord = requestCoordinates(msg);
        const attackSuccessful = player.attackPlayer(ai, ...coord);

        if (!attackSuccessful) {
          msg = "Invalid coordinate specified, try again using format [x,y]";
          continue;
        }

        if (ai.getBoard().isShipHit(...coord) && !ai.getBoard().allShipsSunk())
          continue;

        break;
      }

      // Check win
      if (ai.getBoard().allShipsSunk()) break;

      for (;;) {
        // AI attacks
        if (!ai.attackPlayer(player)) continue;

        if (
          player.getBoard().isShipHit(ai.getLastAttackCoordinate()) &&
          !player.getBoard().allShipsSunk()
        )
          continue;

        break;
      }
    }

    if (ai.getBoard().allShipsSunk()) {
      // Player wins
    } else {
      // Computer wins
    }
  };

  return { play };
})();

Game.play();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFNO0FBQ3pCLGVBQWUsa0RBQUU7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQ7O0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIGJvYXJkW2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgYm9hcmRbaV1bal0gPSB7IGhpdDogZmFsc2UsIHNoaXA6IG51bGwgfTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRXaWR0aCA9ICgpID0+IHdpZHRoO1xuICBjb25zdCBnZXRIZWlnaHQgPSAoKSA9PiBoZWlnaHQ7XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkMSwgY29vcmQyKSA9PiB7XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKGNvb3JkMVswXSwgY29vcmQyWzBdKTtcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoY29vcmQxWzBdLCBjb29yZDJbMF0pO1xuICAgIGNvbnN0IG1pblkgPSBNYXRoLm1pbihjb29yZDFbMV0sIGNvb3JkMlsxXSk7XG4gICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGNvb3JkMVsxXSwgY29vcmQyWzFdKTtcblxuICAgIC8vIE91dCBvZiBib3VuZHNcbiAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+PSB3aWR0aCB8fCBtaW5ZIDwgMCB8fCBtYXhZID49IGhlaWdodCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIERpYWdvbmFsXG4gICAgaWYgKCEobWluWCA9PT0gbWF4WCB8fCBtaW5ZID09PSBtYXhZKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE92ZXJsYXBcbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0uc2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKG1heFggLSBtaW5YICsgKG1heFkgLSBtaW5ZKSk7XG4gICAgc2hpcHMucHVzaChzaGlwKTtcblxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3ldLnNoaXAgPSBzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuICAgIGxldCB5ID0gY29vcmRbMV07XG5cbiAgICAvLyBPdXQgb2YgYm91bmRzXG4gICAgaWYgKHggPCAwIHx8IHggPj0gd2lkdGggfHwgeSA8IDAgfHwgeSA+PSBoZWlnaHQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIEFscmVhZHkgaGl0XG4gICAgaWYgKGJvYXJkW3hdW3ldLmhpdCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcblxuICAgIGlmIChib2FyZFt4XVt5XS5zaGlwKSB7XG4gICAgICBib2FyZFt4XVt5XS5zaGlwLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGlzU3BhY2VIaXQgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuICAgIGxldCB5ID0gY29vcmRbMV07XG5cbiAgICBpZiAoeCA8IDAgfHwgeCA+PSB3aWR0aCB8fCB5IDwgMCB8fCB5ID49IGhlaWdodCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGJvYXJkW3hdW3ldLmhpdDtcbiAgfTtcblxuICBjb25zdCBpc1NoaXBIaXQgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuICAgIGxldCB5ID0gY29vcmRbMV07XG5cbiAgICByZXR1cm4gaXNTcGFjZUhpdChjb29yZCkgJiYgISFib2FyZFt4XVt5XS5zaGlwO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgYWxsU3VuayA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWxsU3VuaztcbiAgfTtcblxuICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgb3V0cHV0LnB1c2goaGVpZ2h0IC0geSAtIDEpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKFxuICAgICAgICAgIGJvYXJkW3hdW2hlaWdodCAtIHkgLSAxXS5oaXRcbiAgICAgICAgICAgID8gXCJYXCJcbiAgICAgICAgICAgIDogYm9hcmRbeF1baGVpZ2h0IC0geSAtIDFdLnNoaXBcbiAgICAgICAgICAgID8gXCJPXCJcbiAgICAgICAgICAgIDogXCIgXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIG91dHB1dC5wdXNoKFwiXFxuXCIpO1xuICAgIH1cblxuICAgIG91dHB1dC5wdXNoKFwiIFwiKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIG91dHB1dC5wdXNoKHgpO1xuXG4gICAgY29uc29sZS5sb2cob3V0cHV0LmpvaW4oXCJcIikpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0V2lkdGgsXG4gICAgZ2V0SGVpZ2h0LFxuICAgIGdldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzU3BhY2VIaXQsXG4gICAgaXNTaGlwSGl0LFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBwcmludEJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkL2dhbWVib2FyZFwiO1xuXG5jb25zdCBib2FyZFNpemUgPSAxMDtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICAvLyBVc2UgMTB4MTAgYm9hcmRcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKGJvYXJkU2l6ZSwgYm9hcmRTaXplKTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGdhbWVib2FyZDtcbiAgY29uc3QgYXR0YWNrUGxheWVyID0gKHBsYXllciwgY29vcmQpID0+IHtcbiAgICBpZiAoY29vcmQubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XG5cbiAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICByZXR1cm4gcGxheWVyLmdldEJvYXJkKCkuaXNTcGFjZUhpdChjb29yZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYXR0YWNrUGxheWVyLCBnZXRCb2FyZCB9O1xufTtcblxuY29uc3QgQUkgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuICBsZXQgbGFzdEF0dGFja0Nvb3JkaW5hdGUgPSBudWxsO1xuXG4gIGNvbnN0IGdldExhc3RBdHRhY2tDb29yZGluYXRlID0gKCkgPT4gbGFzdEF0dGFja0Nvb3JkaW5hdGU7XG5cbiAgY29uc3QgYXR0YWNrUGxheWVyID0gKHBsYXllcikgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG5cbiAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcblxuICAgICAgLy8gTG9vcCB1bnRpbCBjb25maXJtZWQgaGl0XG4gICAgICBpZiAoIXBsYXllci5nZXRCb2FyZCgpLmlzU3BhY2VIaXQoW3gsIHldKSkgY29udGludWU7XG5cbiAgICAgIGxhc3RBdHRhY2tDb29yZGluYXRlID0gW3gsIHldO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0TGFzdEF0dGFja0Nvb3JkaW5hdGUsIGF0dGFja1BsYXllciwgZ2V0Qm9hcmQ6IHBsYXllci5nZXRCb2FyZCB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyLCBBSSB9O1xuIiwiY29uc3QgU2hpcCA9IChpbml0aWFsSHApID0+IHtcbiAgbGV0IGhwID0gaW5pdGlhbEhwO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBpZiAoaHAgPiAwKSB7XG4gICAgICBocC0tO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBocCA8PSAwO1xuXG4gIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEFJLCBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5cbmNvbnN0IHByaW50Qm9hcmRzID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tXCIpO1xuICBwbGF5ZXIxLmdldEJvYXJkKCkucHJpbnRCb2FyZCgpO1xuICBwbGF5ZXIyLmdldEJvYXJkKCkucHJpbnRCb2FyZCgpO1xuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1cIik7XG59O1xuXG5jb25zdCByZXF1ZXN0Q29vcmRpbmF0ZXMgPSAobXNnKSA9PiB7XG4gIGNvbnN0IGNvb3JkTGlzdCA9IFtdO1xuICBsZXQgY29vcmRzID0gW107XG4gIGxldCBwcm9tcHRNc2cgPSBtc2c7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGNvb3Jkc1JhdyA9IHByb21wdChwcm9tcHRNc2cpO1xuICAgIGlmICghY29vcmRzUmF3KSByZXR1cm4gW1tdXTtcblxuICAgIGNvb3JkcyA9IGNvb3Jkc1Jhd1xuICAgICAgLnJlcGxhY2UoXCJbXCIsIFwiXCIpXG4gICAgICAucmVwbGFjZShcIl1cIiwgXCJcIilcbiAgICAgIC5yZXBsYWNlKFwiIFwiLCBcIlwiKVxuICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgLm1hcCgoY29vcmQpID0+IE51bWJlcihjb29yZCkpO1xuXG4gICAgbGV0IHJldHJ5ID0gY29vcmRzLmxlbmd0aCAlIDIgIT09IDA7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgY29vcmRzKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKHZhbHVlKSkge1xuICAgICAgICByZXRyeSA9IHRydWU7XG4gICAgICAgIHByb21wdE1zZyA9IFwiSW52YWxpZCBmb3JtYXQuIFRyeSBhZ2FpbiFcXG5cIiArIG1zZztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJldHJ5KSBjb250aW51ZTtcblxuICAgIGJyZWFrO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBjb29yZExpc3QucHVzaChbY29vcmRzW2ldLCBjb29yZHNbaSArIDFdXSk7XG4gIH1cblxuICByZXR1cm4gY29vcmRMaXN0O1xufTtcblxuY29uc3QgcGxhY2VBbGxTaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgYXZhaWxhYmxlU2hpcHMgPSBbMl07XG4gIC8vIGNvbnN0IGF2YWlsYWJsZVNoaXBzID0gWzIsIDMsIDMsIDQsIDVdO1xuXG4gIGZvciAobGV0IHNoaXBMZW5ndGggb2YgYXZhaWxhYmxlU2hpcHMpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCBjb29yZHMgPSByZXF1ZXN0Q29vcmRpbmF0ZXMoXG4gICAgICAgIGBFbnRlciBjb29yZGluYXRlcyBmb3IgYSBzaGlwIG9mIGxlbmd0aCAke3NoaXBMZW5ndGh9IGluIGZvcm1hdCBbW3gxLHkxXSxbeDIseTJdXWBcbiAgICAgICk7XG5cbiAgICAgIGlmICghY29vcmRzKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgbWluWCA9IE1hdGgubWluKGNvb3Jkc1swXVswXSwgY29vcmRzWzFdWzBdKTtcbiAgICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChjb29yZHNbMF1bMF0sIGNvb3Jkc1sxXVswXSk7XG4gICAgICBjb25zdCBtaW5ZID0gTWF0aC5taW4oY29vcmRzWzBdWzFdLCBjb29yZHNbMV1bMV0pO1xuICAgICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGNvb3Jkc1swXVsxXSwgY29vcmRzWzFdWzFdKTtcblxuICAgICAgaWYgKG1heFggLSBtaW5YICsgKG1heFkgLSBtaW5ZKSAhPSBzaGlwTGVuZ3RoKSBjb250aW51ZTtcbiAgICAgIGlmICghcGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKC4uLmNvb3JkcykpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFNoaXAgb2YgbGVuZ3RoICR7c2hpcExlbmd0aH0gcGxhY2VkIGF0ICR7Y29vcmRzWzBdfSwgJHtjb29yZHNbMV19YFxuICAgICAgKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwbGFjZUFsbFNoaXBzQXV0byA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgYXZhaWxhYmxlU2hpcHMgPSBbMl07XG4gIC8vIGNvbnN0IGF2YWlsYWJsZVNoaXBzID0gWzIsIDMsIDMsIDQsIDVdO1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IHBsYXllci5nZXRCb2FyZCgpO1xuXG4gIGZvciAobGV0IHNoaXBMZW5ndGggb2YgYXZhaWxhYmxlU2hpcHMpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCBpc0hvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuXG4gICAgICBsZXQgeCA9IC0xO1xuICAgICAgbGV0IHkgPSAtMTtcbiAgICAgIGxldCBzaGlwUGxhY2VkID0gZmFsc2U7XG5cbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwbGF5ZXJCb2FyZC5nZXRXaWR0aCgpIC0gc2hpcExlbmd0aCkpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxheWVyQm9hcmQuZ2V0SGVpZ2h0KCkpO1xuICAgICAgICBzaGlwUGxhY2VkID0gcGxheWVyQm9hcmQucGxhY2VTaGlwKFt4LCB5XSwgW3ggKyBzaGlwTGVuZ3RoIC0gMSwgeV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYXllckJvYXJkLmdldFdpZHRoKCkpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBsYXllckJvYXJkLmdldEhlaWdodCgpIC0gc2hpcExlbmd0aCkpO1xuICAgICAgICBzaGlwUGxhY2VkID0gcGxheWVyQm9hcmQucGxhY2VTaGlwKFt4LCB5XSwgW3gsIHkgKyBzaGlwTGVuZ3RoIC0gMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNoaXBQbGFjZWQpIGNvbnRpbnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IFBsYXllcigpO1xuICAgIGNvbnN0IGFpID0gQUkoKTtcblxuICAgIC8vIHBsYWNlQWxsU2hpcHMocGxheWVyKTtcbiAgICBwbGFjZUFsbFNoaXBzQXV0byhwbGF5ZXIpO1xuICAgIHBsYWNlQWxsU2hpcHNBdXRvKGFpKTtcblxuICAgIHdoaWxlICghcGxheWVyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkgJiYgIWFpLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGxldCBtc2cgPSBcIkVudGVyIHRoZSBjb29yZGluYXRlIHRvIHN0cmlrZSBpbiB0aGUgZm9ybWF0IFt4LHldXCI7XG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIHByaW50Qm9hcmRzKHBsYXllciwgYWkpO1xuXG4gICAgICAgIC8vIFBsYXllciBhdHRhY2tzXG5cbiAgICAgICAgY29uc3QgY29vcmQgPSByZXF1ZXN0Q29vcmRpbmF0ZXMobXNnKTtcbiAgICAgICAgY29uc3QgYXR0YWNrU3VjY2Vzc2Z1bCA9IHBsYXllci5hdHRhY2tQbGF5ZXIoYWksIC4uLmNvb3JkKTtcblxuICAgICAgICBpZiAoIWF0dGFja1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICBtc2cgPSBcIkludmFsaWQgY29vcmRpbmF0ZSBzcGVjaWZpZWQsIHRyeSBhZ2FpbiB1c2luZyBmb3JtYXQgW3gseV1cIjtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhaS5nZXRCb2FyZCgpLmlzU2hpcEhpdCguLi5jb29yZCkgJiYgIWFpLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpXG4gICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIHdpblxuICAgICAgaWYgKGFpLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpIGJyZWFrO1xuXG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIC8vIEFJIGF0dGFja3NcbiAgICAgICAgaWYgKCFhaS5hdHRhY2tQbGF5ZXIocGxheWVyKSkgY29udGludWU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5nZXRCb2FyZCgpLmlzU2hpcEhpdChhaS5nZXRMYXN0QXR0YWNrQ29vcmRpbmF0ZSgpKSAmJlxuICAgICAgICAgICFwbGF5ZXIuZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKVxuICAgICAgICApXG4gICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFpLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIC8vIFBsYXllciB3aW5zXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbXB1dGVyIHdpbnNcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheSB9O1xufSkoKTtcblxuR2FtZS5wbGF5KCk7XG5cbmV4cG9ydCB7IEdhbWUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==