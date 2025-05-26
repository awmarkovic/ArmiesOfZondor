// @ts-check
import { getRandomNumber } from "../utilities/utilities.js";

export const ResourcesModule = (() => {
  const resources = [
    {
      name: "Gold",
      image: "./images/gold-coin.png",
      initialAmount: localStorage.getItem("Gold") || "0",
    },
    {
      name: "Metal",
      image: "./images/metal.png",
      initialAmount: localStorage.getItem("Metal") || "0",
    },
    {
      name: "Wood",
      image: "./images/wood.png",
      initialAmount: localStorage.getItem("Wood") || "0",
    },
  ];

  // Purpose of function:
  // Produce a random number of wood and add it to the
  // locaLStorage and update the header element
  function chopWood() {
    const choppedAmount = getRandomNumber(300, 600);
    const storedWood = localStorage.getItem("Wood") || "0";
    localStorage.setItem("Wood", `${choppedAmount + parseInt(storedWood)}`);

    const woodAmountElement = document.querySelector("#Wood-amount");
    if (woodAmountElement) {
      woodAmountElement.innerHTML = localStorage.getItem("Wood") || "0";
    }

    displayOutputMessage(
      `You chopped <img class="resource-icon" src="./images/wood.png"/> ${choppedAmount} units of wood.`
    );
  }

  // Purpose of function:
  // Produce a random number of metal OR gold, add it to the
  // locaLStorage and update the header element
  function mining() {
    const chance = Math.random();

    if (chance < 0.75) {
      const metalAmount = getRandomNumber(300, 600);
      const storedMetal = localStorage.getItem("Metal") || "0";
      localStorage.setItem("Metal", `${metalAmount + parseInt(storedMetal)}`);

      const metalAmountElement = document.querySelector("#Metal-amount");
      if (metalAmountElement) {
        metalAmountElement.innerHTML = localStorage.getItem("Metal") || "0";
      }

      displayOutputMessage(
        `You mined <img class="resource-icon" src="./images/metal.png"/> ${metalAmount} units of metal.`
      );
    } else {
      const goldAmount = getRandomNumber(600, 1200);
      const storedGold = localStorage.getItem("Gold") || "0";
      localStorage.setItem("Gold", `${goldAmount + parseInt(storedGold)}`);

      const goldAmountElement = document.querySelector("#Gold-amount");
      if (goldAmountElement) {
        goldAmountElement.innerHTML = localStorage.getItem("Gold") || "0";
      }

      displayOutputMessage(
        `You mined <img class="resource-icon" src="./images/gold-coin.png"/> ${goldAmount} units of gold!`
      );
    }
  }

  // I took the liberty to add a function to display what kind of resource
  // the user has gotten and how much of it!
  function displayOutputMessage(message) {
    const outputDiv = document.querySelector("#output-div");
    if (outputDiv) {
      outputDiv.innerHTML = `<p>${message}</p>`;
    }
  }

  return {
    chopWood,
    resources,
    mining,
  };
})();
