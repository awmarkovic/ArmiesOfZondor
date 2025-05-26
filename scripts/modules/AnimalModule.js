// @ts-check

export const AnimalModule = (() => {
  const animals = [
    {
      type: "Horse",
      priceGold: 500,
      image: "horse.png",
    },

    {
      type: "Elephant",
      priceGold: 700,
      image: "elephant.png",
    },
  ];

  const purchaseAnimal = (animalType) => {
    const selectedAnimal = animals.find((a) => a.type === animalType);
    if (!selectedAnimal) {
      console.warn("War machine not found");
      return;
    }

    const storedGold = parseInt(localStorage.getItem("Gold") || "0");

    if (storedGold < selectedAnimal.priceGold) {
      alert(
        "Oops! Looks like you dont have enough gold to purchase this animal!"
      );
    } else {
      const amountAfterPurchase = storedGold - selectedAnimal.priceGold;

      localStorage.setItem("Gold", amountAfterPurchase.toString());
      alert(`You have added ${selectedAnimal.type} to your army!`);

      const goldAmountElement = document.querySelector("#Gold-amount");
      if (goldAmountElement) {
        goldAmountElement.innerHTML = localStorage.getItem("Gold") || "0";
      }

      // Adding animal to army
      const storedAnimal = parseInt(
        localStorage.getItem(selectedAnimal.type) || "0"
      );
      localStorage.setItem(selectedAnimal.type, `${storedAnimal + 1}`);
    }
  };

  return {
    animalsData: animals,
    purchase: purchaseAnimal,
  };
})();
