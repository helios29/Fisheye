
const slider = function () {
  console.log("coucou");
}


const pictureImg = document.getElementsByTagName("img");
pictureImg.addEventListener("click", slider);

// pictureImg.addEventListener("click", () => {
//   console.log("coucou");
//   let pictureClick = this;
//   // const artworkContainer = this.closest(".artworkContainer");

//   console.log("pictureClick :", pictureClick);
//   console.log("artworkContainer :", artworkContainer);
// });
