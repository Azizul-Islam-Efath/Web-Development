var num1=Math.floor(Math.random()*6)+1;

var randomDice="dice"+num1+".png";

var randomImage="images/"+randomDice;


var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);

var num2=Math.floor(Math.random()*6)+1;

var randomDice2="dice"+num2+".png";

var randomImage2="images/"+randomDice2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);


if(num1>num2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if(num1===num2){
        document.querySelector("h1").innerHTML="It's A Draw!"
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
}