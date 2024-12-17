// Открыть модальное окно

document.getElementById("form-btn").addEventListener("click", function(){
    document.getElementById("form-modal").classList.add("open_modal")
})

document.getElementById("modal-book-close").addEventListener("click", function(){
    document.getElementById("form-modal").classList.remove("open_modal")
})

document.querySelector("#form-modal .modal-book-item").addEventListener('click', event => {
    event._isClickWithInModal = true;
})

document.getElementById("form-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open_modal")
})