import {
  getPhotographersData,
  getPhotographerById,
  getId,
} from '../pages/photographer.js';

import { LightBox } from '../utils/Lightbox.js';

async function slider() {
  const data = await getPhotographersData();
  console.log('data in total like - ', data);

  const id = getId();
  console.log('getId in total like - ', id);

  const media = data.media;
  const photographers = data.photographers;
  const photographData = getPhotographerById(id, media, photographers);

  let lightBox = new LightBox(photographData.pictures);
  console.log('lightBox in slider: ', lightBox);

  lightBox.manageEvent(firstName[0]);

  const test = document
  .querySelectorAll('#artsContainer .artworkContainer .contentArtwork')
  console.log("-----_>test : #artsContainer .artworkContainer contentArtwork'", test)
  
  document
    .querySelectorAll('#artsContainer .artworkContainer .contentArtwork')
    .forEach((imgGallery) => {
      imgGallery.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("e.currentTarget.dataset.id", e.currentTarget.dataset.id)
        lightBox.show(e.currentTarget.dataset.id);
      });
    });
}

slider();

export { slider};
