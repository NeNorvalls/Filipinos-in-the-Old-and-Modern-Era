const modal = document.querySelector(".modal");
const imageContainer = document.querySelector(".modal-img");
const backdrop = document.querySelector(".backdrop");

function getDetailsImgSource() {
  const detailsImage = document.querySelector(".details-img");
  return detailsImage;
}

function openModal() {
  const imageSource = getDetailsImgSource();
  imageContainer.src = imageSource.src;
  backdrop.style.display = "block";
  modal.style.display = "block";
}

backdrop.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}
