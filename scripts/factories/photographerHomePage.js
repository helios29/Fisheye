function photographerFactory(data) {
  console.log(data);

  const { name, portrait, tagline, price, city, country, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const url = window.location.href;

  function getUserCardDOM() {
    //Create elements
    const lien = document.createElement("a");
    lien.href = url + `photographer.html?id=${id}`;

    const article = document.createElement("article");
    article.classList.add("photographer_profile");

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const cityCountryElement = document.createElement("h3");
    cityCountryElement.innerText = `${city}, ${country}`;

    const taglineElement = document.createElement("p");
    taglineElement.innerText = `${tagline}`;

    const priceElement = document.createElement("div");
    priceElement.classList.add("photographer_price");
    priceElement.innerText = `${price}€/jour`;

    article.appendChild(lien);
    lien.appendChild(img);
    lien.appendChild(h2);
    article.appendChild(cityCountryElement);
    article.appendChild(taglineElement);
    article.appendChild(priceElement);

    return article;
  }
  return {
    name,
    picture,
    tagline,
    price,
    city,
    country,
    url,
    id,
    getUserCardDOM,
  };
}
