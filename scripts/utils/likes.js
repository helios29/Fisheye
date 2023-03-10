import {
  getPhotographersData,
  getPhotographerById,
  getId,
} from '../pages/photographer.js';

async function totalLikes() {
  const data = await getPhotographersData();
  console.log('data in total like - ', data);

  const id = getId();
  console.log('getId in total like - ', id);

  const media = data.media;
  const photographers = data.photographers;

  const photographData = getPhotographerById(id, media, photographers);
  console.log('photographData in total like - ', photographData);

  let totalLikes = 0;
  let numberLikes = photographData.pictures;
  console.log('Likes ', numberLikes[1].likes);

  numberLikes.forEach((numberLike) => {
    totalLikes += numberLike.likes;
  });
  console.log('totalLikes ', totalLikes);

  const price = photographData.infosPhotographer.price;
  console.log('price ', price);

  const stickyLikesPrice = document.createElement('div');
  stickyLikesPrice.classList.add('stickyLikesPrice');

  const likesReceived = document.createElement('div');
  likesReceived.classList.add('likesReceived');
  likesReceived.innerHTML = `${totalLikes} <i class="fa-solid fa-heart"></i>`;
  likesReceived.setAttribute(
    'aria-label',
    `le photographe accumule ${totalLikes} likes`
  );

  const pricePerDay = document.createElement('div');
  pricePerDay.classList.add('pricePerDay');
  pricePerDay.innerText = `${price}€/jour`;
  pricePerDay.setAttribute(
    'aria-label',
    `et pour un tarif journalier de ${price} euros`
  );

  stickyLikesPrice.appendChild(likesReceived);
  stickyLikesPrice.appendChild(pricePerDay);

  const overlay = document.querySelector('.overlay');

  overlay.after(stickyLikesPrice);

  const updateLikes = function () {
    let likeButton = this;
    const artworkBtnLike = this.closest('.artworkBtnLike');
    const artworkContainer = this.parentElement.parentElement;
    const likesReceived = document.querySelector('.likesReceived');

    console.log('artworkBtnLike =>', artworkBtnLike);
    console.log('likeButton =>', likeButton);
    console.log('likesReceived =>', likesReceived);
    console.log('artworkContainer =>', artworkContainer);

    let likeBtnNotPressed = likeButton.classList.contains('notLiked');
    let nbLikes = Number(likeButton.textContent);

    console.log('likeBtnNotPressed =>', likeBtnNotPressed);

    if (likeBtnNotPressed) {
      nbLikes++;
      totalLikes++;
      artworkBtnLike.classList.remove('notLiked');
      likeButton.setAttribute('aria-pressed', 'true');
    } else {
      nbLikes--;
      totalLikes--;
      artworkBtnLike.classList.add('notLiked');
      likeButton.setAttribute('aria-pressed', 'false');
    }

    artworkBtnLike.innerHTML = `${nbLikes} <i class="fa-solid fa-heart"></i>`;
    likesReceived.innerHTML = `${totalLikes} <i class="fa-solid fa-heart"></i>`;
    artworkContainer.setAttribute('like', nbLikes);
    likesReceived.setAttribute(
      'aria-label',
      `le photographe accumule ${totalLikes} likes`
    );

    console.log('nbLikes =>', nbLikes);
    console.log('totalLikes =>', totalLikes);
  };

  const btnClicked = document.querySelectorAll('.artworkBtnLike');
  for (let i = 0; i < btnClicked.length; i++)
    btnClicked[i].addEventListener('click', updateLikes);
}

totalLikes();
