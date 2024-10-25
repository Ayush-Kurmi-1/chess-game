import { root } from "../helper/constant.js";
import { global } from "../style/data.js";

function whitepawnClicked(){
  console.log("white pawn clicked");
}

function globalEvent() {
  root.addEventListener("click", (event) => {
    if(event.target.localName == "img") {
        const clikedId = event.target.alt;  
        const flatarr = global.flat();
        const square = flatarr.find((el) => el.id == clikedId);
        if(square.piece.piece_name == "WHITE_PAWN") {
          whitepawnClicked(); 
        }
        
        
    }
  });
}


export { globalEvent };