import iziToast from "izitoast";
import { lightbox } from './js/simplelightbox';
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const inputField = document.querySelector(".searchfield");
const form = document.querySelector(".inputform");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.style.display = 'block';

    const query = inputField.value.trim();

    fetchImages(query)
        .then((data) => {
            loadingMessage.style.display = 'none';
            if(data.hits.length == 0) {
                iziToast.error({
                    message: 'Sorry, there are no images mathcing your search query. Please try again!',
                    position: 'topRight'
                })
            } else {
                const gallery = document.querySelector('.gallery');
                renderGallery(gallery, data.hits);
                lightbox.refresh();
            }
        })
        .catch(() => {
            loadingMessage.style.display = 'none';
        });
})


