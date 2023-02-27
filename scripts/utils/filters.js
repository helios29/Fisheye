import {
  getPhotographerById,
  getId,
  getPhotographersData,
} from "../pages/photographer.js";

function filter() {
  const photographHeader = document.querySelector(".photograph-header");

  //Filter
  const sectionFiltre = document.createElement("div");
  sectionFiltre.classList.add("filter-module");

  const filter = document.createElement("div");
  filter.classList.add("filter-titre");
  filter.innerText = "Trier par";

  sectionFiltre.appendChild(filter);
  console.log("photographHeader in filter", photographHeader);
  photographHeader.after(sectionFiltre);

  const filterForm = document.createElement("div");
  filterForm.classList.add("filter__container");
  filterForm.innerHTML = `<button id="filterBtn">Popularité</button>
                            <ul id="nav__links">
                              <li class="links">Popularité</li>
                              <li class="links">Date</li>
                              <li class="links">Titre</li>
                            </ul>
                          </div>`;

  sectionFiltre.appendChild(filterForm);

  filterAction(sectionFiltre);

  return sectionFiltre;
}

async function filterAction(sectionFiltre) {
  const data = await getPhotographersData();
  const media = data.media;
  const photographers = data.photographers;
  const id = getId();
  const photographData = getPhotographerById(id, media, photographers);
  const portfolio = photographData.pictures;
  console.log("portfolio : ", portfolio);

  let filter = photographData.pictures.title;
  // filter.sort();
  console.log("filter", filter);

  const filterBtn = document.getElementById("filterBtn");
  const list = document.getElementById("nav__links");

  list.style.display = "none";

  filterBtn.addEventListener("click", () => {
    if (list.style.display == "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("links")) {
      const link = e.target.textContent;

      console.log("link :", link);
      filterBtn.innerHTML = `${link}`;

      if (link == "Popularité") {
        portfolio.sort(function (a, b) {
          if (a.likes > b.likes) {
            return -1;
          } else if (a.likes < b.likes) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (link == "Date") {
        portfolio.sort(function (a, b) {
          let dateA = new Date(a.date);
          let dateB = new Date(b.date);

          if (dateA > dateB) return 1;
          else if (dateA < dateB) return -1;
          return 0;
        });
      } else if (link == "Titre") {
        portfolio.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      console.log("portfolio après filtre -> " + `${link}` + " : ", portfolio);

      const photographerName = photographData.infosPhotographer.name;
      const firstName = photographerName.split(" ");
      console.log("firstName :", firstName[0]);

      let element = document.getElementById("artsContainer");
      element.remove();

      const artsContainer = document.createElement("div");
      artsContainer.setAttribute("id", "artsContainer");

      portfolio.forEach((artwork) => {
        const photographerPortfolio = portfolioFactory(artwork);
        const userCardDOM = photographerPortfolio.getUserCardDOM(firstName);
        artsContainer.appendChild(userCardDOM);
      });

      sectionFiltre.after(artsContainer);
    }
  });
}

export { filter };
