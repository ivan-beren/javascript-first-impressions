function askForSoda(){
    console.log(drinkTwo)
    let sodaOne = "Coca-Cola"
    let sodaTwo = "Pepsi"
    let sodaThree = "Manaos"
    let sodaType = Number(prompt("Elija su bebida"))
    switch (sodaType) {
        case 1: 
        console.log(sodaOne)
        break;

        case 2:
        console.log(sodaTwo)
        break;

        case 3:
        console.log(sodaThree)
        break;
    
        default:
            break;
    }

}



let person = prompt("Inserte su nombre")
console.log("Hola " + person)
let valorpedido = Number(prompt("Inserte su edad"))
if (valorpedido>18) {
    console.log("Bienvenido")
}else{
    alert("Lo siento, debes ser mayor de edad para ingresar")
}
let drinkOne = "Water"
let drinkTwo = "Soda"
let drinkThree = "Beer"
let drink = prompt("¿Deseas tomar algo?")
if (drink==="Si") {
    let selection = Number(prompt("¿Que bebida deseas?"))
    switch (selection) {
        case 1:
            console.log(drinkOne)
            
            break;
        case 2:
            askForSoda()
            break;
        case 3:
            console.log(drinkThree)
            break;
        default:
            break;
    }
}

// USER STORY:
// QUIERO:
// PEDIR SI ES MAYOR DE EDAD
// PEDIR SI QUIERE BEBIDAS
// MOSTRAR MENU DE BEBIDAS 
// EL MENU DE BEBIDAS DEBE CONSISTIR EN TRES VARIABLES CON NUMERO 1 2 y 3
// PEDIR AL USUARIO QUE BEBIDA QUIERE
// SI EL USUARIO PIDE 2 DEBE DEVOLVER "RECIBIRA CERVEZA"
// FIN POR AHORA


// COMO EXTRA:
// CREAR FUNCIONES PARA PEDIR VARIEDADES DE CERVEZA
// Y PEDIR VARIEDADES DE AGUA (MINERAL Y NATURAL)

// PISTA: LAS FUNCIONES SON DE TIPO CALLBACK


// SIEMPRE QUE GOOGLES BUSCA CON LA PALABRA JS