function portfolioFactory(artwork) {
  console.log("Artwork dans le portfolio", artwork);

  const { date, id, likes, photographerId, price, title, video, image } =
    artwork;

  function getUserCardDOM(firstName) {
    //Create elements
    const artworkContainer = document.createElement("div");
    artworkContainer.classList.add("artworkContainer");
    artworkContainer.setAttribute("id", `${id}`);
    artworkContainer.setAttribute("photographerId", `${photographerId}`);
    artworkContainer.setAttribute("publishingDate", `${date}`);
    artworkContainer.setAttribute("like", `${likes}`);
    artworkContainer.setAttribute("title", `${title}`);
    artworkContainer.setAttribute("userLiked", "False");

    let picture;
    let element;

    if (!artwork.video) {
      picture = `Pictures/${firstName[0]}/${image}`;
      element = document.createElement("img");
      element.setAttribute("src", picture);
    } else {
      picture = `Pictures/${firstName[0]}/${video}`;
      element = document.createElement("video");
      element.classList.add("video");
      element.setAttribute("src", picture);
    }

    const artworkDescription = document.createElement("div");
    artworkDescription.classList.add("artworkDescription");

    const artworkTitle = document.createElement("div");
    artworkTitle.classList.add("artworkTitle");
    artworkTitle.innerText = `${title}`;

    const artworkBtn = document.createElement("button");
    artworkBtn.classList.add("artworkBtnLike");
    artworkBtn.classList.add("notLiked");

    artworkBtn.innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;

    artworkContainer.appendChild(element);
    artworkContainer.appendChild(artworkDescription);
    artworkDescription.appendChild(artworkTitle);
    artworkDescription.appendChild(artworkBtn);

    return artworkContainer;
  }
  return {
    date,
    id,
    likes,
    photographerId,
    price,
    title,
    video,
    image,
    getUserCardDOM,
  };
}
