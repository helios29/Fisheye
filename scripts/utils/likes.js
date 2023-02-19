import {
  photographerPage,
  getPhotographersData,
  getPhotographerById,
  getId,
} from "../pages/photographer.js";

async function totalLikes() {
  const data = await getPhotographersData();
  console.log("data in total like - ", data);

  const id = getId();
  console.log("getId in total like - ", id);

  const media = data.media;
  const photographers = data.photographers;

  const photographData = getPhotographerById(id, media, photographers);
  console.log("photographData in total like - ", photographData);

  let totalLikes = 0;
  let numberLikes = photographData.pictures;
  console.log("Likes ", numberLikes[1].likes);

  numberLikes.forEach((numberLike) => {
    totalLikes += numberLike.likes;
  });
  console.log("totalLikes ", totalLikes);

  const price = photographData.infosPhotographer.price;
  console.log("price ", price);

  const stickyLikesPrice = document.createElement("div");
  stickyLikesPrice.classList.add("stickyLikesPrice");

  const likesReceived = document.createElement("div");
  likesReceived.classList.add("likesReceived");
  likesReceived.innerHTML = `${totalLikes} <i class="fa-solid fa-heart"></i>`;

  const pricePerDay = document.createElement("div");
  pricePerDay.classList.add("pricePerDay");
  pricePerDay.innerText = `${price}€/jour`;

  stickyLikesPrice.appendChild(likesReceived);
  stickyLikesPrice.appendChild(pricePerDay);

  const overlay = document.querySelector(".overlay");

  overlay.after(stickyLikesPrice);

  const updateLikes = function () {
    let likeButton = this;
    const artworkBtnLike = this.closest(".artworkBtnLike");
    const likesReceived = document.querySelector(".likesReceived");

    console.log("artworkBtnLike =>", artworkBtnLike);
    console.log("likeButton =>", likeButton);
    console.log("likesReceived =>", likesReceived);

    let likeBtnNotPressed = likeButton.classList.contains("notLiked");
    let nbLikes = Number(likeButton.textContent);

    console.log("likeBtnNotPressed =>", likeBtnNotPressed);

    if (likeBtnNotPressed) {
      nbLikes++;
      totalLikes++;
      artworkBtnLike.classList.remove("notLiked");
    } else {
      nbLikes--;
      totalLikes--;
      artworkBtnLike.classList.add("notLiked");
    }

    artworkBtnLike.innerHTML = `${nbLikes} <i class="fa-solid fa-heart"></i>`;
    likesReceived.innerHTML = `${totalLikes} <i class="fa-solid fa-heart"></i>`;

    console.log("nbLikes =>", nbLikes);
    console.log("totalLikes =>", totalLikes);
  };

  const btnClicked = document.querySelectorAll(".artworkBtnLike");
  for (let i = 0; i < btnClicked.length; i++)
    btnClicked[i].addEventListener("click", updateLikes);
}

totalLikes();
