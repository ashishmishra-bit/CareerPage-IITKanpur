window.addEventListener("scroll", function() {
    let menuArea = document.getElementById("menu-area");

    if (window.pageYOffset > 0) {
        menuArea.classList.add("sc-menu");
    } else {
        menuArea.classList.remove("sc-menu");
    }
});
$(document).ready(function() {
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    });
});