
function clique(event) {
  const index = event.currentTarget.getAttribute("data-index");
  console.log("Clicado na div com índice " + index);

  var display = document.querySelector('.display-text');
  display.innerHTML += index;


}
function limpar() {
  var display = document.querySelector('.display-text');
  display.innerHTML = '';
}
function backspace() {
  var display = document.querySelector('.display-text');
  display.innerHTML = display.innerHTML.slice(0, -1);
}

divisao() {
  num1 = document.querySelector('.display-text').innerHTML;
  
}

function calcular() {
  
  var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


}
