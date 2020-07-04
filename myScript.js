/* Basic Calculator App */

var exp = '', number, decimal, equal, operator, allowSR = true;
var textview = document.forms['myForm']['textview'];

function insertNum(num) {
	if (equal) {
		exp = num;
		textview.value = exp;
		number = true;
		equal = false;
	}
	else {
		exp = textview.value + num;
		textview.value = exp;
		number = true;
	}
	if (operator) decimal = false;
	SR('a');
}

function insertOp(op) {
	textview.value = exp + op;
	operator = true;
	equal = false;
	allowSR = false;
	SR('a');
}

function insertDec() {
	if (number && !decimal) {
		textview.value = exp + '.';
		decimal = true;
		operator = false;
	}
}

function equalTo() {
	if (exp) {
		exp = eval(exp);
		textview.value = exp;
		equal = true;
		decimal = false;
		number = false;
		allowSR = true;
		SR('a');
	}
}

function clean() {
	exp = '';
	textview.value = exp;
	decimal = false;
}

function back() {
	exp = textview.value;
	exp = exp.substring(0, exp.length - 1);
	textview.value = exp;
	return textview.value;
}

function SR(x) {
	if (x=='r') {
		exp = Math.sqrt(exp);
		textview.value = exp;
	}
	else if (x=='s') {
		exp = Math.abs(exp);
		textview.value = exp;
	}
	else if (x=='a' && allowSR) {
		document.getElementById('r').disabled = false;
		document.getElementById('s').disabled = false;
	}
	else if (!allowSR) {
		document.getElementById('r').disabled = true;
		document.getElementById('s').disabled = true;
	}
}
 

/* Form */


function validate() {
	alert("HELLO");
	var user = f.NAME.value;
	var phonenumber = f.Phonenumber.value;
	var email = f.Email.value;
	var RNAME = new RegExp("[A-Z]*[a-z. ]*$");
	var RPhoneNumber = new RegExp("[0-9]{9}$");
	var REmail = new RegExp("[a-z]+[a-z0-9]+@gmail.com$");
	if (RNAME.test(user) && RPhoneNumber.test(phonenumber) && REmail.test(email)) {
		alert("REGISTRATION SUCCESSFUL");
		return true;
	}
	else {
		if (!RNAME.test(user)) {
			alert("Invalid Name");
		}
		if (!RPhoneNumber.test(phonenumber)) {
			alert("Invalid Number");
		}
		if (!REmail.test(email)) {
			alert("Invalid Email");
		}
	}
}


/* PALINDROME */


function palindrome() {
	var str = document.getElementById("palindrome").value;
	var reg = /[\W_]/g;
	var smallStr = str.toLowerCase().replace(reg, "");
	var reversed = smallStr.split("").reverse().join("");
	if (reversed === smallStr) {
		alert("The inputted string is a palindrome");
		return true;
	}
	alert("The inputted string is not a palindrome");
	return false;
}


/* ANAGRAM */


function anagram() {
	var str1 = document.getElementById("str1").value;
	var str2 = document.getElementById("str2").value;
	let arr = {};
	for (var i = 0; i < str1.length; i++) {
		let char = str1[i];
		if (char in arr) {
			arr[char]++;
		} else {
			arr[char] = 1;
		}
	}
	for (var i = 0; i < str2.length; i++) {
		let char = str2[i];
		if (char in arr) {
			arr[char]--;
		} else {
			alert("The word is not an anagram of the string of words");
			return false;
		}
	}
	for (var k in arr) {
		if (arr[k]) {
			return false;
		}
	}
	alert("The word is an anagram of the string of words");
	return true;
}


/* WHO WILL SURVIVE? */


function mapping() {
	var dict = {};
	dict[0] = "Human";
	dict[1] = "Cockroach";
	dict[2] = "Nuclear Bomb";
	var x1 = document.getElementById("random1").value;
	var x2 = document.getElementById("random2").value;
	var y1 = x1 % 3;
	var y2 = x2 % 3;
	if (y1 === y2) {
		alert("TIE");
		return "TIE";
	}
	else if ((y1 === 0 && y2 === 1 ) || (y1 === 1 && y2 === 0)) {
		alert("Human");
		return "Human";
	}
	else if ((y1 === 0 && y2 === 2) || (y1 === 2 && y2 === 0)) {
		alert("Nuclear Bomb");
		return "Nuclear Bomb";
	}
	else if ((y1 === 1 && y2 === 2) || (y1 === 2 && y2 === 1)) {
		alert("Cockroach");
		return "Cockroach";
	}
}
