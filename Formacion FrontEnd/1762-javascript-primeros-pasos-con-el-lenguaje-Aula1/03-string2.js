
var s = "HackerRank";


//                        SLICE()
// Si no se pasan argumentos a la función, devuelve la cadena completa.
// 1 argumento:devuelve una subcadena que comienza en el índice y termina al final de la cadena.
// 2 argumentos(i,j): devuelve una subcadena que consta de caracteres en el rango; termina en (j-1)
//Si uno (o ambos) de los argumentos pasados a esta función es negativo, entonces el índice correspondiente a ese argumento se calcula como String.length menos el argumento dado. Por ejemplo:
console.log(s.slice(0, 6) + " " + s.slice(6));
console.log(
    s.slice() + " " + s.slice(-4, 8) + " " + s.slice(-4, -2)
);

//                        SPLIT()
// Divide un objeto String en una matriz de cadenas
// Si se pasa como argumento una cadena que consta de una o más letras, 
//  -divide la cadena en cada aparición de esa cadena y devuelve una matriz de las subcadenas divididas.
console.log(s.split(""));
console.log(s.split("k"));
console.log(s.split());

//                      SUBSTRING()
// Devuelve una cadena entre los argumentos dados
console.log(s.substring());
console.log(s.substring(0, 6) + " " + s.substring(6));

// LOWER CASE
s = s.toLowerCase();
console.log(s);
// UPPER CASE
s = s.toUpperCase();
console.log(s);


//   trim()
// trimmed(recorta) espacios en blanco del inicio y final
// variaciones:  .triLeft()  -  .trimRight()
var s = "    Hacker Rank    ";
console.log("Original Length: " + s.length);
s = s.trim();
console.log(s);
console.log("Trimmed Length: " + s.length);