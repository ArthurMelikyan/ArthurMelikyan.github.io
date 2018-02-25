$(document).ready(function () {
    $('.slider').slider({
        height: 600
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
    });
$('.parallax').parallax();

}); 
$('.slider .indicators li').addClass('hoverable');
autoplay()

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
