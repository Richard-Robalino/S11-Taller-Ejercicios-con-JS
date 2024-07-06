let usuarioCorrecto = "Richard"; 
let contraseñaCorrecta = "123456"; 
let intentosMaximos = 3;

for (let intentos = intentosMaximos; intentos > 0; intentos--) {
    let usuarioIngresado = prompt("Ingrese su usuario:");
    let contraseñaIngresada = prompt("Ingrese su contraseña:");
    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
        alert("El usuario y la contraseña son correctos.");
        document.write("Bienvenido al Sistema de Pedidos")
        break;
    } else {
        if (intentos > 1) {
            alert("El usuario o la contraseña son incorrectos. Le quedan " + (intentos - 1) + " intentos.");
        } else {
            alert("El usuario o la contraseña son incorrectos. Ha agotado sus intentos. Saliendo del sistema.");
        }
    }
}
