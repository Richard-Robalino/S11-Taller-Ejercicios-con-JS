const Formulario = document.getElementById("Formulario");
const lista = document.getElementById("lista");
const datos = [];

Formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;  // Cambiado a minúscula "edad"
    const error = document.getElementById("error").value;
    const dato = { nombre, edad, error };  // Cambiado a minúscula "edad"
    datos.push(dato);
    
    mostrarDatos();
    Formulario.reset();
});

function mostrarDatos() {
    lista.innerHTML = "";
    for (let i = 0; i < datos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${datos[i].nombre}, Edad: ${datos[i].edad}, Error: ${datos[i].error}`;  // Cambiado a minúscula "edad"
        lista.appendChild(li);
    }
}
