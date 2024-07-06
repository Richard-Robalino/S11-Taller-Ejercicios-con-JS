//pedir dos numero y verificar si son multiplos

let numero1 =parseInt(prompt("Ingrese el primer numero"))
let numero2 =parseInt(prompt("Ingrese el segundo numero"))

if(numero1 % numero2==0  || numero2 % numero1==0){
    document.write("Los numeros "+ numero1 + " "+ numero2+" Son multiplos "+"<br>")
}else{
    document.write("Los numeros "+ numero1 + " "+ numero2+" No son multiplos "+"<br>")
}
