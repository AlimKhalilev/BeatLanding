--include("_webpsup.js");

$(document).ready(function() {

    --include("_burger.js")

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