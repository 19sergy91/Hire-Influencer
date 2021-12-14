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
                infinite: true,
                slidesPerRow: 1,
            }
        },
    ],
});

var clicked = false;

$(".finding__head-facebook").click(function(){
    var deg = clicked;  

    $('.finding__cards').css({
        "display":"block",
        
    });
    $('.finding__cards-two').css({
        "display":"none",
    });
    $('.finding__cards-three').css({
        "display":"none",
    });
    $('.finding__cards-four').css({
        "display":"none",
    });
    clicked = clicked;
})

$(".finding__head-instagram").click(function(){
    var deg = clicked;  
  
    $('.finding__cards').css({
      "display":"none",
    });
    $('.finding__cards-two').css({
      "display":"block",
    });
    $('.finding__cards-three').css({
        "display":"none",
    });
    $('.finding__cards-four').css({
        "display":"none",
    });
    clicked = cliceked;
})

$(".finding__head-twitter").click(function(){
    var deg = clicked;  
  
    $('.finding__cards').css({
      "display":"none",
    });
    $('.finding__cards-two').css({
      "display":"none",
    });
    $('.finding__cards-three').css({
        "display":"block",
    });
    $('.finding__cards-four').css({
        "display":"none",
    });
    clicked = cliceked;
})
$(".finding__head-tiktok").click(function(){
    var deg = clicked;  
  
    $('.finding__cards').css({
      "display":"none",
    });
    $('.finding__cards-two').css({
      "display":"none",
    });
    $('.finding__cards-three').css({
        "display":"none",
    });
    $('.finding__cards-four').css({
        "display":"block",
    });
    clicked = cliceked;
})