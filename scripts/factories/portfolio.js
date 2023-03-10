export function portfolioFactory(artwork) {
  console.log('Artwork dans le portfolio', artwork);

  const { date, id, likes, photographerId, price, title, video, image } =
    artwork;

  function getUserCardDOM(firstName) {
    // Create elements
    const artworkContainer = document.createElement('div');
    artworkContainer.classList.add('artworkContainer');

    artworkContainer.setAttribute('data-id', `${id}`);
    artworkContainer.setAttribute('photographerId', `${photographerId}`);
    artworkContainer.setAttribute('publishingDate', `${date}`);
    artworkContainer.setAttribute('like', `${likes}`);
    artworkContainer.setAttribute('title', `${title}`);

    let picture;
    let element;

    if (!artwork.video) {
      picture = `Pictures/${firstName[0]}/${image}`;
      element = document.createElement('img');
      element.setAttribute('src', picture);
      element.setAttribute('aria-label', `Image nommée ${title}`);
    } else {
      picture = `Pictures/${firstName[0]}/${video}`;
      element = document.createElement('video');
      element.setAttribute('controls', 'true');
      element.setAttribute('src', picture);
      element.setAttribute('aria-label', `Vidéo nommée ${title}`);
    }

    const artworkDescription = document.createElement('div');
    artworkDescription.classList.add('artworkDescription');

    const artworkTitle = document.createElement('div');
    artworkTitle.classList.add('artworkTitle');
    artworkTitle.innerText = `${title}`;

    const artworkBtn = document.createElement('button');
    artworkBtn.classList.add('artworkBtnLike');
    artworkBtn.classList.add('notLiked');
    artworkBtn.setAttribute('title', `Mettre un like au poste ${title} ?`);
    artworkBtn.setAttribute('aria-pressed', 'false');
    artworkBtn.setAttribute(
      'aria-label',
      `Bouton pour liker la publication ${title}`
    );

    artworkBtn.innerHTML = `${likes} <i class='fa-solid fa-heart'></i>`;

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
