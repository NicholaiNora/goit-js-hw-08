// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const ul = document.querySelector('.gallery');
console.log(ul);
for (let galleryItem of galleryItems) {
    const li = document.createElement('li');
    li.innerHTML = `<a class="gallery__link" href="${galleryItem.original}">
                        <img 
                            class="gallery__image"
                            src="${galleryItem.preview}"
                            alt="${galleryItem.description}"
                        />
                    </a>`;
    li.classList.add('gallery__item');
    li.style.listStyleType = 'none';
    console.log(li);
    ul.append(li);
}
const links = document.querySelectorAll(".gallery__link");
console.log(links);
links.forEach((link) => link.addEventListener("click", (e) => {
    e.preventDefault();
}));

var gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox');
