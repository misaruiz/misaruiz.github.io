/*var count = 0,
    sections = $('.mr-section'),
    scrollTo = function(index){
      $('html, body').animate({
        scrollTop: sections.eq(index).offset().top
      }, 'slow');
    }; */


/* $(".mr-next").click(function(){
    count= count + 2;  
  scrollTo(count);
});

$(".mr-prev").click(function(){
  count= count - 2;  
  scrollTo(count);
}); */



$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $('.mr-prev').fadeIn();
    } else {
      $('.mr-prev').fadeOut();
    }
  });



  $(".mr-next").click(function(){
    var imgBoxHeight = $(".mr-section").height();
    var y = $(window).scrollTop();
    $("html, body").animate({ scrollTop: y + $(window).height() }, imgBoxHeight);
  });

  $(".mr-prev").click(function(){
    var imgBoxHeight = $(".mr-section").height();
    var imgBoxHeight = 0 - imgBoxHeight;
    var y = $(window).scrollTop();
    $("html, body").animate({ scrollTop: y + $(window).height() }, imgBoxHeightNeg);
  });
