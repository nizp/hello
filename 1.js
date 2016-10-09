window.onload = function(){
	function Tab(){
		this.divs = document.getElementsByTagName('div');
		this.btn = document.getElementsByTagName('input');
	}
	
	Tab.prototype.init = function(){
		var that = this;
		for(var i=0;i<this.btn.length;i++){
			this.btn[i].index = i;
			this.btn[i].onclick = function(){
				
			}
		}
	}
	Tab.prototype.fn = function(){
		
	}
}
