var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice"+randomnumber1+".png";
var randomDiceImage2="images/dice"+randomnumber2+".png";
document.getElementById("demo1").src=randomDiceImage;
document.getElementById("demo2").src=randomDiceImage2;
//or by document.querySelectorAll("image")[0];

if(randomnumber1>randomnumber2){
    document.getElementById("demo").innerHTML="Play 1 wins!"
}
else if(randomnumber1<randomnumber2){
    document.getElementById("demo").innerHTML="Play 2 wins!"
}
else if(randomnumber1==randomnumber2){
    document.getElementById("demo").innerHTML="Draw!"
}
setInterval(myTimer, 1500);

function myTimer() {
    document.getElementById("demo").innerHTML="Refresh Me!"

}
