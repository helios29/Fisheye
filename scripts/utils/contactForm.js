const overlay = document.querySelector(".overlay");

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  overlay.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  overlay.classList.add("hidden");
}
