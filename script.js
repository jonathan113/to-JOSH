let txt = document.getElementById("txt");
let button = document.getElementById("button");
let href = document.getElementById('href');
let label = document.getElementById('label');
let rta;

href.style.visibility = "hidden";

button.onclick = function click(){
  if(txt.value == "iloveyou"){
    console.log('iloveyou');
      href.style.visibility = "visible";
    rta = true;
  }else{
    console.log('hola');
    label.innerHTML = "try again";
  }
}
