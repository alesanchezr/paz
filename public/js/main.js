

  	w_window = $( window ).height();

// $(".sidea, .sideb").animate({ height: w_window},1000);
	
	// $(".sidea, .sideb").css("min-height",w_window-80);
	$(".frase").css("top",(w_window-150)/2);

	$(".c-1,.c-2,.c-3, .c-4").css("height",(w_window)/3);
	$(".c-5").css("height",((w_window)/3) - 80);





$(document).ready(function(){
    var from,to,subject,text;
    	$("#send_email").click(function(){ 

    		$("#message").addClass("animated fadeInUp");


	        to="rulotico@gmail.com";
	        name=$("#name").val();
	        mail=$("#mail").val();
	        company=$("#company").val();
	        text=$("#content").val();
	        $("#message").text("Te mensaje se esta enviando, espera un momento por favor");
	        $.get("/send",{to:to,name:name,mail:mail,company:company,text:text},function(data){
	        if(data=="sent")
	        {
	            $("#message").empty().html(name+" , Tu mensaje se ha enviado , ¡Gracias!");
	        }else{
	        	$("#message").empty().html("Ups, hubo un problema, porfavor da click <a href='#'>aquí</a> y vuelve a intentarlo");
	        }

		});
    });


});




things={
	dato1:["Ha aumentado la participación","4%","94%","#g3"],
	dato2:["Ha mejorado la convivencia","9%","91%","#g1"],
	dato3:["Se ha desarrollado la resolución de conflictos","9%","91%","#g1"],
	dato4:["Ha disminuido la violencia","28%","72%","#g4"]
};

flag=0;



$(window).scroll(function(){
	old_scroll=$("body").scrollTop();
	
});

$(document).ready(function() {  

    function graficas(){
    		
    		$(".tag, .porcentaje_si, .porcentaje_no").text("");
    		
    	if (flag == 0) {
    		$(".tag").text(things.dato1[0]);
    		$(".tag").addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    			function(){
    				$(this).removeClass("animated fadeInUp");
    			}
    		 );
    		
    		$(".porcentaje_si").text(things.dato1[1]);
    		$(".porcentaje_no").text(things.dato1[2]);

    		 window.location.href=things.dato1[3];
    		flag++;
    	}else if (flag==1) {
    		$(".tag").text(things.dato2[0]);
    		$(".tag").addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    			function(){
    				$(this).removeClass("animated fadeInUp");
    			}
    		 );
    		
    		$(".porcentaje_si").text(things.dato2[1]);
    		$(".porcentaje_no").text(things.dato2[2]);
    		window.location.href=things.dato2[3];
    		flag++;
    	}else if (flag==2) {
			$(".tag").text(things.dato3[0]);
			$(".tag").addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    			function(){
    				$(this).removeClass("animated fadeInUp");
    			}
    		 );
    		
    		$(".porcentaje_si").text(things.dato3[1]);
    		$(".porcentaje_no").text(things.dato3[2]);
    		window.location.href=things.dato3[3];
    		flag++;
    	}else if (flag==3) {
			$(".tag").text(things.dato4[0]);
			$(".tag").addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    			function(){
    				$(this).removeClass("animated fadeInUp");
    			}
    		 );
    		
    		$(".porcentaje_si").text(things.dato4[1]);
    		$(".porcentaje_no").text(things.dato4[2]);
    		window.location.href=things.dato4[3];
    		flag=0;
    	}
    	

    		$('body').scrollTop(old_scroll);
    	



    }
    

    setInterval(graficas, 3000);
    
});
