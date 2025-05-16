document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('reviews_info');
    const items = document.querySelectorAll('.reviews_item');
    const prevBtn = document.querySelector('.reviews-prev');
    const nextBtn = document.querySelector('.reviews-next');
    let currentIndex = 0;
    let itemsToShow = window.innerWidth < 1150 ? 1 : 2;

    function updateSlider() {
        itemsToShow = window.innerWidth < 1150 ? 1 : 2;
        const itemWidth = 100 / itemsToShow;
        const translateX = -currentIndex * itemWidth;
        slider.style.transform = `translateX(${translateX}%)`;
        
        // Блокируем кнопки в крайних положениях
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= items.length - itemsToShow;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex -= itemsToShow;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < items.length - itemsToShow) {
            currentIndex += itemsToShow;
            updateSlider();
        }
    });

    window.addEventListener('resize', function() {
        // При изменении размера сбрасываем позицию и обновляем количество отображаемых элементов
        currentIndex = 0;
        updateSlider();
    });

    // Инициализация
    updateSlider();
});
