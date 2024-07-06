let numero = parseInt(prompt("Ingrese un número:"));
let multiplos = "";

for (let i = 1; i <= 100; i++) {
    multiplos += numero * i + "<br>";
}

document.write("Los primeros 10 múltiplos de " + numero + " son: " + multiplos );
console.log("Los primeros 10 múltiplos de " + numero + " son: " + multiplos );

