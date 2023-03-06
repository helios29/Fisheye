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
    img.setAttribute("aria-label", `photo du photographe`);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("aria-label", `nom du photographe`);

    const cityCountryElement = document.createElement("h3");
    cityCountryElement.innerText = `${city}, ${country}`;
    cityCountryElement.setAttribute(
      "aria-label",
      `lieu de résidence du photographe`
    );

    const taglineElement = document.createElement("p");
    taglineElement.innerText = `${tagline}`;
    taglineElement.setAttribute(
      "aria-label",
      `phrase d'accroche du photographe`
    );

    const priceElement = document.createElement("div");
    priceElement.classList.add("photographer_price");
    priceElement.innerText = `${price}€/jour`;
    priceElement.setAttribute("aria-label", `prix du photographe`);

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
