//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographersData() {
  try {
    const data = await fetch("/data/photographers.json"); //await permet de ne pas passer directement à la ligne suivante et attendre le return de la fonction
    return await data.json(); //Promise => donc en async
  } catch (error) {
    console.log(error);
    return null;
  }
}

function getPhotographerById(id, medias, photographers) {
  const pictures = medias.filter((media) => media.photographerId === id);
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

  const { media, photographers } = await getPhotographersData(); // const media = data.media
  console.log(media, photographers);

  const photographer = getPhotographerById(id, media, photographers);
  console.log(" photographer : ", photographer);

  // const photographerHeader = document.querySelector(".photograph-header");
  // const h2 = document.createElement("h2");
  // h2.textContent = photographerID;
  // photographerHeader.appendChild(h2);
}

photographerPage();
