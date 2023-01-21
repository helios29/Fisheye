function photographerFactory(data) {
  console.log(data);

  const { name, portrait, tagline, price, city, country } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    //Create elements
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

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(cityCountryElement);
    article.appendChild(taglineElement);
    article.appendChild(priceElement);

    return article;
  }
  return { name, picture, tagline, price, city, country, getUserCardDOM };
}
