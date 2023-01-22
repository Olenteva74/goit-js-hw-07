import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

function createGalleryItems() {
    const markup = galleryItems.map(({preview, original, description}) => 
    `<a class="gallery__item" href="${original}"
    target="_top"
    rel="noopener noreferrer">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
   </a>`
    ).join("");

    galleryWrapper.innerHTML = markup;
}

createGalleryItems();


let gallery = new SimpleLightbox('.gallery__item');

gallery.on('show.simplelightbox', function () {
	gallery.defaultOptions.captionDelay = 250;
});

