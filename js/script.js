(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
});

function myFunction(x) {
    x.classList.toggle("change");
}

$('.hamburger').click(function(){
	element = $('.mobile-menu');
	display = element.css('display');
	if(display == 'none')
		$('.mobile-menu').slideDown();
	if(display == 'block')
		$('.mobile-menu').slideUp();
});
 
$('.mobile-menu a').click(function(){
	$('.mobile-menu').slideUp();
});

