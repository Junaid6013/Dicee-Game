// for dice 1 or player 1
var randomnumber1=(Math.random())*6;
randomnumber1=Math.floor(randomnumber1);
randomnumber1=randomnumber1+1;
var randomdice1="dice" + randomnumber1 + ".png";  // dice1.png-dice6.png
var randomdiceimage1="images/" + randomdice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage1);

// for dice 2 or player 2
var randomnumber2=(Math.random())*6;
randomnumber2=Math.floor(randomnumber2);
randomnumber2=randomnumber2+1;
var randomdice2="dice" + randomnumber2 + ".png";  // dice1.png-dice6.png
var randomdiceimage2="images/" + randomdice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);


if(randomnumber1==randomnumber2){
  document.querySelector("h1").innerHTML="Draw";
}else if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins !";
}else{
  document.querySelector("h1").innerHTML="Player 2 Wins !";
}
