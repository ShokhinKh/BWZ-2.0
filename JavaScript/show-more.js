const btn = document.querySelector('.show-more');
const cards = document.querySelectorAll('.slide_item');

btn.addEventListener('click', function() {

    for(let card of cards) {
        card.style.display = 'flex'
    }

    btn.style.display = 'none';
});