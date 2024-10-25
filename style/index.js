function Square(color, id, piece) {
  return { color, id, piece };
}

function SquareRow(rowId) {
  const SquareRow = [];
  const abcd = ["a", "b", "c", "d", "e", "f", "g", "h"];

  if (rowId % 2 == 0) {
    abcd.forEach((element, index) => {
      if (index % 2 == 0) {
        SquareRow.push(Square("white", element + rowId, "null"));
      } else {
        SquareRow.push(Square("BLACK", element + rowId, "null"));
      }
    });
  } else {
    abcd.forEach((element, index) => {
      if (index % 2 == 0) {
        // console.log(element , index);
        SquareRow.push(Square("BLACK", element + rowId, "null"));
      } else {
        SquareRow.push(Square("white", element + rowId, "null"));
      }
    });
  }
  return SquareRow;
}

function initGame() {
  return [
    SquareRow(8),
    SquareRow(7),
    SquareRow(6),
    SquareRow(5),
    SquareRow(4),
    SquareRow(3),
    SquareRow(2),
    SquareRow(1),
  ];
}

export { initGame };
