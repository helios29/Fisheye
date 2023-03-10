// async function getPhotographers(data) {
//   const photographers = data.photographers;
//   displayData(photographers);
// }

import { photographerFactory } from '../factories/photographerHomePage.js';

let id = '';

function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  console.log('photographers :', photographers);
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });

  console.log('id :', id);
}

function init() {
  // pas besoin de async car je suis sur .then .catch
  fetch('/data/photographers.json')
    .then((response) => response.json()) //read data from the body (promise)
    .then((data) => displayData(data.photographers)) //return the promise of the json (which is asynchronous) //getphotographes(data)
    .catch((err) => console.log(err));
}

init();
