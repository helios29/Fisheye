function photographerFactoryHeader(photographer) {
  const { name, tagline, price, city, country, id } =
    photographer.infosPhotographer;

  function getUserCardDOM() {
    //Create elements

    const photographerInfos = document.createElement("div");
    photographerInfos.classList.add("photographerInfos");

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("aria-label", `nom du photographe`);

    const cityCountryElement = document.createElement("h3");
    cityCountryElement.classList.add("location");
    cityCountryElement.setAttribute(
      "aria-label",
      `lieu de résidence du photographe`
    );
    cityCountryElement.innerText = `${city}, ${country}`;

    const taglineElement = document.createElement("p");
    taglineElement.setAttribute(
      "aria-label",
      `phrase d'accroche du photographe`
    );
    taglineElement.innerText = `${tagline}`;

    // lien.appendChild(img);
    photographerInfos.appendChild(h2);
    photographerInfos.appendChild(cityCountryElement);
    photographerInfos.appendChild(taglineElement);

    return photographerInfos;
  }

  return {
    name,
    tagline,
    price,
    city,
    country,
    id,
    getUserCardDOM,
  };
}
