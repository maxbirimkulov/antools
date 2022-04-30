



document.querySelector('.tools__more').onclick = function () { //при нажатии на кнопку

    document.querySelector('.tools__more').classList.toggle('active'); // задаем класс актив если его нет,если есть то удаляем
    if (document.querySelector('.tools__more').classList.contains('active')){ // проверяю есть ли в нашей кнопке класс active
        document.querySelector('.tools__more').textContent = 'hide' // если есть класс актив то я изменяю текст на hide
    } else{
        document.querySelector('.tools__more').textContent = 'load more' // если нет класса актив то я изменяю текст на load more
    }

    document.querySelectorAll('.tools__card_hide').forEach(function (card) { // получаю набор из всех элементов с классом tools__card_hide
        card.classList.toggle('active')                                                     // и каждому элементу я задаю класс актив если его нет, если есть то удаляю
    })
};



let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 3000
    },
    loop: true,
    spaceBetween: 50,
    mousewheel: true,
    keyboard: true,
    speed: 3000,
});


const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    const bttn = accordion.querySelector(".accordion__button");
    const panel = accordion.querySelector(".accordion__panel");
    const activeClassBtn = "accordion__button-active";
    const activeClassPanel = "accordion__panel-active";

    bttn.addEventListener("click", (event) => {
        event.preventDefault();

        const active__bttn = document.querySelectorAll(
            ".accordion .accordion__button-active"
        );
        active__bttn.forEach((el) =>
            el !== bttn ? el.classList.remove(activeClassBtn) : null
        );
        bttn.classList.toggle(activeClassBtn);

        const active__panel = document.querySelectorAll(
            ".accordion .accordion__panel-active"
        );
        active__panel.forEach((el) =>
            el !== panel ? el.classList.remove(activeClassPanel) : null
        );
        panel.classList.toggle(activeClassPanel);

        panel.style.setProperty("--height", `${panel.scrollHeight}px`);
    });
});

let im = new Inputmask("+\\9\\96(550)99-99-99");
im.mask(document.querySelector('#phone'));


window.onscroll = function () {
    if (window.scrollY > 400) {
        document.querySelector('.goTop').classList.add('goTop_active')
    } else {
        document.querySelector('.goTop').classList.remove('goTop_active')
    }
}


VANTA.NET({
    el: "#newcomer",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: "#ff6e30",
    backgroundColor: "#1e252b",
    points: 9.00,
    maxDistance: 40.00,
    spacing: 20.00
})



document.querySelector('.tabs__item_1').onclick = function () {
    this.classList.add('tabs__item_active')
    document.querySelector('.tabs__content_1').classList.add('tabs__content_active')
    document.querySelector('.tabs__item_2').classList.remove('tabs__item_active')
    document.querySelector('.tabs__item_3').classList.remove('tabs__item_active')
    document.querySelector('.tabs__content_2').classList.remove('tabs__content_active')
    document.querySelector('.tabs__content_3').classList.remove('tabs__content_active')
}

document.querySelector('.tabs__item_2').onclick = function () {
    this.classList.add('tabs__item_active')
    document.querySelector('.tabs__content_2').classList.add('tabs__content_active')
    document.querySelector('.tabs__item_1').classList.remove('tabs__item_active')
    document.querySelector('.tabs__item_3').classList.remove('tabs__item_active')
    document.querySelector('.tabs__content_1').classList.remove('tabs__content_active')
    document.querySelector('.tabs__content_3').classList.remove('tabs__content_active')
}

document.querySelector('.tabs__item_3').onclick = function () {
    this.classList.add('tabs__item_active')
    document.querySelector('.tabs__content_3').classList.add('tabs__content_active')
    document.querySelector('.tabs__item_1').classList.remove('tabs__item_active')
    document.querySelector('.tabs__item_2').classList.remove('tabs__item_active')
    document.querySelector('.tabs__content_1').classList.remove('tabs__content_active')
    document.querySelector('.tabs__content_2').classList.remove('tabs__content_active')
}

















