
let menu = prompt("Por favor, elija un menú: carne, pescado o verduras.");

switch (menu) {
  case "carne":
  case "pescado":
    let bebida = prompt("Has elegido " + menu + ". ¿Prefieres vino blanco o vino tinto?");
    if (bebida =="vino blanco") {
    alert("Has elegido " + menu + " y " + bebida + ".");
    document.write("Has elegido " + menu + " y " + bebida + ".");
    }else{
    alert("Has elegido " + menu + " y " + bebida + ".");
    document.write("Has elegido " + menu + " y " + bebida + ".");
    }
    break;
  case "verduras":
    let bebida2 = prompt("Has elegido verduras. ¿Prefieres vino blanco o agua sin gas?");
    if (bebida2 =="vino blanco") {
        alert("Has elegido " + menu + " y " + bebida2 + ".");
        document.write("Has elegido " + menu + " y " + bebida2 + ".");
    }else{
        alert("Has elegido " + menu + " y " + bebida2 + ".");
        document.write("Has elegido " + menu + " y " + bebida2 + ".");
    }
    break;
  default:
    alert("Por favor, elige otra opción del menú.");
}
