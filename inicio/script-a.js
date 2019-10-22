let button = document.getElementById("button");
let ph = document.getElementById('p');
let div1 = document.getElementById('button1');
let button1 = document.getElementById('buttona');
let div2 = document.getElementById('a');
let button2 = document.getElementById('Ba');
let div3 = document.getElementById('b');
let div4 = document.getElementById('c');
let button3 = document.getElementById('bb');
let div = document.getElementById('love');



p.style.visibility = "hidden";
div1.style.visibility = "hidden";
div2.style.visibility = "hidden";
div3.style.visibility = "hidden";
div4.style.visibility = "hidden";

button.onclick = function click1(){
  p.style.visibility = "visible";
  button.visibility = "hidden";
}

  button1.onclick = function b1(){
    div1.style.visibility = "visible";
    button1.visibility = "hidden";
  }

button2.onclick = function ba(){
div2.style.visibility = 'visible';
  button2.visibility = "hidden";
}
button3.onclick = function click1(){
  div4.style.visibility = "visible";
  button3.visibility = "hidden";
}
love.onclick = function click1(){
  div3.style.visibility = "visible";
  love.visibility = "hidden";
}
