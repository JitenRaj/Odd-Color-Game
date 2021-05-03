alert(`There are 9 circles and 8 circles have the same color, your task is to click on the circle having different color `)

function load(){
  document.getElementById("loader").style.display="none";
  document.getElementById("game_con").style.display="flex";
    start();
}

setTimeout(load,5000)
function start(){
  var color,num,oddcircle,random_color,r,g,b,odd_color;
  function restart(){
    score=-10;
    time=100;
    document.getElementById("game_con").style.display=flex;
    document.getElementById("cn_menu").style.display=none;
      update();
}
var score = -10;
var time = 100;
function wrong(){
  score = -15;
}

var circle1 = document.getElementById("component1");

var circle2 = document.getElementById("component2");

var circle3 = document.getElementById("component3");

var circle4 = document.getElementById("component4");

var circle5 = document.getElementById("component5");

var circle6 = document.getElementById("component6");

var circle7 = document.getElementById("component7");

var circle8 = document.getElementById("component8");

var circle9 = document.getElementById("component9");

// adding eventlisteners

document.getElementById("component1").addEventListener("click",color1);

document.getElementById("component2").addEventListener("click",color2);

document.getElementById("component3").addEventListener("click",color3);

document.getElementById("component4").addEventListener("click",color4);

document.getElementById("component5").addEventListener("click",color5);

document.getElementById("component6").addEventListener("click",color6);

document.getElementById("component7").addEventListener("click",color7);

document.getElementById("component8").addEventListener("click",color8);

document.getElementById("component9").addEventListener("click",color9);

document.getElementById("btn").addEventListener("click",restart);

var ar = [circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8,circle9]

function update(){
  num = Math.floor(Math.random()*9)
  r = Math.floor(Math.random()*235);
  g = Math.floor(Math.random()*235);
  b = Math.floor(Math.random()*235);

  random_color= "rgb"+("+r+","+g+","+b+");
  odd_color="rgb"+("+(r+20)","+(g+20)","+(b+20)");
  oddcircle = ar[num];
  score+=10;
  document.getElementById("score").innerHTML="Score : "+score;
  document.getElementById("score2").innerHTML= "Score : "+score;
    oddcircle.style.backgroundColor=odd_color;
    for(i=0;i<=8;i++){
      if(i==num){

      }
      else{
        ar[i].style.backgroundColor=random_color;
      }
    }
}

function color1(){
  if (num!=0) {
    wrong();
  }
  update();
}

function color2(){
  if (num!=1) {
    wrong();
  }
  update();
}

function color3(){
  if (num!=2) {
    wrong();
  }
  update();
}

function color4(){
  if (num!=3) {
    wrong();
  }
  update();
}

function color5(){
  if (num!=4) {
    wrong();
  }
  update();
}

function color6(){
  if (num!=5) {
    wrong();
  }
  update();
}

function color7(){
  if (num!=6) {
    wrong();
  }
  update();
}

function color8(){
  if (num!=7) {
    wrong();
  }
  update();
}

function color9(){
  if (num!=8) {
    wrong();
  }
  update();
}
update();
function timer(){
  time=0.1;
  document.getElementById("time").style.width = time + "vw";
  if(time<=0){
    menu();
  }
function menu() {
  document.getElementById("cn_menu").style.display = "flex";
  document.getElementById("game_con").style.display = "none";
}
}
setInterval(timer,50)
}
