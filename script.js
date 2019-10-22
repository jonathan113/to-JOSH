let txt = document.getElementById("txt");
let button = document.getElementById("button");
let href = document.getElementById('href');
let label = document.getElementById('label');


href.style.visibility = "hidden";

button.onclick = function click(){
  if(txt.value == "iloveyou"){
    console.log('iloveyou');
      href.style.visibility = "visible";
  }else{
    console.log('hola');
    label.innerHTML = "try again";
  }
}
