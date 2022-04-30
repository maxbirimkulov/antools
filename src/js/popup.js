document.querySelector('.btn_login').onclick = function (){
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.popup__form_login').classList.add('active')
};

document.querySelector('.overlay').onclick = function(e) {
    if ( e.target.classList.contains('overlay')) {
        document.querySelector('.overlay').classList.remove('overlay_active');
        document.querySelector('.popup__form_login').classList.remove('active');
        document.querySelector('.popup__form_signup').classList.remove('active')
    }
};

document.querySelector('.btn_signUp').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.popup__form_signup').classList.add('active')
};

document.querySelector('.popup__close').onclick = function (e) {
    document.querySelector('.overlay').classList.remove('overlay_active');
    document.querySelector('.popup__form_login').classList.remove('active');
    document.querySelector('.popup__form_signup').classList.remove('active')
};


document.querySelector('.burger').onclick = function () {
    document.querySelector('.burger').classList.toggle('burger_active')
    document.querySelector('.header__right').classList.toggle('header__right_active')
}
