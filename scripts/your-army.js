// @ts-check

import { HeaderModule } from "./modules/HeaderModule.js";
import { WarriorModule } from "./modules/WarriorModule.js";
import { AnimalModule } from "./modules/AnimalModule.js";
import { WarMachineModule } from "./modules/WarMachineModule.js";

HeaderModule.displayHeader();

// Function to display all the warriors to the army - also adding filter to display only selected warriors
const displayMyWarriors = (filter = "all") => {
  const warriorsContainer = document.querySelector("#warriors-container");

  // This checks if warriorsContainer exists
  if (!warriorsContainer) {
    console.error("Could not find #warriors-container element.");
    return;
  }

  // This clears the container
  warriorsContainer.innerHTML = "";

  WarriorModule.warriorData.forEach((warrior) => {
    const storedWarriors = parseInt(localStorage.getItem(warrior.name) || "0");

    if (filter === "all" || filter === warrior.name) {
      for (let i = 0; i < storedWarriors; i++) {
        if (warriorsContainer) {
          warriorsContainer.innerHTML += `
            <div class="army-card">
              <span>${warrior.displayName}</span>
              <img src="./images/${warrior.image}" alt="Picture of a warrior">
            </div>
          `;
        }
      }
    }
  });
};

const filterWarriors = (filter) => {
  displayMyWarriors(filter);
};

// Function to display all the animals to the army - also adding filter to display only selected animals
const displayMyAnimals = (filter = "all") => {
  const animalsContainer = document.querySelector("#animal-container");

  if (!animalsContainer) {
    console.error("Could not find #animal-container element.");
    return;
  }

  animalsContainer.innerHTML = "";

  AnimalModule.animalsData.forEach((animal) => {
    const storedAnimals = parseInt(localStorage.getItem(animal.type) || "0");

    if (filter === "all" || filter === animal.type) {
      for (let i = 0; i < storedAnimals; i++) {
        animalsContainer.innerHTML += `
          <div class="army-card">
            <span>${animal.type}</span>
            <img src="./images/${animal.image}" alt="Picture of an animal">
          </div>
        `;
      }
    }
  });
};

const filterAnimals = (filter) => {
  displayMyAnimals(filter);
};

// Function to display all the war machines to the army - also adding filter to display only selected war machines
const displayMyWarMachines = (filter = "all") => {
  const warMachineContainer = document.querySelector("#war-machine-container");

  if (!warMachineContainer) {
    console.error("Could not find #war-machine-container element.");
    return;
  }

  warMachineContainer.innerHTML = "";

  WarMachineModule.warMachineData.forEach((warMachine) => {
    const storedWarMachines = parseInt(
      localStorage.getItem(warMachine.type) || "0"
    );

    if (filter === "all" || filter === warMachine.type) {
      for (let i = 0; i < storedWarMachines; i++) {
        warMachineContainer.innerHTML += `
          <div class="army-card">
            <span>${warMachine.type}</span>
            <img src="./images/${warMachine.image}" alt="Picture of a war machine">
          </div>
        `;
      }
    }
  });
};

const filterWarMachines = (filter) => {
  displayMyWarMachines(filter);
};

// Event listeners for the dropsdowns
const warriorFilterDropdown = document.querySelector("#warrior-filter");
if (warriorFilterDropdown) {
  warriorFilterDropdown.addEventListener("change", function () {
    const selectedWarrior = this.value;
    filterWarriors(selectedWarrior);
  });
} else {
  console.error("Dropdown with ID 'warrior-filter' not found.");
}

const animalFilterDropdown = document.querySelector("#animal-filter");
if (animalFilterDropdown) {
  animalFilterDropdown.addEventListener("change", function () {
    const selectedAnimal = this.value;
    filterAnimals(selectedAnimal);
  });
} else {
  console.error("Dropdown with ID 'animal-filter' not found.");
}

const warMachineFilterDropdown = document.querySelector("#war-machine-filter");
if (warMachineFilterDropdown) {
  warMachineFilterDropdown.addEventListener("change", function () {
    const selectedWarMachine = this.value;
    filterWarMachines(selectedWarMachine);
  });
} else {
  console.error("Dropdown with ID 'war-machine-filter' not found.");
}

displayMyWarriors();
displayMyAnimals();
displayMyWarMachines();
