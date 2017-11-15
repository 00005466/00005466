$(document).ready(function(){
	$('.card').hide();// Class card will be hiden from the begining
	$('.contactbtnshow').click(function(){
		$('.card').show();
	});//Class card will show all the info.

	$('.contactbtnhide').click(function(){
		$('.card').hide();
	});//hide class card

	$('.form-submit').click(function(){

		if($('.name').val() == ''){
			alert('Please enter your name');
		}//If the input is empty show alert 
		if($('.surname').val() == ''){
			alert('Please enter your surname');
		}//If the input is empty show alert 
		if($('.phone').val() == ''){
			alert('Please enter your phone number');
		}//If the input is empty show alert 
		if($('.phone').val().length < 7){
			alert('Please enter your phone number');
		}//If the input num is less than 7 numbers show alert
		if(!$('.name').val() == '' & !$('.surname').val() == '' & $('.phone').val().length >= 7){
			alert('THANK YOU FOR YOUR APPLICATION =)')
		}//after all input is done show alert (thank you)

	});

});