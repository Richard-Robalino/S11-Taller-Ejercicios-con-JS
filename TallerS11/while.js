
let numero = parseInt(prompt("Ingrese un número del 1 al 12:"));

if (numero >= 1 && numero <= 12) {
 let i= 1;
  while (i <= 12) {
    document.write(numero + " x " + i + " = " + numero * i +"<br>");
    i++;
  }
} else {
  alert("Por favor, ingrese un número del 1 al 12.");
}
