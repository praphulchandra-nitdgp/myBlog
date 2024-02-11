
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
$(function() {
  open_panel_count = 0;
  function update_toggle_button() { 
    $('#toggle-btn').text((open_panel_count ? "Collapse" : "Expand") + " All")
  }
  update_toggle_button(); // Run once on page load to text #toggle-btn

  $('#toggle-btn').click(function() {
    $('.toggle-collapse').collapse(open_panel_count ? 'hide' : 'show');
  });

  $('.toggle-collapse').on('shown.bs.collapse', function () {
    open_panel_count++;
    update_toggle_button();
  });

  $('.toggle-collapse').on('hidden.bs.collapse', function () {
    open_panel_count--;
    update_toggle_button();
  });
});

$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse - $('toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function(){
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
