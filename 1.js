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
				that.fn(this);
			}
		}
	}
	Tab.prototype.fn = function(that){
		for(var i=0;i<this.btn.length;i++){
			this.btn[i].className = '';
			this.divs[i].className = '';
		}
		that.className = 'active';
		this.divs[that.index].className = 'show';
		
	}
}
