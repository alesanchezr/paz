

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
	        $("#message").text("Sending E-mail...Please wait");
	        $.get("http://localhost:3000/send",{to:to,name:name,mail:mail,company:company,text:text},function(data){
	        if(data=="sent")
	        {
	            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox !");
	        }else{
	        	$("#message").empty().html("x_X");
	        }

		});
    });


});

