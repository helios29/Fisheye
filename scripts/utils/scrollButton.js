const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");

// Toggle dropdown open/close when dropdown button is clicked
if (dropdownBtn) {
  dropdownBtn.addEventListener("click", function (e) {
    console.log("Coucou je suis dans la fonction");
    e.stopPropagation();
    document.querySelector(".dropdown").setAttribute("style", "display: block");
  });
}

// Close dropdown when dom element is clicked
// document.addEventListener("click", function () {
//   if (dropdownMenu.classList.contains("show")) {
//     document.querySelector(".dropdown").setAttribute("style", "display: none");
//   }
// });
