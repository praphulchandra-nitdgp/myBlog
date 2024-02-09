$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse - $('toggle-Collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleclass('collapse');
    }) 
    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
        responsive: responsive
});




});
