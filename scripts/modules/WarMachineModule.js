// @ts-check

export const WarMachineModule = (() => {
  const warMachines = [
    {
      type: "Catapult",
      price: {
        gold: 500,
        wood: 300,
        metal: 200,
      },
      image: "catapult.png",
    },

    {
      type: "Cannon",
      price: {
        gold: 800,
        wood: 400,
        metal: 300,
      },
      image: "cannon.png",
    },
  ];
  const purchaseWarMachine = (type) => {
    const selectedWarMachine = warMachines.find((w) => w.type === type);
    if (!selectedWarMachine) {
      console.warn("War machine not found");
      return;
    }

    const storedGold = parseInt(localStorage.getItem("Gold") || "0");
    const storedMetal = parseInt(localStorage.getItem("Metal") || "0");
    const storedWood = parseInt(localStorage.getItem("Wood") || "0");

    if (
      storedGold < selectedWarMachine.price.gold ||
      storedMetal < selectedWarMachine.price.metal ||
      storedWood < selectedWarMachine.price.wood
    ) {
      alert("Not enough resources to purchase this war machine!");
    } else {
      const newGold = storedGold - selectedWarMachine.price.gold;
      const newMetal = storedMetal - selectedWarMachine.price.metal;
      const newWood = storedWood - selectedWarMachine.price.wood;

      localStorage.setItem("Gold", newGold.toString());
      localStorage.setItem("Metal", newMetal.toString());
      localStorage.setItem("Wood", newWood.toString());

      alert(`You have added ${selectedWarMachine.type} to your army!`);

      const goldElement = document.querySelector("#Gold-amount");
      const metalElement = document.querySelector("#Metal-amount");
      const woodElement = document.querySelector("#Wood-amount");

      if (goldElement) goldElement.innerHTML = newGold.toString();
      if (metalElement) metalElement.innerHTML = newMetal.toString();
      if (woodElement) woodElement.innerHTML = newWood.toString();

      // Adding War Machine to army
      const storedWarMachines = parseInt(
        localStorage.getItem(selectedWarMachine.type) || "0"
      );
      localStorage.setItem(selectedWarMachine.type, `${storedWarMachines + 1}`);
    }
  };

  return {
    warMachineData: warMachines,
    purchase: purchaseWarMachine,
  };
})();
