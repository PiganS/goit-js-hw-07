import { galleryItems } from "./gallery-items.js";

function createGalleryMarkup(galleryObj) {
  return galleryObj
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
galleryRef.addEventListener("click", onClick);
let modalImage;

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const urlOriginalImage = evt.target.getAttribute("data-source");
  openModal(urlOriginalImage);
}

function openModal(urlOriginalImage) {
  modalImage = basicLightbox.create(`
<img src="${urlOriginalImage}" width="800" height="600">
`);
  modalImage.show();
  window.addEventListener("keydown", clickOnEsc);
}

function clickOnEsc(evt) {
  if (evt.code === "Escape" && modalImage.visible()) {
    modalImage.close();
    window.removeEventListener("keydown", clickOnEsc);
  }
}
