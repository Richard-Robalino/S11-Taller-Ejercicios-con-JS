function imprimirCuadrado(numero) {
   cuadrado=numero * numero
   return cuadrado
}

let numero = parseInt(prompt("Ingrese el tamaño del cuadrado:"));
document.write(imprimirCuadrado(numero));
