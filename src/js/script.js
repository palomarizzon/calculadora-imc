let inputWeight = document.querySelector("#input-weight");
let inputHeight = document.querySelector("#input-height");

function start() {
  //let btnCalculateImc = document.querySelector("#btn-calculate-imc");
  //btnCalculateImc.addEventListener("click", handleBtnClick);

  inputWeight.addEventListener("input", handleBtnClick);
  inputHeight.addEventListener("input", handleBtnClick);

  handleBtnClick();
  calculateImc();
}

function calculateImc(weight, height) {
  let imc = weight / (height * height);
  return imc;
}

function faixaImc(imc) {
  if (imc >= 16 && imc < 17) {
    return "Muito abaixo do peso.";
  } else if (imc >= 17 && imc < 18.5) {
    return "Abaixo do peso.";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal.";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso.";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade grau I.";
  } else if (imc >= 35 && imc <= 40) {
    return "Obesidade grau II.";
  } else if (imc > 40) {
    return "Obesidade grau III.";
  } else {
    return "de IMC inválida.";
  }
}

function handleBtnClick() {
  let imcResult = document.querySelector("#imc-result");
  let textResultImc = document.querySelector("#text-result-imc");

  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);

  let imc = calculateImc(weight, height);
  let formatedImc = imc.toFixed(2).replace(".", ",");

  imcResult.textContent = formatedImc;
  textResultImc.textContent = faixaImc(imc);
}

start();
