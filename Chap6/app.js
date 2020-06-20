var numberA = 42;
var numberB = 1337;

var biggest = whoIsTheBiggest(numberA, numberB);

function whoIsTheBiggest(a, b) {
	if (a > b) {
		return a;
	}else if (b > a){
		return b;
	}else{
		return "a equal b";
	}
    
}

alert(biggest)

function askNumber(){
	var number = prompt("Entrer un nombre");
	while (isNaN(number)){
		alert("Vous devez entrer un nombre !");
		var number = prompt("Entrer un nombre");
	}
	return number;
	
}

alert("Le nombre est : " + askNumber());
