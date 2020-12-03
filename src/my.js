// const getUl=document.querySelector('.gallery');
// //console.log(getUl);

// // const getLi = ({ original, preview, description })=>
// //   `<li class="gallery__item"><a class="gallery__link" href="${original}"><img src="${preview}" data-source="${original}" alt="${description}" width = 300 class="gallery__image></a></li>`;

// // const markUp = galleryImages.reduce(
// //   (acc, item) => acc + getLi(item),'');

// // getUl.insertAdjacentHTML("afterbegin", markUp);
// // console.log(getUl);

// const createLi=function(){
//     let itemLi=document.createElement('li');
//     let itemA=document.createElement('a');
//     let itemImg=document.createElement('img');

//     itemLi.classList.add('gallery__item');
//     itemA.classList.add('gallery__link');
//     itemImg.classList.add('gallery__image');

//     itemA.append(itemImg);
//     itemLi.append(itemA);
//     getUl.append(itemLi);

//     // console.log(itemLi);
//     // console.log(itemA);
//     // console.log(itemImg);
// }

// galleryItems.forEach(createLi)
// // createLi()
// console.log(getUl);




// // const getLi = ({ url, alt })=>
// //   `<li class="list__item"><img src="${url}" alt="${alt}" width = 300 class="list__item--img"></li>`;

// // const markUp = images.reduce(
// //   (acc, item) => acc + getLi(item),'');

// // getUl.insertAdjacentHTML("afterbegin", markUp);

//===============================================================================
// import galleryItems from "./gallery-items.js";
// //console.log(galleryItems);

// const getUl = document.querySelector('.gallery');
// const modal = document.querySelector('.lightbox');
// const overlay = document.querySelector('.lightbox__overlay');
// const imageModal = document.querySelector('.lightbox__image');
// const closeModalButton = document.querySelector('button[data-action="close-lightbox"]');
// let indexCurrentImage;

// getUl.addEventListener('click', onOpenModal);

// // function createGallery() {
// //     let markUp = '';
// //     for(let i = 0; i < galleryItems.length; i += 1){
// //         markUp += `<li class="gallery__item">
// //             <a
// //                 class="gallery__link"
// //                 href="${galleryItems[i].original}"
// //             >
// //                 <img
// //                 class="gallery__image"
// //                 src="${galleryItems[i].preview}"
// //                 data-source="${galleryItems[i].original}"
// //                 alt="${galleryItems[i].description}"
// //                 data_index="${i}"
// //                 />
// //             </a>
// //             </li>`
// //     }
// //     getUl.innerHTML = markUp;
// // };

//  const createLi=function ({ original, preview, description }, index) {
//         let itemLi=document.createElement('li');
//         let itemA=document.createElement('a');
//         let itemImg=document.createElement('img');
    
//         itemLi.classList.add('gallery__item');
//         itemA.classList.add('gallery__link');
//         itemImg.classList.add('gallery__image');

//         itemA.href = original;
//         itemImg.src = preview;
//         itemImg.alt = description;
//         itemImg.setAttribute('data-source', original);
//         //itemImg.setAttribute('data-index', index);

//         itemA.append(itemImg);
//         itemLi.append(itemA);
//         getUl.append(itemLi);
    
//         // console.log(itemLi);
//         // console.log(itemA);
//         // console.log(itemImg);
//     }
    
//     galleryItems.forEach(createLi)
//     // createLi()
//     console.log(getUl);

// function onOpenModal(event) {
//     event.preventDefault();
//     // console.log(event);
//     if(event.target.nodeName !== 'IMG'){
//         return
//     }

//     //indexCurrentImage = Number(event.target.dataset.index);
//     indexCurrentImage = Number(event.target.getAttribute("data_index"));
//     // console.log(indexCurrentImage);
//     // console.log(event.target.getAttribute("data_index"));

//     modal.classList.add('is-open');
//     imageModal.src = event.target.dataset.source;
//     imageModal.alt = event.target.alt;

//     closeModalButton.addEventListener('click', onCloseModal);
//     overlay.addEventListener('click', onCloseModal);
//     //window.addEventListener('keydown',  onPressKey);

// };

// function onCloseModal() {
//     modal.classList.remove('is-open');
//     imageModal.src='';

// };

// //==============================*************************************

// // const onPressKey = (event) => {
// //     // console.log(galleryItems);
// //     // console.log(indexCurrentImage);
// //     switch (event.code) {
// //         case 'Escape':
// //             onCloseModal()
// //             break;
// //         case 'ArrowRight':
// //             indexCurrentImage + 1 === galleryItems.length ? (indexCurrentImage = 0) : (indexCurrentImage += 1) ;
// //             //console.log(indexCurrentImage);
// //             imageModal.src = galleryItems[indexCurrentImage].original;

// //             break;
// //         case 'ArrowLeft':
// //             indexCurrentImage === 0 ? (indexCurrentImage = galleryItems.length-1) : (indexCurrentImage -= 1) ;
// //              imageModal.src = galleryItems[indexCurrentImage].original;

// //             break;
    
// //         default:
// //             break;
// //     }
// // };

// //createGallery();