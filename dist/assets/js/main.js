const primeiroNumero = document.querySelector(".primeiroNumero");
const segundoNumero = document.querySelector(".segundoNumero");
const areaResult = document.querySelector(".areaResultado");

function calcular() {
  const resultado =
    parseFloat(primeiroNumero.value) + parseFloat(segundoNumero.value);
  areaResult.value = resultado;
}

const submitButton = document.querySelector(".botaoCalc");
submitButton.addEventListener("click", calcular);
