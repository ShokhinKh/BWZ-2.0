// Показать пароль
const btnShow = document.querySelectorAll(".password_btn");

btnShow.forEach(function(btn) {
    btn.onclick = function () {
        const targetShow = this.getAttribute('data-target'),
        inputShow = document.querySelector(targetShow);
        
    if (inputShow.getAttribute('type') === 'password') {
        inputShow.setAttribute('type', 'text')
        btn.classList.add('password_btn--active')
    }else {
        inputShow.setAttribute('type', 'password');
        btn.classList.remove('password_btn--active')
    }

        
    }
})