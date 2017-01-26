$(document).ready(function(){
    $('.parallax').parallax();
    });


$(document).ready(function(){
  $('.slider').slider();
});
        
$(document).on("click", "#learnmore", function(){
	$('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 800, function(){
  });
});

$(document).ready(function() {
  $('.toc-wrapper').pushpin({
    offset: 50
  });
  $('.scrollspy').scrollSpy({scrollOffset:0});
});

$(window).scroll(function(){
   if( $(document).scrollTop() > 650 ) {
      $('.toc-wrapper').show();
   } else {
      $('.toc-wrapper').hide();
   }
});