

  	w_window = $( window ).height();

// $(".sidea, .sideb").animate({ height: w_window},1000);
	
	// $(".sidea, .sideb").css("min-height",w_window-80);
	$(".frase").css("top",(w_window-150)/2);

	$(".c-1,.c-2,.c-3, .c-4, .c-5").css("height",(w_window)/3);





$(document).ready(function(){
    var from,to,subject,text;
    	$("#send_email").click(function(){      
	        to="rulotico@gmail.com";
	        name=$("#name").val();
	        mail=$("#mail").val();
	        company=$("#company").val();
	        text=$("#content").val();
	        $("#message").text("Te mensaje se esta enviando, espera un momento por favor");
	        $.get("http://localhost:3000/send",{to:to,name:name,mail:mail,company:company,text:text},function(data){
	        if(data=="sent")
	        {
	            $("#message").empty().html(name+" , Tu mensaje se ha enviado , ¡Gracias!");
	        }else{
	        	$("#message").empty().html("Ups, hubo un problema, porfavor da click <a href='#'>aquí</a> y vuelve a intentarlo");
	        }

		});
    });


});

