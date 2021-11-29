const burgerMenu = document.querySelector(".header__burger");
if (burgerMenu) {
    const headerMenu = document.querySelector(".header__menu");
    burgerMenu.addEventListener("click", function() {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_menu");
        headerMenu.classList.toggle("_menu");
    });
};

$('.waiting__slide').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: false,
    rows: 2,
    slidesPerRow: 2,
    swipe: true,
    autoplay: true,

    responsive: [
        {
            breakpoint: 429,
            settings: {
                slidesPerRow: 1,
            }
        },
    ],
});

var degrees = 0;
$('.select').click(function rotateMe(e) {

    degrees += 180;

    $('.select__nav-arrow').css({
      'transform': 'rotate(' + degrees + 'deg)',
    });
    $('option').css({
        'background': '#EDEDED',
        'color': '#000000',
    })
});

var degrees1 = 0;
$('.quantity').click(function rotateMe(e) {

    degrees1 += 180;

    $('.quantity__nav-arrow').css({
      'transform': 'rotate(' + degrees1 + 'deg)',
    });
});