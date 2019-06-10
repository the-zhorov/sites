import './css/index.css'
import './sass/index.sass'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery'

var owl = $(".carousel");

$(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
});

$('.carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


$('.carousel2').owlCarousel({
    loop: true,
    margin: 10,
    //nav: true,
    dotsEach: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})