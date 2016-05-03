var EventUtil = {
	addHandler: function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent('on' + type,hander);
		}else{
			element['on' + type] = hander;
		}
	},
	removeHandler: function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent('on' + type,hander); 
		}else{
			element['on' + type] = NULL;
		}
	},
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	}
}

var list = document.getElementById('parent-id');
var handler = function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
		alert(target.id);
}
var type="click";
EventUtil.addHandler(list,type,handler);
