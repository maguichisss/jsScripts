// VARIABLES
// las variables en programacion son algo parecido al algebra, pero muuuucho mas sencillo
// de lo que nos hicieron creer, ademas las variables solo pueden empezar con letras o 
// guion bajo
// Se puede inicializar una variable de la siguiente manera:

var a = 5; // una 'sentencia' en javascript (JS) puede o no terminar con ';' es opcional
var b
b = 10
x = a + b // esto como podras darte cuenta es una feeea ecuacion, pero es bastante simple
_x = x + x

// cual crees que sea el valor de 'x' ???
console.log(x)
console.log(_x)
// si sumamos a+b el resultado es 15

// STRINGS
// los 'strings' (en ingles) o cadenas, es texto basicamente, y se pueden 'concatenar' (unir)
// de la siguiente forma:
sustantivo = "perro"
verbo = "corriendo"
frase = "El "+sustantivo+" esta "+verbo
console.log(frase)
// en JS se pueden concatenar numeros y strings de forma sencilla (en otros lenguajes se hace
// de otra manera) de la siguiente forma:
console.log(frase+" a "+x+" kilometros por hora") // utilizamos la 'x' del ejemplo de arriba

// sentencia IF
// la sentencia/palabra/condicion IF es una sentencia de control/condicion que evalua una
// expresion y en caso de ser verdadera ejecuta ciertas instrucciones.
// link mejor explicado: https://lenguajesdeprogramacion.net/diccionario/que-es-un-if-en-programacion/

// EJEMPLO
maximo = 10
if (a < maximo) {
// se evalua lo que esta dentro de los parentesis, entonces se 'pregunta'
// 'a' es menor que 'maximo' ('a' vale 5 y 'maximo' vale 10), entonces como 5 es menor
// que 10 ejecuta todo lo que esta dentro de las llaves
    console.log(a+" es menor que "+maximo)
}

// IF - ELSE
// en caso de que la condicion no se cumpla, hay algo llamado ELSE, y tambien se ejecuta
// todo lo que este dentro de las llaves cuando la sentencia sea false/no verdadera/incorrecta
// EJEMPLO 1
a = 0
b = 10
if (a < b) { // 'a' no es menor que 'b' entonces se va a ejecutar el ELSE
    console.log("Esto no se va a mostrar ya que la condicion no se cumple")
}else{
    console.log(a+" es menor que "+b)
}

// IF - ELSE IF - ELSE
// supongamos que queremos mostrar un mensaje dependiendo la hora del dia
// obtenemos la hora del dia (no lo explicaremos en este momento)
hora_del_dia = new Date().getHours(); // nos regresa la hora del dia (dia de 24 horas)
// evaluamos la hora del dia
if (hora_del_dia < 12) { // antes de las 12 son dias
    console.log("Buenos dias!")
}else if (hora_del_dia < 19) { // antes de las 19 (7 pm) son tardes
    console.log("Buenas tardes!")
}else{ // cualquier otra cosa, son noches
    console.log("Buenas noches!")
}
