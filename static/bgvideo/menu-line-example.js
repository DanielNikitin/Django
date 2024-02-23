// Обработчик события для кнопки "About Us"
document.querySelector('.about-button').addEventListener('click', function() {
    document.querySelector('.about-section').style.display = 'block';
    window.scrollTo({ top: document.querySelector('.about-section').offsetTop, behavior: 'smooth' });
});

// Обработчик события для кнопки "Home"
document.querySelector('.home-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Возвращает экран в начало страницы
});

// Обработчик события для клавиши 'home'
document.addEventListener('keydown', function(event) {
    if (event.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Возвращает экран в начало страницы
    }
});

// Проверяем URL страницы при загрузке
window.onload = function() {
    // Если URL страницы содержит якорь "#about", то прокрутить к элементу ".about-section"
    if (window.location.hash === "#about") {
        document.querySelector('.about-section').style.display = 'block';
        window.scrollTo({ top: document.querySelector('.about-section').offsetTop, behavior: 'smooth' });
    }
};

// Отслеживание щелчка по кнопке Меню и переключение видимости третьей полоски
// Получение элементов .menu-bar и .menu-button
var menuBar = document.querySelector('.menu-bar');
var menuButton = document.querySelector('.menu-button');

// Обработчик события клика на кнопку меню
menuButton.addEventListener('click', function() {
    // Добавление класса .show к .menu-bar при клике на кнопку меню
    menuBar.classList.toggle('show');
});


