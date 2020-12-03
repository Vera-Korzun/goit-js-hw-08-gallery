import galleryItems from "./gallery-items.js";

const getUl = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');
const overlay = document.querySelector('.lightbox__overlay');
const imageModal = document.querySelector('.lightbox__image');
const closeModalButton = document.querySelector('button[data-action="close-lightbox"]');

getUl.addEventListener('click', openModal);

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
    getUl.append(itemLi);
}
    
    galleryItems.forEach(createLi)
    //console.log(getUl);

function openModal(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }

    modal.classList.add('is-open');
    imageModal.src = event.target.dataset.source;
    imageModal.alt = event.target.alt;

    closeModalButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
};

function closeModal() {
    modal.classList.remove('is-open');
    imageModal.src='';
};
