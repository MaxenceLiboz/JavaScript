var numbersto20 = ["", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten", "eleven",
					   "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var numbertens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var number, numberLength, units, tens, hundreds, numberInLetter = [], upperCase;

while(isNaN(number) || number < 0 || number > 999 || number === ""){
	number = prompt("Enter a number between 0 and 999: ");
}


convertToLetter();
if (numberInLetter[0] == "" && numberInLetter[1] == ""){
	numberInLetter.splice(0, 2);
}
else if (numberInLetter[0] == ""){
	numberInLetter.splice(0, 1);
}

upperCase = numberInLetter[0];
upperCase = upperCase.charAt(0).toUpperCase() + upperCase.slice(1);
numberInLetter[0] = upperCase;
alert(numberInLetter.join(" "));

function convertToLetter(){
	//take each units and put it in the specific variable
	units = number % 10;
	tens = (Math.floor(number / 10)) % 10;
	hundreds = (Math.floor(number / 100)) % 10;
	numberLength = number.length;

	//Add the hundred
	numberInLetter.push(numbersto20[hundreds]);

	if (numberInLetter[0]){
		numberInLetter.push("hundred");
	}

	//Add the tens and the units
	if (tens == 1){
		numberInLetter.push(numbersto20[10 + units]);
	}
	else{
		numberInLetter.push(numbertens[tens]);
		numberInLetter.push(numbersto20[units]);
	}
}
