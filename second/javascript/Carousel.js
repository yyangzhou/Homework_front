// var image = document.getElementById('image');

// var button = document.getElementById('icoBox');
// var span = document.getElementsByTagName('span');

// button.addEventListener("click",function(event){
// 		var newindex = event.target.id;
// 		// var rel = document.getElementsByTagName('span');
// 		image.style.left = (newindex - 1)*(-284) + 'px';
// 		for(var i = 0;i<span.length;i++){
// 			span[i].className = "";
// 		}
// 		span[newindex - 1].className = "active";
// },false);

function one(element,type,style){
	var image = document.getElementById('image');
	var button = document.getElementById('icoBox');
	var span = document.getElementsByTagName('span');
	function oclick(){
		button.addEventListener(type,function(event){
			var newindex = event.target.id;
			image.style.left = (newindex - 1)*(element) + 'px';
			for(var i = 0;i<span.length;i++){
				span[i].className = "";
			}
			span[newindex - 1].className = style;
		},false);
	}
	oclick();
};
one('-284','click','active');
