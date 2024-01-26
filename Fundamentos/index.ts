// 1 - numbers

let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 489789.4548

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

//2-- string

const firstName: string = "Daniel"

console.log(firstName.toUpperCase())

let fullName: string 
const lastName: string = "Santin"

fullName = firstName + " " + lastName
console.log(fullName)
console.log(typeof fullName)

// 3 - Boolean

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true


console.log(a)

//4-- inference e annotation

const ann: string = "Teste"
let inf = "Teste"

// ann = 1
// inf = 1

console.log("Testando")

//comandos para inicializar o tsc automaticamnete após o salvamento
// -- tsc --init
// tsc -w

// desafio dos Fundamentos

const numero: number = 10

const numberString = numero.toString()

const NumberPrint: string = `eu vou imprimir o numero ${numberString}`

console.log(NumberPrint)