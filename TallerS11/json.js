
let jsonString = '{"name": "Juan", "age": 30, "city": "Madrid"}';

try {
    let jsonObj = JSON.parse(jsonString);
    console.log(jsonObj);
    console.log("Nombre: " + jsonObj.name);
    console.log("Edad: " + jsonObj.age);
    console.log("Ciudad: " + jsonObj.city);
} catch (error) {

    console.error("Error al convertir JSON: " + error.message);
}
