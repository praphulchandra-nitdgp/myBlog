
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");
    const body = document.body;

    darkModeToggle.addEventListener("change", function() {
        body.classList.toggle("dark-theme");
        // Save the user's preference to localStorage
        const isDarkMode = body.classList.contains("dark-theme");
        localStorage.setItem("darkMode", isDarkMode);
    });

    // Check if the user has a preference for dark mode and apply it
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    darkModeToggle.checked = isDarkMode;
    if (isDarkMode) {
        body.classList.add("dark-theme");
    }
});

$(document).ready(function (){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');
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
