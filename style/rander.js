// // import black  pieces
import { blackPawn } from "./pices.js";
import { blackRook } from "./pices.js";
import { blackKnight } from "./pices.js";
import { blackBishop } from "./pices.js";
import { blackQueen } from "./pices.js";
import { blackKing } from "./pices.js";

// import white pieces

import { whiteBishop } from "./pices.js";
import { whitepawn } from "./pices.js";
import { whiteRook } from "./pices.js";
import { whiteKnight } from "./pices.js";
import { whiteQueen } from "./pices.js";
import { whiteKing } from "./pices.js";

import { root } from "../helper/constant.js";

function picesrender(data) {
  data.forEach((element) => {
    element.forEach((square) => {
      //    if square.piece is not null
      if (square.piece != "null") {
        const img = document.createElement("img");
        img.src = square.piece.img;
        img.alt = square.piece.current_position;

        // console.log(img);

        img.classList.add("pices");
        document.getElementById(square.id).appendChild(img);
      }
    });
  });
}

function initGameRender(data) {
  data.forEach((element) => {
    const row1 = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add(square.color, "square");
      squareDiv.id = square.id;

      // render Blackpawn
      if (square.id[1] == 7) {
        square.piece = blackPawn(square.id);
      }
      if (square.id == "c8" || square.id == "f8") {
        square.piece = blackBishop(square.id);
      }
      if (square.id == "e8") {
        square.piece = blackKing(square.id);
      }
      if (square.id == "a8" || square.id == "h8") {
        square.piece = blackRook(square.id);
      }
      if (square.id == "b8" || square.id == "g8") {
        square.piece = blackKnight(square.id);
      }
      if (square.id == "d8") {
        square.piece = blackQueen(square.id);
      }

      // render Whitepawn
      if (square.id[1] == 2) {
        square.piece = whitepawn(square.id);
      }
      if (square.id == "c1" || square.id == "f1") {
        square.piece = whiteBishop(square.id);
      }
      if (square.id == "e1") {
        square.piece = whiteKing(square.id);
      }
      if (square.id == "a1" || square.id == "h1") {
        square.piece = whiteRook(square.id);
      }
      if (square.id == "b1" || square.id == "g1") {
        square.piece = whiteKnight(square.id);
      }
      if (square.id == "d1") {
        square.piece = whiteQueen(square.id);
      }

      row1.appendChild(squareDiv);
    });
    row1.classList.add("squareRow");
    root.appendChild(row1);
  });
  picesrender(data);
}
export { initGameRender };
