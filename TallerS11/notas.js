
let nota = parseFloat(prompt("Ingrese la nota:"));
let materia = prompt("Ingrese la materia:");


if (nota >= 9 && nota <= 10) {
    document.write("Felicidades, usted aprobo " + materia + " con " + nota + ". Excelente");
} else if (nota >= 8 && nota < 9) {
    document.write("Aprobo la asignatura " + materia + " con " + nota + "Excelente");
} else if (nota >= 7 && nota < 8) {
    document.write("Aprobo la asignatura " + materia + " con " + nota + "Excelente");
} else if (nota >= 1 && nota < 7) {
    document.write("Reprobo " + materia + " con " + nota + ". Necesita mejorar.");
} else {
    document.write("La nota ingresada no es valida.");
}
