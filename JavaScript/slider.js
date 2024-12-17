// Получение всех слайдов
const reviewsSlides = document.querySelectorAll(".reviews_info");

// Текущий активный слайд
let currentSlideIndex = 0;

// Показ следующего слайда
function showNextSlide() {
    hideCurrentSlide();
    currentSlideIndex++;
    if (currentSlideIndex >= reviewsSlides.length) {
        currentSlideIndex = 0;
    }
    showNewSlide(currentSlideIndex);
}

// Показ предыдущего слайда
function showPrevSlide() {
    hideCurrentSlide();
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = reviewsSlides.length - 1;
    }
    showNewSlide(currentSlideIndex);
}

// Скрытие текущего активного слайда
function hideCurrentSlide() {
    reviewsSlides[currentSlideIndex].classList.remove("reviews_info-active");
}

// Отображение нового слайда
function showNewSlide(index) {
    reviewsSlides[index].classList.add("reviews_info-active");
}