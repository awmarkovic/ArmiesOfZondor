// @ts-check

import { HeaderModule } from "./modules/HeaderModule.js";
import { ResourcesModule } from "./modules/ResourcesModule.js";

HeaderModule.displayHeader();

// Event listeners for the buttons
const woodButton = document.querySelector("#wood-picture");

if (woodButton) {
  woodButton.addEventListener("click", ResourcesModule.chopWood);
}

const miningButton = document.querySelector("#mines-picture");

if (miningButton) {
  miningButton.addEventListener("click", ResourcesModule.mining);
}
