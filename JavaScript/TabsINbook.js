const tabsLINK = document.querySelectorAll('.book_link-item');
const tabsFORM = document.querySelectorAll('.booking-item');

tabsLINK.forEach(item => item.addEventListener('click', event => {

    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsLINK.forEach(element => element.classList.remove('book_link-active'));
    tabsFORM.forEach(element => element.classList.add('hidden'));


    item.classList.add('book_link-active');
    document.getElementById(tabsTitleTarget).classList.remove('hidden');


}))

document.querySelector('[data-tab="tab-6"]').classList.add('book_link-active');
document.querySelector('#tab-6').classList.remove('hidden');



const modalBtn2 = document.querySelector('.booking_btn');
const modalWindow2 = document.querySelector('.modals_book');
const modalAdd2 = document.querySelector('.modal-add-book');
const modalOK2 = document.querySelector('.modal-book-btn');



modalBtn2.addEventListener('click', () => {
    modalWindow2.classList.add('modals_rewies-visible');
    
});


document.addEventListener('click', (event) => {
    if (!modalAdd2.contains(event.target) && !modalBtn2.contains(event.target)) {
        modalWindow.classList.remove('modals_rewies-visible');
    }
});

modalOK2.addEventListener('click', () => {
    modalWindow2.classList.remove('modals_rewies-visible');
    
});