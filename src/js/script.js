--include("_webpsup.js");

$(document).ready(function() {

    --include("_burger.js")
    --include("_modal.js");

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

    document.querySelectorAll(".eye").forEach(item => {
        item.addEventListener("click", () => {
            let input = item.parentNode;
            input.classList.toggle("visible");

            let input_text = input.querySelector(".input_text");
            if (input.classList.contains("visible")) {
                input_text.setAttribute("type", "text");
            }
            else {
                input_text.setAttribute("type", "password");
            }
        });
    });
    
});