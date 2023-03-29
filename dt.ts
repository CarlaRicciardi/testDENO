//Crear un proyecto en Deno, configurando localmente Visual Studio Code para que interprete la sintaxis y
//características de la plataforma.

// 1)Esta aplicación recibirá una cantidad ilimitada de parámetros numéricos y deberá determinar el valor mínimo,
//el máximo y el promedio entre todos ellos.

const numeros = Deno.args.map((n) => Number(n));
const min = Math.min(...numeros);
const max = Math.max(...numeros);
const sum = numeros.reduce((a, b) => a + b, 0);
const avg = sum / numeros.length;

// 2) Los resultados se almacenarán en un archivo llamado resultados.dat, sin utilizar librerías externas,
//respetando el siguiente formato:
// ****************y********************
// Números: 4,5,33,7,94,56,......
// Mínimo: x
// Máximo: X
// Promedio: Y
// ************************************

const result = `******
Números: ${numeros.join(", ")}
Mínimo: ${min}
Máximo: ${max}
Promedio: ${avg}
******`;

// 3) En la consola se representarán los datos de la misma forma pero agregando además color al texto: la palabra
//mínimo y su valor se imprimirán en amarillo, el máximo en rojo y el promedio en verde, todos con fondo blanco.

const encoder = new TextEncoder();
await Deno.writeFile("resultados.dat", encoder.encode(result));

const colorMínimo = "\x1b[47m\x1b[33m";
const colorMáximo = "\x1b[47m\x1b[31m";
const colorPromedio = "\x1b[47m\x1b[32m";
const colorReset = "\x1b[0m";

const resultadoConsola = `${colorMínimo} Mínimo: ${min} ${colorReset}
${colorMáximo} Máximo: ${max} ${colorReset}
${colorPromedio} Promedio: ${avg} ${colorReset}`;
console.log(resultadoConsola);
