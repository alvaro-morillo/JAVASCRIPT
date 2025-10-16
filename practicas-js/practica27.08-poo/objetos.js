//creacion de objeto literal

const coche = {
    marca: "toyota", //marca es una key y toyota seria el valor
    modelo: "corolla",
    año: 2020,
    encender: function () {
        console.log("el coche se encendio");
    },
    'color-exterior': 'rojo' //propiedad con guion  //comillas simple o dobles es lo mismo
};

// acceder a las propiedades/clave/key

console.log(coche.marca); 
//notacion de puntos, nosotros accedemos a la propiedad. llamamos al objeto y con el punto llamamos a la propiedad

console.log(coche['modelo']);
//notacion de corchetes

console.log(coche['color-exterior']);
//de esta manera accedemos a las propiedades con caracteres especiales
//para llamar a una propiedad que tenga caracteres especiales hay que hacerlo con notacion de corchetes y al resto de las propiedades se puede utilizar ambas, notacion de puntos o de corchetes


console.log(coche.encender());
//de esta manera accedemos a la funcion, tiene que ser con los parentesis si o si. dentro de los parentesis pueden estar los parametros o no


coche.puertas = 4;
coche.año = 2021;
//añadir o modificar las propiedades. en ves de dos puntos de pone el signo igual

delete coche.puertas
//para eliminar una propiedad tenemos que llamar a la palabra reservada "delete" y llamar al objeto y a la propiedad que queremos eliminar

console.log(coche);


