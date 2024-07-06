let tamaño = parseInt(prompt("Ingrese el tamaño del triangulo:"));

for (let i = 0; i < tamaño; i++) {
    for (let j = 0; j < i; j++) {
        document.write("* ")
    }
    document.write("<br>")
}
