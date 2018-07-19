$(function () {
  var panelHeight = $(".sample_block").height();
  var panelWidth = $(".sample_block").width();

  $(".cta_nav_to_index").click(function(e){
    e.preventDefault();

    $("body").removeClass("default_splash");

    $("html, body").animate({
      scrollTop: $(".container").offset().top},
      1000, function() {
    });

    $(".container").addClass("active");
    $(".sample_slideshow_nav").removeClass("active");
  });


  $(".cta_nav_to_slideshow").click(function(e){
    e.preventDefault();

    $(".sample_container").animate({
      scrollLeft: "+=" + panelWidth},
      1000, function() {
        $(".sample_slideshow_nav").addClass("active");
    });

    $("body").addClass("default_splash");
  });
});
