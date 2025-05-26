// @ts-check

export const WarriorModule = (() => {
  // I chose to have name and displayName as separate properties because one of the warriors (Bix-Axe)
  // has a name that is not user-friendly. His name contains a space, so i had to make his name have
  // a hyphen instead of a space. The displayName is what is displayed to the user.
  const warriors = [
    {
      name: "snake",
      displayName: "Snake",
      priceGold: 200,
      image: "warrior-1.jpg",
    },
    {
      name: "giant",
      displayName: "Giant",
      priceGold: 500,
      image: "warrior-2.jpg",
    },
    {
      name: "big-axe",
      displayName: "Big Axe",
      priceGold: 150,
      image: "warrior-3.jpg",
    },
    {
      name: "thief",
      displayName: "Thief",
      priceGold: 50,
      image: "warrior-4.jpg",
    },
    {
      name: "tanks",
      displayName: "Tanks",
      priceGold: 250,
      image: "warrior-5.jpg",
    },
    {
      name: "berserker",
      displayName: "Berserker",
      priceGold: 275,
      image: "warrior-6.jpg",
    },
  ];

  const purchaseWarrior = (warrior) => {
    const selectedWarrior = warriors.find((w) => w.name === warrior);
    if (!selectedWarrior) {
      console.warn("Warrior not found!");
      return;
    }

    const storedGold = parseInt(localStorage.getItem("Gold") || "0");

    if (storedGold < selectedWarrior.priceGold) {
      alert(
        "Oops! Looks like you dont have enough gold to purchase this warrior!"
      );
    } else {
      const amountAfterPurchase = storedGold - selectedWarrior.priceGold;

      localStorage.setItem("Gold", amountAfterPurchase.toString());
      alert(`You have added ${selectedWarrior.displayName} to your army!`);

      const goldAmountElement = document.querySelector("#Gold-amount");
      if (goldAmountElement) {
        goldAmountElement.innerHTML = localStorage.getItem("Gold") || "0";
      }

      //Adding warrior to army
      const storedWarriors = parseInt(
        localStorage.getItem(selectedWarrior.name) || "0"
      );
      localStorage.setItem(selectedWarrior.name, `${storedWarriors + 1}`);
    }
  };

  return {
    warriorData: warriors,
    purchase: purchaseWarrior,
  };
})();
