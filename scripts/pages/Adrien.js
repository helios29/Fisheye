function mediaFactory(data) {
  console.log(data);

  const { name, portrait, id, tagline, price, city, country } = data;

  const picture = `assets/photographers/${portrait}`;
  const url = window.location.href;

  function getUserCardDOM() {
    //Create elements
    const lien = document.createElement("a");
    lien.href = url + `/media.html?id=${id}`;

    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const cityCountryElement = document.createElement("p");
    cityCountryElement.innerText = `${city}, ${country}`;

    const taglineElement = document.createElement("p");
    taglineElement.innerText = `${tagline}`;

    const priceElement = document.createElement("p");
    priceElement.innerText = `${price}€/jour`;

    lien.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(cityCountryElement);
    article.appendChild(taglineElement);
    article.appendChild(priceElement);

    return lien;
  }
  return { name, picture, tagline, price, city, country, getUserCardDOM };
}

function displayData(data) {
  const mediasSection = document.querySelector(".media_section");

  media.forEach((p) => {
    const mediaModel = mediaFactory(picture);
    const userCardDOM = mediaModel.getUserCardDOM();
    mediasSection.appendChild(userCardDOM);
  });
}

function init() {
  // pas besoin de async car je suis sur .then .catch
  fetch("/data/photographers.json")
    .then((response) => response.json()) //read data from the body (promise)
    .then((data) => console.log(data.media)) //return the promise of the json (which is asynchronous) //getphotographes(data)
    .catch((err) => console.log(err));
}

init();
