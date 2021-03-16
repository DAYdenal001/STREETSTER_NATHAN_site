var menuBurgerContainer = document.querySelector(".menu-burger-container");
var menuBox = document.querySelector(".menu_box");
menuBurgerContainer.onclick = function () {
    menuBurgerContainer.classList.toggle("active");
    menuBox.classList.toggle("active");
};

var hintOutput = document.getElementsByClassName("subtract-details");

for (var i = 0; i < hintOutput.length; i++) {
    hintOutput[i].addEventListener('click', function () {
        var content = this.nextElementSibling;
        var parent = this.parentElement;
        this.style.display = 'none';
        content.style.visibility = 'visible';
        parent.classList.add('open');
    });
}

new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpointsBase: 'container',
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: -30,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: -60,
            centeredSlides: true,
            initialSlide: 1
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: -90,
            centeredSlides: true,
            initialSlide: 1
        },
        1441: {
            slidesPerView: 'auto',
            spaceBetween: -100,
            centeredSlides: true,
            initialSlide: 1
        }
    }
});