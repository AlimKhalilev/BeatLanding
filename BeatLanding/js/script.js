// Проверка на поддержку WebP от браузера

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp-support');
    }
});;

$(document).ready(function() {

    function initBurgerMenu() {
    let button_burger = $("[data-burger='button']");
    let menu_burger = $("[data-burger='menu']");
    let body = document.body;
    
    $(button_burger).click(() => {
        menu_burger.toggleClass("active")
        button_burger.toggleClass("opened");
        body.classList.toggle("hideScroll");
    });
}

initBurgerMenu();

    $('.faq-container-items-item').click(function () {
        let header = $(this).children();
        let content = header.next();
        header.toggleClass("opened");
    
        if (!content.is(':visible')) {
            content.slideDown('normal');
        } 
        else {
            content.slideUp('normal');
        }
    });
    
});