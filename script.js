var counter=0;
function randomNumber(){
var number= Math.floor(Math.random()*10);
return number
}
function computerNumber(){
var fourth= randomNumber();
for (var i;i=1;i++) {
	var third= randomNumber();
	var second= randomNumber();
	var first= randomNumber();
	if(third!=fourth && second!=fourth && second!=third && first!=fourth && first!=third && first!=second){break}
}
var rnd=fourth.toString()+third.toString()+second.toString()+first.toString();
console.log(rnd);
return rnd;
}
function verifyEntry(number){
	number=number.toString();
	verif=true;
	for (var i=0;i<4;i++){
		if (number.lastIndexOf(number.charAt(i))!=i){
			verif=false;
			break;
		}
	}
	return verif;
}
rnd = computerNumber();

function check(){
	var userNumber=$("#try").val().toString();
	var vache=0;
	var toreau=0;
	if (verifyEntry(userNumber)===false){$(".result").prepend('<p class="border border-danger text-white p-2"><b>'+userNumber+'</b> - Invalid entry or duplicated number, please try again.</p>')} else {
	for (var n=0; n<4; n++){
		for (var i=0; i<4; i++){
		if (userNumber.charAt(i) === rnd.charAt(n) && i==n)
			{toreau++;} else {if(userNumber.charAt(i) === rnd.charAt(n)) {vache++;}}

		}
	}
		counter++;
		if (toreau===4){
			$(".result").prepend(' <p class="border border-sucess text-white p-2"><b>'+userNumber+'</b> - 4 bulls, YOU WIN after <b>'+counter+'</b> tries. A new number has been set, play again.</p>');
			rnd=computerNumber();
			counter=0;}
		else{$(".result").prepend(' <p class="border border-info text-white p-2"><b>'+userNumber+'</b> -   '+ vache +' cow(s) and '+toreau+' bull(s), <b>[ Tries: '+counter+' ]</b> </p>');}}
		$("#try").val("");
}