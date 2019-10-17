var count = 0,
    sections = $('.mr-section'),
    scrollTo = function(index){
      $('html, body').animate({
        scrollTop: sections.eq(index).offset().top
      }, 'slow');
    };


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


var imgBoxHeight = document.getElementByClassName('mr-section').clientHeight;
var imgBoxHeightNeg = 0 - imgBoxHeight;
  function scrollImgUp() {
    window.scrollBy(0, imgBoxHeight);
  }

  function scrollImgDown() {
    window.scrollBy(0, imgBoxHeightNeg);
  }