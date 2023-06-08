const ciudadDestino = "Bogota";

const ciudadesDisponible= new Array("Lima","Santiago","Bogota","Montevideo");

console.log(`Verificando pasajes para la ciudad ${ciudadDestino}` );
if (ciudadesDisponible.indexOf(ciudadDestino) >= 0){
    console.log("vendo pasaje");
}

console.log(`en la lista esta ${ciudadesDisponible.length} elementos`);