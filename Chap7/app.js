var nicks = [], nick;

while(nick = prompt("Enter a name: ")){
	nicks.push(nick);
}

if (nicks.length == 0){
	console.log("If")
	alert("You didn't enter a name!");
}else{
	console.log("else")
	alert(nicks.join(" "));
}

