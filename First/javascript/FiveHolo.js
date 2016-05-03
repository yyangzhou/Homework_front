var first = document.getElementById('Holo');
var seconed = first.getElementsByTagName('li');
var array = Array.prototype.slice.call(seconed);
function Holo(){
	var one = arguments[0];
	var two = arguments[1];
	one.className = "select";
	two.className = "select";
}

function clear1(){
	var one = arguments[0];
	var two = arguments[1];
	one.className = "";
	two.className = "";
}
// document.getElementById('onclick').onclick = function(){Holo(array[1],array[2])};
// document.getElementById('onclick').onclick = function(){clear1(array[1],array[2])};
var flag = true;
if(flag){
	document.getElementById('onclick').onclick = function(){Holo(array[1],array[2])};
	flag = false;
}else{
	document.getElementById('onclick').onclick = function(){clear1(array[1],array[2])};
	flag = true;
}

