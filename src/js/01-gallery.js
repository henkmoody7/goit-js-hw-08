// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');

function createImageMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
}

function renderGallery(gallery) {
  const createGallery = gallery.reduce((acc, item) => {
    return acc + createImageMarkup(item);
  }, '');
  galleryContainerRef.insertAdjacentHTML('beforeend', createGallery);
}
renderGallery(galleryItems);

const gallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
