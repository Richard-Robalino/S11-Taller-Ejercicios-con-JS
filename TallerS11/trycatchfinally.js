function convertToNumber(str) {
    try {
       
        let number = parseInt(str);
        
        
        if (isNaN(number)) {
            throw new Error("La conversión falló. No es un número válido.");
        }

        console.log("Conversión exitosa: " + number);
        return number;
    } catch (error) {
        
        console.error("Error: " + error.message);
    } finally {
        
        console.log("Intento de conversión finalizado.");
    }
}

convertToNumber("123");

convertToNumber("abc");
