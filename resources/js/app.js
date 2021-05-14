window.addEventListener("scroll", function() {
    let menuArea = document.getElementById("menu-area");

    if (window.pageYOffset > 0) {
        menuArea.classList.add("sc-menu");
    } else {
        menuArea.classList.remove("sc-menu");
    }
});
// $(document).ready(function() {
//     $('#icon').click(function() {
//         $('ul').toggleClass('show');
//     });
// });


$(document).ready(function () {
    $('.testiSlide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
    breakpoint: 850,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    }
    }]
    });
   });