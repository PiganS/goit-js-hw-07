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
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
