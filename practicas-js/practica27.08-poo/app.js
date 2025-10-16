//1. Crear un objeto con 3 propiedades
//2. Accede y muestra su valor
//3. agregar una nueva propiedad 
//4. Elimina una de las 3 primeras propiedades
//5. agregar una funcion e invocala


//objeto con 3 propiedades
const auto = {
    marca: "ford",
    modelo: "ranger",
    año: 2025,
    arrancar: function () {
        console.log("el auto arranco");
    },
}

//acceder y mostrar su valor 
console.log(auto.marca)
console.log(auto.modelo)
console.log(auto.anio)

//agregar una nueva propiedad.
auto.color = "gris";

//elimino una de las tres primeras propiedades
delete auto.marca
console.log(auto);

//invocar la funcion
console.log(auto.arrancar());


