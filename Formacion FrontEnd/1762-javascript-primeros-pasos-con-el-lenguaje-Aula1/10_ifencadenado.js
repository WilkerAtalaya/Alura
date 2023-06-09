const ciudadDestino = "Bogota";
const ciudadesDisponible= new Array("Lima","Santiago","Bogota","Montevideo");

let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}:`);

if(edadPasajero >=18 || estaAcompanado ){
    if(ciudadesDisponible.indexOf(ciudadDestino) > -1){
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar')
    }
}else {
    if(edadPasajero >=16 && ciudadDestino=='Lima'){
        console.log('Pasaje disponible para venta');
    } else {
        console.log('pasajero no cumple las reglas');
    }
        
}


