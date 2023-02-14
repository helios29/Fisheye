//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographersData() {
  try {
    const data = await fetch("/data/photographers.json"); //await permet de ne pas passer directement à la ligne suivante et attendre le return de la fonction
    return await data.json(); //Promise => donc en async
  } catch (error) {
    console.log("Il y a une erreur : ", error);
    return null;
  }
}

function getPhotographerById(id, medias, photographers) {
  const pictures = medias.filter((media) => media.photographerId === id);
  console.log("Pictures in getPhotographerById :", pictures);
  const infosPhotographer = photographers.find(
    (photographer) => photographer.id === id
  );

  return {
    pictures: pictures,
    infosPhotographer: infosPhotographer, //pictures , infosPhotographer
  };
}

async function photographerPage() {
  let params = new URL(document.location).searchParams;
  let id = parseInt(params.get("id"));
  console.log("id :", id);

  const { media, photographers } = await getPhotographersData(); // const media = data.media
  console.log("media :", media);
  console.log("photographers :", photographers);

  const photographer = getPhotographerById(id, media, photographers);
  const photographerName = photographer.infosPhotographer.name;

  const modalTitle = document.getElementById("contact__title");
  console.log("modalTitle :", modalTitle);
  modalTitle.innerHTML += `<br> ${photographerName}`;
  // console.log("modalTitle :", modalTitle);

  const firstName = photographerName.split(" ");
  console.log("firstName :", firstName[0]);

  //New code
  const photographerModel = photographerFactoryHeader(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  console.log("userCardDOM :", userCardDOM);

  const photographHeader = document.querySelector(".photograph-header");
  const contactButton = document.querySelector(".contact_button");

  const { portrait } = photographer.infosPhotographer;
  console.log("portrait", portrait);
  const photo = `assets/photographers/${portrait}`;

  const img = document.createElement("img");
  img.classList.add("idPicture");
  img.setAttribute("src", photo);

  photographHeader.appendChild(userCardDOM);
  photographHeader.appendChild(contactButton);
  photographHeader.appendChild(img);

  //Filter
  const sectionFiltre = document.createElement("div");
  sectionFiltre.classList.add("filter-module");

  const filter = document.createElement("div");
  filter.classList.add("filter-titre");
  filter.innerText = "Trier par";

  sectionFiltre.appendChild(filter);
  photographHeader.after(sectionFiltre);

  const filterForm = document.createElement("div");
  filterForm.innerHTML = `<div class="container">
                            <button class="btn" id="btn">Popularité</button>
                            <div class="dropdown" id="dropdown">
                              <ul class="nav__links">
                                <li class="nav__item">
                                  <a class="nav__link" href="#section--1">Popularité</a>
                                </li>
                                <li class="nav__item">
                                  <a class="nav__link" href="#section--2">Date</a>
                                </li>
                                <li class="nav__item">
                                  <a class="nav__link" href="#section--3">Titre</a>
                                </li>
                              <ul>
                            </div>
                          </div>`;

  sectionFiltre.appendChild(filterForm);

  const dropdownBtn = document.getElementById("btn");
  const dropdownMenu = document.getElementById("dropdown");

  // Toggle dropdown open/close when dropdown button is clicked
  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", function (e) {
      console.log("Coucou je suis dans la fonction");
      e.stopPropagation();
      document.querySelector(".dropdown").classList.toggle("show");
    });
  }

  if (dropdownMenu) {
    dropdownMenu.addEventListener("click", function (e) {
      if (e.target.classList.contains("nav__link")) {
        const link = e.target.textContent;

        console.log("link :", link);
        dropdownBtn.innerHTML = `<button class="btn" id="btn">
                                     ${link}
                                </button>`;
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !dropdownMenu.classList.remove("show")) {
      dropdownMenu.classList.remove("show");
    }
  });

  console.log("Pictures in photographer :", photographer.pictures[0].title);

  const artsContainer = document.createElement("div");
  artsContainer.classList.add("artsContainer");

  photographer.pictures.forEach((artwork) => {
    const photographerPortfolio = portfolioFactory(artwork);
    const userCardDOM = photographerPortfolio.getUserCardDOM(firstName);
    artsContainer.appendChild(userCardDOM);
  });

  sectionFiltre.after(artsContainer);
}

photographerPage();
