import { filter } from '../utils/filters.js';
import { photographerFactoryHeader } from '../factories/photographerHeader';
import { portfolioFactory } from '../factories/portfolio';

//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographersData() {
  try {
    const data = await fetch('/data/photographers.json'); //await permet de ne pas passer directement à la ligne suivante et attendre le return de la fonction
    return await data.json(); //Promise => donc en async
  } catch (error) {
    console.log('Il y a une erreur : ', error);
    return null;
  }
}

function getPhotographerById(id, medias, photographers) {
  const pictures = medias.filter((media) => media.photographerId === id);
  console.log('Pictures in getPhotographerById :', pictures);
  const infosPhotographer = photographers.find(
    (photographer) => photographer.id === id
  );
  console.log('infosPhotographer in getPhotographerById :', infosPhotographer);

  return {
    pictures: pictures,
    infosPhotographer: infosPhotographer, //pictures , infosPhotographer
  };
}

function getId() {
  let params = new URL(document.location).searchParams;
  let idPhotographer = parseInt(params.get('id'));
  console.log('idPhotographer :', idPhotographer);

  return idPhotographer;
}

async function photographerPage() {
  const id = getId();

  const { media, photographers } = await getPhotographersData(); // const media = data.media
  console.log('media :', media);
  console.log('photographers :', photographers);

  const photographer = getPhotographerById(id, media, photographers);
  const photographerName = photographer.infosPhotographer.name;

  const modalTitle = document.getElementById('contact__title');
  console.log('modalTitle :', modalTitle);
  modalTitle.innerHTML += `<br> ${photographerName}`;
  // console.log("modalTitle :", modalTitle);

  const firstName = photographerName.split(' ');
  console.log('firstName :', firstName[0]);

  //New code
  const photographerModel = photographerFactoryHeader(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  console.log('userCardDOM :', userCardDOM);

  const photographHeader = document.querySelector('.photograph-header');
  const contactButton = document.querySelector('.contact_button');

  const { portrait } = photographer.infosPhotographer;
  console.log('portrait', portrait);
  const photo = `assets/photographers/${portrait}`;

  const img = document.createElement('img');
  img.classList.add('idPicture');
  img.setAttribute(
    'aria-label',
    `Photo du photographe ${photographer.infosPhotographer.name}`
  );
  img.setAttribute('src', photo);

  photographHeader.appendChild(userCardDOM);
  photographHeader.appendChild(contactButton);
  photographHeader.appendChild(img);

  //Filter creation
  const sectionFiltre = filter();

  console.log('Pictures in photographer :', photographer.pictures[0].title);

  const artsContainer = document.createElement('div');
  artsContainer.setAttribute('id', 'artsContainer');
  // artsContainer.classList.add("artsContainer");

  photographer.pictures.forEach((artwork) => {
    const photographerPortfolio = portfolioFactory(artwork);
    const userCardDOM = photographerPortfolio.getUserCardDOM(firstName);
    artsContainer.appendChild(userCardDOM);
  });

  sectionFiltre.after(artsContainer);
}

photographerPage();

export { getPhotographersData, getPhotographerById, getId };
