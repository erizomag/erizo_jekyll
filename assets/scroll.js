$(function () {
  var panelHeight = $(".sample_block").height();
  var panelWidth = $(".sample_block").width();

  $(".cta_nav_to_index").click(function(e){
    e.preventDefault();

    $("body").removeClass("default_splash");

    $("html, body").animate({
      scrollTop: $(".container").offset().top},
      1000, function() {
        $(".sample_container").addClass("hidden");
    });

    $(".container").addClass("active");
    $(".sample_block").addClass("active");
    $(".sample_slideshow_bottom_nav").removeClass("active");
  });


  $(".cta_nav_to_slideshow").click(function(e){
    e.preventDefault();

    $(".sample_container").animate({
      scrollLeft: "+=" + panelWidth},
      1000, function() {
        $(".sample_slideshow_bottom_nav").addClass("active");
        $(".sample_slideshow_right_nav").addClass("active");
        $(".sample_slideshow_left_nav").addClass("active");
        $(".cta_nav_to_slideshow").addClass("hidden");
    });

    $("body").addClass("default_splash");
    $(".sample_container").addClass("active");
  });

  $(".sample_slideshow_left_nav").click(function(e){
    e.preventDefault();

    $(".sample_container").animate({
      scrollLeft: "-=" + panelWidth},
      1000, function() {
    });

    $('html,body').scrollTop(0);
  });

  $(".sample_slideshow_right_nav").click(function(e){
    e.preventDefault();

    $(".sample_container").animate({
      scrollLeft: "+=" + panelWidth},
      1000, function() {
    });

    $('html,body').scrollTop(0);
  });

  $(".sample_container").scroll(function(){
      var $elem = $(".sample_container");
      var newScrollLeft = $elem.scrollLeft(),
          width = $elem.width(),
          scrollWidth = $elem.get(0).scrollWidth;
      var offset = 0;

      if (scrollWidth - newScrollLeft - width === offset) {
        $(".sample_slideshow_right_nav").removeClass("active");
        $(".sample_slideshow_bottom_nav").addClass("emphasized");
      }

      if (newScrollLeft === 0) {
        $(".sample_container").removeClass("active");
        $(".sample_slideshow_right_nav").removeClass("active");
        $(".sample_slideshow_left_nav").removeClass("active");
        $(".sample_slideshow_bottom_nav").removeClass("emphasized");
      }
  });
});
