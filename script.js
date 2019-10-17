var count = 0,
    sections = $('.mr-section'),
    scrollTo = function(index){
      $('html, body').animate({
        scrollTop: sections.eq(index).offset().top
      }, 'slow');
    };


$(".mr-next").click(function(){
    count= count + 2;  
  scrollTo(count);
});

$(".mr-prev").click(function(){
  count--;  
  scrollTo(count);
});



$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $('.mr-prev').fadeIn();
    } else {
      $('.mr-prev').fadeOut();
    }
  });
