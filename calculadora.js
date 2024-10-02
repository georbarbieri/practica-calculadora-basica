const prompt = require("prompt-sync")({ sigint: true });

//Calculadora con JS

function suma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}
function resta(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  if (num2 == 0) {
    return "No se puede dividir por 0, debe elegir otro valor";
  } else {
    return num1 / num2;
  }
}

console.log("Bienvenido a su calculadora virtual");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

let opcion = parseInt(prompt("Indique que operacion desea realizar: "));
let numero1;
let numero2;
let resultado;

switch (opcion) {
  case 1:
    numero1 = parseInt(prompt("Indique el primer numero a sumar: "));
    numero2 = parseInt(prompt("Indique el segundo numero a sumar: "));
    resultado = suma(numero1, numero2);
    console.log(" El resultado de la suma es: " + resultado);
    break;

  case 2:
    numero1 = prompt("Indique el primer numero a restar: ");
    numero2 = prompt("Indique el segundo numero a restar: ");
    resultado = resta(numero1, numero2);
    console.log(" El resultado de la resta es: " + resultado);
    break;
  case 3:
    numero1 = prompt("Indique el primer numero a multiplicar: ");
    numero2 = prompt("Indique el segundo numero a multiplicar: ");
    resultado = multiplicar(numero1, numero2);
    console.log(" El resultado de la multiplicacion es: " + resultado);
    break;
  case 4:
    numero1 = prompt("Indique el primer numero a dividir: ");
    numero2 = prompt("Indique el segundo numero a dividir: ");
    resultado = division(numero1, numero2);
    if (typeof resultado == "string") {
      console.log(resultado);
    } else {
      console.log("El resultado de la división es: " + resultado);
    }
    break;

  default:
    console.log("Ingresó una opcion no valida.");
    break;
}
