
//1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite
function norep (n){
    let x = new Map() // Creamos un diccionario

    for (let i of n){

        if (x.has(i)) { //Si existe
            x.set(i, x.get(i)+1) //Cuantas veces había aparecido + 1
        }
        else { // No existe
            x.set(i, 1) //El valor empeiza con 1 porque es la primera vez que se ve
        }

    }

    for (let i of n) { // Encontrara el primer elemento que tiene 1 en le dic

        if (x.get(i) === 1){
            return i
        }

    }

    return null

}

console.log("Función 1")
console.log(norep("abacddbec"))

//2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

function burbujoso (n) {
    let l = n.length
    let i = 0
    let j = 0

    for (i; i < l; i++){
        for (j; j < l; j++){
            if (n[j] > n[j + 1]){
                let temp = n[j]
                n[j] = n[j + 1]
                n[j + 1] = temp
            }
        }
    }

    return n

}


console.log("Función 2")
console.log(burbujoso([1,2,5,3,9,8]))

//3.1. Invierta un arreglo de números y regrese un nuevo arreglo con el resultado
function invierte (n) {
    let n2 = []

    while (n.length) {
        n2.push(n.pop()) // .pop() toma el último elemento de la lista 
    }
    
    return n2

}

let invertido = invierte([1,2,5,3,9,8])

//3.2 la segunda que modifique el mismo arreglo que se pasa como argumento.

function modif (n) {

    for (let i = 0; i < n.length; i++){
        n[i] = n[i] + 1
    }

    return n
}

console.log("Función 3")
console.log(modif(invertido))



//4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function  mayusculas (n){
    
    let n2  = n.split(" ") //Separara todas las palabras por un espacio

    for (let i = 0; i < n2.length; i++){
        n2[i] = n2[i].charAt(0).toUpperCase() + n2[i].slice(1) //La primera con mayus + el resto de la palbra
    }

    let res = n2.join(" ") //juntar las palabras con espacios 

    return res
}

console.log("Función 4")
console.log(mayusculas('hola hello hi'))

//5. Escribe una función que calcule el máximo común divisor de dos números.
function mcd (x, y){

    while (x != y){ //Mientras x y y no sean iguales, se van a restar hasta encontrar el común
        if (x > y){
            x = x - y
        }
        else {
            y = y - x
        }
    }

    return y

}

console.log("Función 5")
console.log(mcd(15, 10))

//6. Crea una función que cambie una cadena de texto a 'Hacker Speak'.
function hacker_speak (n) {
    n = n.replaceAll("a", "4") //replaceAll(lo que quieres remplazar (patrón), lo que vas a poner ahor (replacement))
    n = n.replaceAll("e", "3")
    n = n.replaceAll("i", "1")
    n = n.replaceAll("o", "0")
    n = n.replaceAll("s", "5")

    return n
}

console.log("Función 6")
console.log(hacker_speak("Javascript es divertido"))

//7. Escribe una función que reciba un número, y regrese una lista con todos sus factores.
function factoriza (n) {
    let res = []
    let i = 0

    while (n >= i){

        if ( n % i == 0){ //Módulo = 0 
            res.push(i) //A res se la añade i
        }
        i++
    }

    return res
}

console.log("Función 7")
console.log(factoriza(12));

//8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan
function duplicados(n) {
    let nodup = new Set(n) // Set solo puede tener valores únicos 

    return Array.from(nodup)
}

console.log("Función 8")
console.log(duplicados([1, 0, 1, 1, 0, 0]));

//9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function cad_min(n) {
    let long = Number.MAX_VALUE //es el número máximo en Java Script

    for (let i = 0; i < n.length; i++){
        long = Math.min(n[i].length, long) // Math.min(argumento1, argumento2)
    }

    return long
}

console.log("Función 9")
console.log(cad_min(["uno", "cuatro", "cinco"]));

//10. Escribe una función que revise si una cadena de texto es un palíndromo o no.
function palindromo(n) {
    let prim = n.replace(/[\W_]/g, "").toLowerCase() //Cambia lo que no es palabra y guión bajo por una cadena vacía y todo en minúsculas
    let sec = prim.split("").reverse().join("") // Separa, reverse y lo vuelve a juntar; separa dependiendo el caracter que introducimos antes

    return prim === sec ? "es un palíndromo" : "no es un palíndormo" // Operador ternario: condición ? verdadero : falso
}

console.log("Función 10")
console.log(palindromo("Ella te da detalle"))
console.log(palindromo("Tarea de hoy"))

//11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

function alfabetico(n) {
    let n2 = n.sort()

    return n2
}

console.log("Función 11")
console.log(alfabetico(["dado", "comida", "bebé", "aza", "ama"]))

//12. Escribe una función que tome una lista de números y devuelva la mediana y la moda.

function median_moda(n) {

    //Mediana
    let mediana = 0
    let l = n.length

    n.sort((a, b) => a - b) // Acomoda los números de menos a mayor acomodando 1, 7, 10 y no 1, 10, 7
    //sort() es una compare function. Si compare retorna 0, se queda igual, si retorna algo menor a 0 "a" es menor que b. 
    //Si el return es mayor a 0, b es menor que a 
    
    if (l % 2 === 0){ //Si la lonfitud es par, hay que obtener el promedio de dos números de en medio 
        mediana = (n[l / 2 - 1] + n[l / 2]) / 2
    }
    else {
        mediana = n[(l - 1) / 2]
    }

    //Moda
    let x = new Map() // Creamos un diccionario
    let moda

    for (let i of n){

        if (x.has(i)) { //Si existe
            x.set(i, x.get(i)+1) //Cuantas veces había aparecido + 1
        }
        else { // No existe
            x.set(i, 1) //El valor empeiza con 1 porque es la primera vez que se ve
        }

    }

    let maxval = 0 // 4 -> 5

    for (let i of n) { // Encontrara el primer elemento que tiene 1 en le dic

        if (x.get(i) > maxval){
            moda = i
            maxval = x.get(i)
        }

    }

    return "Mediana: " + mediana + " Moda: " + moda
}

console.log("Función 12")
console.log(median_moda([3, 4, 5, 1, 10, 9, 5, 3, 3]));

//13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

function text_frec(n) {

    let x = new Map() // Creamos un diccionario
    let textor

    for (let i of n){

        if (x.has(i)) { //Si existe
            x.set(i, x.get(i)+1) //Cuantas veces había aparecido + 1
        }
        else { // No existe
            x.set(i, 1) //El valor empeiza con 1 porque es la primera vez que se ve
        }

    }

    let maxval = 0 // 4 -> 5

    for (let i of n) { // Encontrara el primer elemento que tiene 1 en le dic

        if (x.get(i) > maxval){
            textor = i
            maxval = x.get(i)
        }

    }

    return textor

}

console.log("Función 13")
console.log(text_frec(["hola", "adios", "hello", "hola", "adios", "adios"]));

//14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function potencia(n){

    while(n != 1){
        if (n % 2 != 0){
            return "No es potenciade dos"
        }
        n = n / 2
    }
    return "Es es potenciade dos"
}

console.log("Función 14")
console.log(potencia(16));
console.log(potencia(10));

//15. Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

function desce(n) {

    n2 = n.sort((a, b) => b - a) // esta notación es un shortcut para la de llaves con un return
    
    return n2
}

console.log("Función 15")
console.log(desce([3, 1, 9, 5, 8]));