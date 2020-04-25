var name = prompt('Hey! Can you Write your name here', 'Write your name here ');

var today = new Date();
var hrs = today.getHours();
  
	
	if(hrs <= 12 ){
		document.write  ('Good Morning ' +name);	
	}
	else if(hrs <= 18){
		document.write ('Good Afternoon ' +name);
	}else{
		document.write('Good Evening ' +name);
	}
	document.write('<br')
	
//prompt('text', default text')
//Document.writeln();
//https://www.w3schools.com/jsref/met_doc_write.asp