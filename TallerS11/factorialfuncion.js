function calcularFactorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}


let numero = parseInt(prompt("Ingrese un número:"));
let factorial = calcularFactorial(numero);
document.write("El factorial de " + numero + " es " + factorial);
