//модальное окно отзывов

const modalBtn = document.querySelector('.reviews_link');
const modalWindow = document.querySelector('.modals_rewies');
const modalAdd = document.querySelector('.modal-add');
const modalOK = document.querySelector('.modal-person-info-form-link2');



modalBtn.addEventListener('click', () => {
    modalWindow.classList.add('modals_rewies-visible');
    
});


document.addEventListener('click', (event) => {
    if (!modalAdd.contains(event.target) && !modalBtn.contains(event.target)) {
        modalWindow.classList.remove('modals_rewies-visible');
    }
});

modalOK.addEventListener('click', () => {
    modalWindow.classList.remove('modals_rewies-visible');
    
});
//модальное окно бронирования

