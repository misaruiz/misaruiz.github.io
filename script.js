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



/* $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $('.mr-prev').fadeIn();
    } else {
      $('.mr-prev').fadeOut();
    }
  });
  */

/* $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $('.mr-prev').slideDown();
    } else {
      $('.mr-prev').slideUp();
    }
  });
*/

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
        
            var div = $(".mr-prev:not(:visible)");
            
            var height = div.css({
                display: "block"
            }).height();
            
            div.css({
                overflow: "hidden",
                marginTop: height,
                height: 0
            }).animate({
                marginTop: 0,
                height: height
            }, 500, function () {
                $(this).css({
                    display: "",
                    overflow: "",
                    height: "",
                    marginTop: ""
                });
            });
    } else {
            
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
        $('.mr-imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#mr-imagemodal').modal('show');   
    });		
});