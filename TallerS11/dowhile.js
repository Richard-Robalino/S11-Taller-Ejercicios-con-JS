let numero = parseInt(prompt("Ingrese un numero minimo de tres:"));
let aux = numero;
let inverso = 0; 

do {
    let residuo = aux % 10;
    inverso = inverso * 10 + residuo;
    aux = Math.floor(aux / 10);
} while (aux != 0);

if (inverso == numero) {
    alert(numero + " es un palíndromo");
} else {
    alert(numero + " no es un palíndromo");
}
