const overlay = document.querySelector('.overlay');

export function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
  overlay.classList.remove('hidden');
}

export function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
  overlay.classList.add('hidden');
}
