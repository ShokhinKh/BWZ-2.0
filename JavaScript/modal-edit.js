// Открыть модальное окно

document.getElementById("edit").addEventListener("click", function(){
    document.getElementById("edit-modal").classList.add("open_modal")
})

document.getElementById("modal-edit-close").addEventListener("click", function(){
    document.getElementById("edit-modal").classList.remove("open_modal")
})

document.querySelector("#edit-modal .modal-edit-item").addEventListener('click', event => {
    event._isClickWithInModal = true;
})

document.getElementById("edit-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open_modal")
})
