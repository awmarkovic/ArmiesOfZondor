//@ts-check
import { ResourcesModule } from "./ResourcesModule.js";

export const HeaderModule = (() => {
  const pages = [
    { name: "Home", link: "gathering-army.html" },
    { name: "Get resources", link: "getting-resources.html" },
    { name: "My army", link: "your-army.html" },
  ];

  const headerHTML = `
  <header>
    
    <div class="headerTop">
      <h3 class="headerTitle">ArmiesOfZondor</h3>
      <nav class="navigation">
        ${pages
          .map((page) => `<a href="${page.link}">${page.name}</a>`)
          .join("")}
      </nav>
    </div>

    <div class="headerBottom">
      ${ResourcesModule.resources
        .map(
          (resource) => `
        <div class="resource">
          <img src="${resource.image}" alt="Image of ${resource.name}">
          <p id="${resource.name}-amount">${resource.initialAmount}</p>
          
        </div>
      `
        )
        .join("")}
    </div>
    
  </header>
  `;
  function displayHeader() {
    const body = document.querySelector("body");
    if (body) {
      body.insertAdjacentHTML("afterbegin", headerHTML);
    }
  }

  return {
    displayHeader,
  };
})();
