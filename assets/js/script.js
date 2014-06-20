var blocks = function() {
			var Block = function(element){ this.setElement(element); },
				a = [];
			Block.prototype.element = undefined;
			Block.prototype.setElement = function(element) {
				this.element = element;
			};
			Block.prototype.left = function () {};
			Block.prototype.right = function () {};
			Block.prototype.enter = function () {
				document.getElementById(this.element).className = 'block active';
			};
			a[0] = new Block('cel-1');
			a[1] = new Block('cel-2');
			a[2] = new Block('cel-3');
			a[0].left = function() {
				document.getElementById(this.element).className = 'block';
				current = a[2];
				current.enter();
			};
			a[0].right = function() {
				document.getElementById(this.element).className = 'block';
				current = a[1];
				current.enter();
			};
			a[1].left = function() {
				document.getElementById(this.element).className = 'block';
				current = a[0];
				current.enter();
			};
			a[1].right = function() {
				document.getElementById(this.element).className = 'block';
				current = a[2];
				current.enter();
			};
			a[2].left = function() {
				document.getElementById(this.element).className = 'block';
				current = a[1];
				current.enter();
			};
			a[2].right = function() {
				document.getElementById(this.element).className = 'block';
				current = a[0];
				current.enter();
			};
			current = a[0];
			var that = {};
			that.start = function() {
				document.onkeypress = function(e){
					var keyCode=e.keyCode? e.keyCode : e.charCode;
					if(keyCode === 37)
						current.left();
					else if(keyCode === 39)
						current.right();
				};
			};
			return that;
		}();
		blocks.start();