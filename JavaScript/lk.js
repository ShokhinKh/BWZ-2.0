//модальное окно отмены

const modalBtnlk = document.querySelector('.booked-zone-cancel-link');
const modalWindowlk = document.querySelector('.modals-book');
const modalAddlk = document.querySelector('.pa-modal-add');
const modalNOlk = document.querySelector('.pa-modal-btn-no');
const modalYeslk = document.querySelector('.pa-modal-btn-yes');



modalBtnlk.addEventListener('click', () => {
    modalWindowlk.classList.add('modals-book-visible');
    
});


document.addEventListener('click', (event) => {
    if (!modalAddlk.contains(event.target) && !modalBtnlk.contains(event.target)) {
        modalWindowlk.classList.remove('modals-book-visible');
    }
});

modalNOlk.addEventListener('click', () => {
    modalWindowlk.classList.remove('modals-book-visible');
    
});

modalYeslk.addEventListener('click', () => {
    modalWindowlk.classList.remove('modals-book-visible'); 
});