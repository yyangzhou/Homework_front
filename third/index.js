document.getElementById('submit').onclick = function text() {
	var number = document.getElementById('email').value;
	var phone = document.getElementById('phone_number').value;
	if((number == '')&&(phone == '')){
		alert('没有值');
	}else{
		isEmail(number);
		isNumber(phone);
	}
	
} 
function isEmail(test){
	var res =  /^\w+@[0-9a-zA-Z.]+\.[com]/;	
	var tt = res.test(test);
	if(tt){
		alert('邮箱正确');
	}else{
		alert('邮箱错误');
	}
}
function isNumber(text){
	var res = /^[0-9]{11}/;
	var tt = res.test(text);
	if(tt){
		alert('电话正确');
	}else{
		alert('电话错误');
	}
}
