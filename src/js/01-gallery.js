import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryStart = document.querySelector(".gallery");

function createGallery() {
  let galleryHTML = "";

  for (let i = 0; i < galleryItems.length; i++) {
    galleryHTML += `
    <li class="gallery__item">
    <a class="gallery__link" href="${galleryItems[i].original}" onclick="event.preventDefault()">
    <img
    class="gallery__image"
    src="${galleryItems[i].preview}"
    alt="${galleryItems[i].description}"
    />
    </a>
    </li>
    `;
  }
  galleryStart.innerHTML = galleryHTML;
}
createGallery();
  var lightbox = new SimpleLightbox('.gallery a', {captionsData : 'alt', captionDelay:250 });

console.log(galleryItems);
