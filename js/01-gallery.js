import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

function createGalleryItems() {
    const markup = galleryItems.map(({preview, original, description}) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}" 
        target="_top"
        rel="noopener noreferrer">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
    ).join("");

    galleryWrapper.innerHTML = markup;
}

createGalleryItems();

galleryWrapper.addEventListener("click", handleClickImg);

function handleClickImg(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
   const selectedImg = event.target.dataset.source;

   showImg(selectedImg);
}

function showImg(url) {
    const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`)
instance.show();
window.addEventListener("keydown",handleKeydown);
  
  function handleKeydown(event) {
    if (event.code === "Escape") {
        window.removeEventListener("keydown", handleKeydown);
        instance.close();
    }   
  }
}