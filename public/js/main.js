
$( document ).ready(function() {
  	w_window = $( window ).height();

// $(".sidea, .sideb").animate({ height: w_window},1000);
	
	// $(".sidea, .sideb").css("min-height",w_window-80);
	$(".frase").css("top",(w_window-150)/2);

	$(".c-1,.c-2,.c-3, .c-4, .c-5").css("height",(w_window)/3);


});




