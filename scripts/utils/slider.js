import {
  getPhotographersData,
  getPhotographerById,
  getId,
} from "../pages/photographer.js";

async function slider() {
  const data = await getPhotographersData();
  console.log("data in total like - ", data);

  const id = getId();
  console.log("getId in total like - ", id);

  const media = data.media;
  const photographers = data.photographers;

  const photographData = getPhotographerById(id, media, photographers);
  const firstName = photographData.infosPhotographer.name.split(" ");

  let lightBox = new Lightbox(photographData.pictures);
  console.log("lightBox in slider: ", lightBox);

  lightBox.manageEvent();

  document
    .querySelectorAll("#artsContainer .artworkContainer img")
    .forEach((imgGallery) => {
      imgGallery.addEventListener("click", (e) => {
        lightBox.show(e.currentTarget.dataset.id, firstName[0]);
      });
    });
}

slider();

export { slider };
