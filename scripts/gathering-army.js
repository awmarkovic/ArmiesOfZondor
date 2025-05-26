//@ts-check

import { WarriorModule } from "./modules/WarriorModule.js";
import { WarMachineModule } from "./modules/WarMachineModule.js";
import { HeaderModule } from "./modules/HeaderModule.js";
import { AnimalModule } from "./modules/AnimalModule.js";
HeaderModule.displayHeader();

const displayWarriors = () => {
  const warriorsContainer = document.querySelector("#warriors-container");

  WarriorModule.warriorData.forEach((warrior) => {
    const warriorCard = document.createElement("div");
    warriorCard.classList.add("card");

    warriorCard.innerHTML = `
      <h3>${warrior.displayName}</h3>
      <img src="./images/${warrior.image}" alt="Picture of a warrior">
      <br><br>
      <button class="purchase-button" id="buy-${warrior.name}-button">Buy Warrior: <img class="resource-icon" src="./images/gold-coin.png"/>${warrior.priceGold}</button>
    `;

    if (warriorsContainer) {
      warriorsContainer.appendChild(warriorCard);
    }

    const buyWarriorButton = document.querySelector(
      `#buy-${warrior.name}-button`
    );
    if (buyWarriorButton) {
      buyWarriorButton.addEventListener("click", () => {
        WarriorModule.purchase(warrior.name);
      });
    }
  });
};

const displayAnimals = () => {
  const animalContainer = document.querySelector("#animal-container");

  AnimalModule.animalsData.forEach((animal) => {
    const animalCard = document.createElement("div");
    animalCard.classList.add("card", "card--animal");

    animalCard.innerHTML = `
      <h3>${animal.type}</h3>
      <img src="./images/${animal.image}" alt="Picture of either an animal or a war machine">
      <br><br>
      <button class="purchase-button" id="buy-${animal.type}-button">Buy Animal: <img class="resource-icon" src="./images/gold-coin.png"/>${animal.priceGold} </button>
    `;

    if (animalContainer) {
      animalContainer.appendChild(animalCard);
    }

    const buyAnimalButton = document.querySelector(
      `#buy-${animal.type}-button`
    );
    if (buyAnimalButton) {
      buyAnimalButton.addEventListener("click", () => {
        AnimalModule.purchase(animal.type);
      });
    }
  });
};

const displayWarMachines = () => {
  const warMachineContainer = document.querySelector("#war-machine-container");

  WarMachineModule.warMachineData.forEach((warMachine) => {
    const warMachineCard = document.createElement("div");
    warMachineCard.classList.add("card", "card--war-machine");

    warMachineCard.innerHTML = `
      <h3>${warMachine.type}</h3>
      <img src="./images/${warMachine.image}" alt="Picture of either an animal or a war machine">
      <br><br>
      <button class="purchase-button" id="buy-${warMachine.type}-button">Buy War Machine! 
      <br> <img class="resource-icon" src="./images/gold-coin.png"/> ${warMachine.price.gold} 
      <br> <img class="resource-icon" src="./images/metal.png"/> ${warMachine.price.metal} 
      <br> <img class="resource-icon" src="./images/wood.png"/> ${warMachine.price.wood} </button>
    `;

    if (warMachineContainer) {
      warMachineContainer.appendChild(warMachineCard);
    }

    const buyWarMachineButton = document.querySelector(
      `#buy-${warMachine.type}-button`
    );

    if (buyWarMachineButton) {
      buyWarMachineButton.addEventListener("click", () => {
        WarMachineModule.purchase(warMachine.type);
      });
    }
  });
};

displayWarriors();
displayAnimals();
displayWarMachines();
