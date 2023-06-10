var a = "Hola";
var b = "Mundo";


console.log("Hola Mundo");

// Concatena dos strings
console.log(a.concat(b));
var c=(a.concat(b)).concat(" Mundial");

// Retornar el caracter especificando el indice:
console.log(b.charAt(2));

// retorna booleano si el argumento esta dentro del string
console.log(a.includes("hack") + " " + b.includes("n"));

// Retorna el primer indice del argumento, si hay un segundo argumento 
//se obviaran los primeros elementos hasta el segundo argumento
console.log(c);
console.log(
    c.indexOf("un") +  " " + c.indexOf("un",7)
);

// Retorna el indice de la ultima aparicion del argumento, si hay seg arg
// se obvia desde el seg arg en adelante y se busca la ultima aparicion en lo anterior
console.log(c.lastIndexOf("a") + " " + c.lastIndexOf("a", 10));

// reemplaza una vez el argumento 1 por el 2
console.log(c.replace("a","r"));