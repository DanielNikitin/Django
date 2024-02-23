// Обработчик события для кнопки "About Us"
document.querySelector('.about-button').addEventListener('click', function() {
    document.querySelector('.about-section').style.display = 'block';
    window.scrollTo({ top: document.querySelector('.about-section').offsetTop, behavior: 'smooth' });
});

// Обработчик события для кнопки "Home"
document.querySelector('.home-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Возвращает экран в начало страницы
});

// Проверяем URL страницы при загрузке
window.onload = function() {
    // Если URL страницы содержит якорь "#about", то прокрутить к элементу ".about-section"
    if (window.location.hash === "#about") {
        document.querySelector('.about-section').style.display = 'block';
        window.scrollTo({ top: document.querySelector('.about-section').offsetTop, behavior: 'smooth' });
    }
};


var topBar = document.querySelector('.top-bar');
var bottomLine = document.querySelector('.bottom-line');
var menuButton = document.querySelector('.menu-button');
var menuButtonGlow = document.querySelector('.menu-button:hover::before');
var menuBar = document.querySelector('.menu-bar');
var instagramIcon = document.querySelector('.instagram-icon img');

// Флаг для отслеживания состояния кнопки меню
var isMenuActive = false;

// Обработчик события клика на кнопку меню
menuButton.addEventListener('click', function() {
    // Переключение класса .show для .menu-bar при клике на кнопку меню
    menuBar.classList.toggle('show');
    
    // Плавное изменение высоты top-bar в зависимости от наличия класса .show у .menu-bar
    if (menuBar.classList.contains('show')) {
        topBar.style.height = '160px';
        
        setTimeout(function() {
            instagramIcon.style.opacity = '1';
            bottomLine.style.opacity = '1';
        }, 250);

    } else {

        topBar.style.height = '80px';
        instagramIcon.style.opacity = '0';

        
        setTimeout(function() {
            bottomLine.style.opacity = '0';
        }, 140);
    }
    
    // Инвертирование состояния кнопки меню
    isMenuActive = !isMenuActive;
});
