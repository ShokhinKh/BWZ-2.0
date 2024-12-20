const vsplivashka = document.querySelector('.vipadashka')
const vsplivashkaBtn = document.querySelector('.menu-ava-img')

vsplivashkaBtn.addEventListener("click", function(e){
    vsplivashka.classList.toggle("active-vsplivashka")
})

document.addEventListener('click', (event) => {
    if (!vsplivashka.contains(event.target) && !vsplivashkaBtn.contains(event.target)) {
        vsplivashka.classList.remove('active-vsplivashka');
    }
});


document.getElementById("modal-edit-open").addEventListener("click", function(){
    document.getElementById("form-modal-password").classList.add("open_modal")
})

document.getElementById("modal-password-close").addEventListener("click", function(){
    document.getElementById("form-modal-password").classList.remove("open_modal")
})

document.querySelector("#form-modal-password .modal-item-password").addEventListener('click', event => {
    event._isClickWithInModal = true;
})

document.getElementById("form-modal-password").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open_modal")
})
