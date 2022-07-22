var randomNumber1 = Math.round(Math.random()*5)+1;  // generate random number between 1 to 6

var randomNumber2 = Math.round(Math.random()*5)+1;  // generate random number between 1 to 6

var randomImages1 = "dice"+ randomNumber1 +".png"; //Using random number to create random images with source of images

var randomImages2 = "dice"+ randomNumber2 +".png"; //Using random number to create random images with source of images

var img1 = document.querySelectorAll("img")[0].setAttribute("src" , randomImages1);/*select the img tag to change attributes to*/ 

var img2 =  document.querySelectorAll("img")[1].setAttribute("src" , randomImages2);/* set randomImages to implement in html*/


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Play 1 is winner";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 is winner🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
