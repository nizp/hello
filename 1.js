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
				that.fn(this.index);
			}
		}
	}
	Tab.prototype.fn = function(index){
		for(var i=0;i<this.btn.length;i++){
			this.btn[i].className = '';
			this.divs[i].className = '';
		}
		this.btn[index].className = 'active';
		this.divs[index].className = 'show';
	}
}
