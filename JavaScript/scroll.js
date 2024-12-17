//Скролл до нужного элемента

function scrollToZones(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetElement = document.getElementById('zones');
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToReviews(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetElement = document.getElementById('reviews');
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToBooking(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetElement = document.getElementById('book');
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}


function scrollToEvents(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetElement = document.getElementById('events');
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

