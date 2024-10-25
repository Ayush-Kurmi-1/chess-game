function blackPawn(current_position) {
  const img1 = "./piece/black/pown.png";
  return {
    current_position,
    img: "./piece/black/pown.png",
    piece_name: "BLACK_PAWN",
  };
}
function blackRook(current_position) {
  const img1 = "stylepiece\blackpngwing.com (3).png";
  return {
    current_position,
    img: "./piece/black/pngwing.com (3).png",
    piece_name: "BLACK_ROOK",
  };
}

function blackKnight(current_position) {
  const img1 = "./piece/black/pown.png";
  return {
    current_position,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOANtwV2jsL3vc9WYNigHuO6ev1rOgSXhng&s",
    piece_name: "BLACK_KNIGHT",
  };
}

function blackBishop(current_position) {
  const img1 = "stylepiece\blackpngwing.com (1).png";
  return {
    current_position,
    img: "./piece/black/pngwing.com (1).png",
    piece_name : "BLACK_BISHOP",
  };
}

function blackQueen(current_position) {
  const img1 = "stylepiece\blackpngwing.com (2).png";
  return {
    current_position,
    img: "./piece/black/pngwing.com (2).png",
    piece_name: "BLACK_QUEEN",
  };
}

function blackKing(current_position) {
  const img1 =
    "stylepiece\blackchess-titans-king-chess-piece-chess-set-king-chess-10d914efb210cc4d12397d92b5df1939.png";
  return {
    current_position,
    img: "./piece/black/chess-titans-king-chess-piece-chess-set-king-chess-10d914efb210cc4d12397d92b5df1939.png",
    piece_name: "BLACK_KING",
  };
}

// white pieces

function whitepawn(current_position) {
  const img2 = "./piece/white/pngegg (2).png";
  return {
    current_position,
    img: "./piece/white/pngegg (2).png",
    piece_name: "WHITE_PAWN",
  };
}

function whiteRook(current_position) {
  const img2 = "stylepiecewhitepinpng.com-chess-pieces-png-2207013.png";
  return {
    current_position,
    img: "./piece/white/pinpng.com-chess-pieces-png-2207013.png",
    piece_name: "WHITE_ROOK", 
  };
}

function whiteKnight(current_position) {
  const img2 = "stylepiecewhitepngegg.png";
  return {
    current_position,
    img: "./piece/white/pngegg.png",
    piece_name: "WHITE_KNIGHT",
  };
}

function whiteBishop(current_position) {
  const img2 =
    "style/piece/white/golden-chess-piece-bishop-nfkzozucwkgnytzy.png";
  return {
    current_position,
    img: "./piece/white/golden-chess-piece-bishop-nfkzozucwkgnytzy.png",
    piece_name: "WHITE_BISHOP",   
  };
}

function whiteQueen(current_position) {
  const img2 = "stylepiecewhitepinpng.com-chess-pieces-png-2206813.png";

  return {
    current_position,
    img: "./piece/white/pinpng.com-chess-pieces-png-2206813.png",
    piece_name: "WHITE_QUEEN",
  };
}

function whiteKing(current_position) {
  const img2 = "./piece/white/king.png";
  return {
    current_position,
    img: "./piece/white/—Pngtree—the majestic golden chess piece_15250610.png",
    piece_name: "WHITE_KING",  
  };
}

export {
  blackPawn,
  blackRook,
  blackKnight,
  blackBishop,
  blackQueen,
  blackKing,
  whitepawn,
  whiteRook,
  whiteKnight,
  whiteBishop,
  whiteQueen,
  whiteKing,
};
