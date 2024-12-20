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
