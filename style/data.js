import { initGame } from "./index.js";
import { initGameRender } from "./rander.js";
import { globalEvent } from "../event/global.js";

const global = initGame();

initGameRender(global);
globalEvent();

export { global };






// import { greet } from "./index.js";
//         greet();