$(".button1").click(function(){
	console.log("the button clicked"),
	$(this).fadeOut("active");
});

$(".button2").click(function(){
	console.log("the button clicked"),
	$(this).fadeIn("slow");
});

$(".button3").hover(function(){
	console.log("the button hovered"),
	$("h3").removeClass("gone");
});

$(".button4").click(function(){
	console.log("the button clicked"),
	$(this). ;
})
 
$(".button5").hover(function(){
	console.log("the button hovered"),
	$(this).addClass("active");
})




$(".box-five").click(function(){console.log("the button clicked"),$(this).fadeOut("active")}),



$(document).ready(function(){
		$("a").click(function(event){
			alert("You clicked me!");
		});
	});



$(document).ready(function() {
    $('div').fadeIn('slow');
});


 $('.activate-box').click(function(){
	console.log('the button clicked');

	$('.box').addClass('active');
})

$('.submit').click(function (){
	console.log('focused on an input!');

	$('input').each(function (){
		if ((this).val() == '') {
			$(this).addClass('error');
		}
	});
});



//

function square (x) {
	return x * x
}

square(4) // -> 16













