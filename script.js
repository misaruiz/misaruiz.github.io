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
    if (y > 200) {
      $('.mr-prev').fadeIn();
    } else {
      $('.mr-prev').fadeOut();
    }
  });



  $(".mr-next").click(function(){
    var y = $(window).scrollTop();
    $("html, body").animate({ scrollTop: y + $(".mr-section").height() }, 600);
  });

  $(".mr-prev").click(function(){
    var y = $(window).scrollTop();
    $("html, body").animate({ scrollTop: y - $(".mr-section").height() }, 600);
  });


  $(function() {
    $('.mr-imgcontainer').on('click', function() {
        $('.mr-imgbox').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});