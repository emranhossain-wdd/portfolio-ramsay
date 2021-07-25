function myValidation(){
	var name = document.forms['contactForm']['name'].value;
	var email = document.forms['contactForm']['email'].value;
	var phone = document.forms['contactForm']['phone'].value;
	var message = document.forms['contactForm']['message'].value;
	var error =[];
	if(name =='' || name.lenght <3){
		error[0]="Name must be at list 3 letters";
		document.getElementById('name-error').innerHTML = error[0];
	}else{
		document.getElementById('name-error').innerHTML = '';
	}
	if(email =='' || email.lenght <10){
		error[1]="please insert a valid email";
		document.getElementById('email-error').innerHTML = error[1];
	}else{
		document.getElementById('email-error').innerHTML = '';
	}
	if(phone =='' || phone.lenght <11){
		error[2]="please insert a valid phone number";
		document.getElementById('phone-error').innerHTML = error[2];
	}else{
		document.getElementById('phone-error').innerHTML = '';
	}
	if(message =='' || message.lenght <50){
		error[3]="message must be at list 50 letters";
		document.getElementById('message-error').innerHTML = error[3];
	}else{
		document.getElementById('message-error').innerHTML = '';
	}
	if(error.length > 0){
		return false;
	}
}
function myFocus(x){
	x.style.background='#ffffffba';
}

/* ====== jQuery Start ===== */


$(document).ready(function(){
	
	
	/* ====== manuber active Start ===== */
	$('#main-menu').on('click', 'li',function(){
		$('#main-menu li.active').removeClass('active');
		$(this).addClass('active');
	});
	
	/* ====== manuber Start ===== */
	$('#mobile-icon').click(function(){
		$('#main-menu ul').slideToggle(1000);
	});
	$(window).resize(function(){
		if($(window).width() > 576){
				$('#main-menu ul').show();
		}else{
			$('#main-menu ul').hide();
		}
	});
	
	/* ====== Upper Button Scroll Start ===== */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
		
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},2000);
	});
	
	
});