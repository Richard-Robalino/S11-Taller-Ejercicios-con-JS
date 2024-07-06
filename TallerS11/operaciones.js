let numero1 =parseInt(prompt("Ingrese el primer numero"))
let numero2 =parseInt(prompt("Ingrese el segundo numero"))

suma =numero1+numero2
resta =numero1-numero2
mutiplicacion =numero1*numero2
divicion =numero1/numero2
potencia =numero1**numero2
document.write("La suma de los numero es:"+ suma + "<br>")
document.write("La resta de los numero es:"+ resta+ "<br>")
document.write("La mutiplicacion de los numero es:"+ mutiplicacion + "<br>")
document.write("La divicion de los numero es:"+ (Math.round(divicion)) + "<br>")
document.write("La divicion de los numero es:"+ (Math.floor(divicion)) + "<br>")
document.write("La divicion de los numero es:"+ (divicion.toFixed(2)) + "<br>")
document.write("La potencia de los numero es:"+ potencia )

