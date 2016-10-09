window.onload = function(){
	function Tab(){
		this.div = document.getElementsByTagName('div');
		this.btn = document.getElementsByTagName('input');
	}
	
	Tab.prototype.init = function(){
		for(var i=0;i<this.btn.length;i++){
			(function(index){
				this.btn[i].onclick = function(){
					that.fn(this.index);
				}
			})(i);
		}
	}
	Tab.prototype.fn = function(index){
		for(var i=0;i<this.btn.length;i++){
			this.btn[i].className = '';
			this.div[i].className = '';
		}
		this.btn[index].className = 'active';
		this.div[index].className = 'show';
	}
}
