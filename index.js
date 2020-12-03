import galleryItems from "./src/gallery-items.js";
import refs from "./src/refs.js";

refs.getUl.addEventListener('click', openModal);

const createLi=function ({ original, preview, description }) {
    let itemLi=document.createElement('li');
    let itemA=document.createElement('a');
    let itemImg=document.createElement('img');
    
    itemLi.classList.add('gallery__item');
    itemA.classList.add('gallery__link');
    itemImg.classList.add('gallery__image');

    itemA.href = original;
    itemImg.src = preview;
    itemImg.alt = description;
    itemImg.setAttribute('data-source', original);

    itemA.append(itemImg);
    itemLi.append(itemA);
    refs.getUl.append(itemLi);
}
    
    galleryItems.forEach(createLi)
    
function openModal(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }

    refs.modal.classList.add('is-open');
    refs.imageModal.src = event.target.dataset.source;
    refs.imageModal.alt = event.target.alt;

    refs.closeModalButton.addEventListener('click', closeModal);
    refs.overlay.addEventListener('click', closeModal);
};

function closeModal() {
    refs.modal.classList.remove('is-open');
    refs.imageModal.src='';

    refs.closeModalButton.removeEventListener('click', closeModal);
    refs.overlay.removeEventListener('click', closeModal);
};
