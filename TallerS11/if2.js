let num1 =parseInt(prompt("Ingrese el primer numero"))
let num2=parseInt(prompt("Ingrese el segundo numero"))
let num3 =parseInt(prompt("Ingrese el tercer numero"))

var mayor = num1;
var menor = num1;

if (num2 > mayor) {
    mayor = num2;
  }
  if (num2 < menor) {
    menor = num2;
  }
  

  if (num3 > mayor) {
    mayor = num3;
  }

  if (num3 < menor) {
    menor = num3;
  }
  

  document.write("El número mayor es: " + mayor + "<br>");
  document.write("El número menor es: " + menor);