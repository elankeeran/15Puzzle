(function(){

	var puzzle = puzzle || {};

	puzzle = {
		init: function(){
			console.log("Game Initialized");
			this.createTable(15);
		},
		createTable: function(puzzleLength){
			var arr = [];
			if(document.getElementById('container'))
				var	 myContainer = document.getElementById('container');
			var count = 0;
			var table = document.createElement('table');

			for(var i=1; i<=puzzleLength; i++) {
			   arr.push(i.toString());
			}
			arr = shuffle(arr);
			for($u=1; $u<=4; $u++){
              	var tr = document.createElement('tr');
                for( var j=0; j<4; j++)
                {
	               var td = document.createElement('td');
	                if(typeof arr[count] != 'undefined'){
	                	var dd = arr[count]
	                	if(dd<10){dd='0'+dd}
	                	td.innerHTML= dd;
	                }
	                td.addEventListener( 'click' , this.handleClick , false );
	                tr.appendChild(td);
	                count++;
                }
                  table.appendChild(tr);

		    }

		    myContainer.appendChild(table);
		},
		handleClick : function(event){
			var currentNumber = event.target.innerHTML;
			if(event.target.previousSibling){
				if(event.target.previousSibling.innerHTML===""){
					event.target.previousSibling.innerHTML=currentNumber;
					event.target.innerHTML="";
				}
			}
			 if(event.target.parentNode.previousSibling){
				if(event.target.parentNode.previousSibling.childNodes[event.target.cellIndex].innerHTML===""){
					event.target.parentNode.previousSibling.childNodes[event.target.cellIndex].innerHTML=currentNumber;
					event.target.innerHTML="";
				}
			}
			 if(event.target.nextSibling){
				if(event.target.nextSibling.innerHTML===""){
					event.target.nextSibling.innerHTML=currentNumber;
					event.target.innerHTML="";
				}
			}
			 if(event.target.parentNode.nextSibling){
				if(event.target.parentNode.nextSibling.childNodes[event.target.cellIndex].innerHTML===""){
					event.target.parentNode.nextSibling.childNodes[event.target.cellIndex].innerHTML=currentNumber;
					event.target.innerHTML="";
				}
			}

		}


	};


	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

	puzzle.init();
})();

