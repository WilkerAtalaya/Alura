const datos = [
    {
        'ciudad': 'Bogotá',
        'precio': 500
    },
    {
        'ciudad': 'Lima',
        'precio': 400
    },
    {
        'ciudad': 'Santiago',
        'precio': 380
    },
    {
        'ciudad': 'Montevideo',
        'precio': 200
    },
];

const presupuestoDisponible = 390;

let i = 0;
while ( i < datos.length  &&  datos[i].precio > presupuestoDisponible){
    i++;
}

if(i == datos.length)
    console.log("No  hay pasajes disponibles para ese precio.");
else
    console.log(`Puedas comprar pasajes para ${datos[i].ciudad}`);
 