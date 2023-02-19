function filter() {
  console.log("Coucou je suis dans la fonction");

  // Toggle dropdown open/close when dropdown button is clicked
  //   if (dropdownBtn) {
  //     dropdownBtn.addEventListener("click", function (e) {
  //       console.log("Coucou je suis dans la fonction");
  //       e.stopPropagation();
  //       document
  //         .querySelector(".filter__dropdown")
  //         .setAttribute("style", "display: block");
  //     });
  //   }
}

filter();

const filterBtn = document.querySelector(".filter__btn");
filterBtn.addEventListener("click", filter);
