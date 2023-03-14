const player1=document.getElementById('image1');
const player2=document.getElementById('image2');
const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissor=document.getElementById('scissor');
var image2=document.getElementById('2playerimg');
var image1=document.getElementById('1playerimg');
var player1pick;
var player2pick;

rock.addEventListener("click",rockpicked);
paper.addEventListener("click",paperpicked);
scissor.addEventListener("click",scissorpicked);

//rock------- 
function rockpicked(){
//animation
let timerid=null;
let y=1;
let y2=1;
let direction=false;
let gamestart=false

//reset
image2.src='rock.png';
image1.src='rock.png';

timerid=setInterval(anim,15)

function anim(){
if(y==-40){
direction=true;
}
if(y>=2){
gamestart=true;
clearInterval(timerid)
}
if(rock.focus && y > -40 && direction==false){
y-=1;
y2+=1;
player1.style.transform='rotate('+y+'deg)';
player2.style.transform='rotate('+y2+'deg)';
}
if(direction==true){
y+=1;
y2-=1;
player1.style.transform='rotate('+y+'deg)';
player2.style.transform='rotate('+y2+'deg)';
}}
//image
setTimeout(function(){
if(gamestart=true){
player1pick=1;
player2pick=Math.floor(Math.random()*3)+1;

if(player2pick==2){
image2.src='paper.png';
}
if(player2pick==3){
image2.src='scissors.png';
}
}},1250);



//player2
setTimeout(function(){
if(player2pick==2){
alert("You lose!");
}
if(player2pick==3){
alert("You win!");
}
if(player2pick==1){
alert("Draw!");
}
},2000);
}

//paper------- 
 function paperpicked(){
 //animation
 let timerid=null;
 let y=1;
 let y2=1;
 let direction=false;
 let gamestart=false
 
 //reset
 image2.src='rock.png';
 image1.src='rock.png';
 
 timerid=setInterval(anim,15)
 
 function anim(){
 if(y==-40){
 direction=true;
 }
 if(y>=2){
 gamestart=true;
 clearInterval(timerid)
 }
 if(rock.focus && y > -40 && direction==false){
 y-=1;
 y2+=1;
 player1.style.transform='rotate('+y+'deg)';
 player2.style.transform='rotate('+y2+'deg)';
 }
 if(direction==true){
 y+=1;
 y2-=1;
 player1.style.transform='rotate('+y+'deg)';
 player2.style.transform='rotate('+y2+'deg)';
 }}
 //image
 setTimeout(function(){
 image1.src="paper.png";
 
 if(gamestart=true){
 player1pick=2;
 player2pick=Math.floor(Math.random()*3)+1;
 
 if(player2pick==2){
 image2.src='paper.png';
 }
 if(player2pick==3){
 image2.src='scissors.png';
 }
 }},1250);
 
 
 
 //player2
 setTimeout(function(){
 if(player2pick==3){
 alert("You lose!");
 }
 if(player2pick==1){
 alert("You win!");
 }
 if(player2pick==2){
 alert("Draw!");
 }
 },2000);
 }
 
//scissor-------
function scissorpicked(){
 //animation
 let timerid=null;
 let y=1;
 let y2=1;
 let direction=false;
 let gamestart=false
 
 //reset
 image2.src='rock.png';
 image1.src='rock.png';
 
 timerid=setInterval(anim,15)
 
 function anim(){
 if(y==-40){
 direction=true;
 }
 if(y>=2){
 gamestart=true;
 clearInterval(timerid)
 }
 if(rock.focus && y > -40 && direction==false){
 y-=1;
 y2+=1;
 player1.style.transform='rotate('+y+'deg)';
 player2.style.transform='rotate('+y2+'deg)';
 }
 if(direction==true){
 y+=1;
 y2-=1;
 player1.style.transform='rotate('+y+'deg)';
 player2.style.transform='rotate('+y2+'deg)';
 }}
 //image
 setTimeout(function(){
 image1.src="scissors.png";
 
 if(gamestart=true){
 player1pick=3;
 player2pick=Math.floor(Math.random()*3)+1;
 
 if(player2pick==2){
 image2.src='paper.png';
 }
 if(player2pick==3){
 image2.src='scissors.png';
 }
 }},1250);
 
 
 
 //player2
 setTimeout(function(){
 if(player2pick==1){
 alert("You lose!");
 }
 if(player2pick==2){
 alert("You win!");
 }
 if(player2pick==3){
 alert("Draw!");
 }
 },2000);
 }