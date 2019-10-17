var count = 0,
    sections = $('.mr-imgcontainer'),
    scrollTo = function(index){
      $('html, body').animate({
        scrollTop: sections.eq(index).offset().top
      }, 'slow');
    };


$(".mr-next").click(function(){
  count++;  
  scrollTo(count);
});

$(".mr-prev").click(function(){
  count--;  
  scrollTo(count);
});
