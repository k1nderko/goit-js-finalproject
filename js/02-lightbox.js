import { galleryItems } from './gallery-items.js';
// Change code below this line

// import SimpleLightbox from 'simplelightbox';

const refs = {
  listGallery: document.querySelector(".gallery"),
};

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        </li>`
    )
    .join("");
}

refs.listGallery.innerHTML = createMarkup(galleryItems);


const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});