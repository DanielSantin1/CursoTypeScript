// 1 - arrays

let numbers: number[] = [1,2,3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Matheus","João"]

// nomes.push(2)

//-- 2 outro sintaxe de array

const nums: Array <number> = [100,200]

nums.push(300)
// nums.push("teste")

console.log(nums)
console.log(nums[0])

//-- any

const arr1: any = [1,"teste",true,[],{nome:"Daniel"}]

console.log(arr1)

arr1.push([1,2,3])

console.log(arr1)

//-4 parametros tipados

function soma(a:number,b:number){
    console.log(a +b)
}
soma(4,5)


//-- 5 retorno de função

function  greeting(name:string):string{
  
    return `Olá ${name}`
}

console.log(greeting("Daniel"))

//  6 função anonima

setTimeout(function(){
    const sallary: number = 1000
    //console.log(parseFloat(sallary))
}, 2000)

//- 7 - tipos de objeto

function passCoordinates(coord: {x: number, y: number}){
    console.log("X Coordinates: " + coord.x)
    console.log("Y Coordinates: " + coord.y)
}

const objCoord = {x: 329, y:84.4}

passCoordinates(objCoord)

const pessoaObj:{nome: string, surname: string} = {nome: "Daniel", surname:"Santin"}

// 8 -- props opcionais

function showNumbers(a:number,b:number,c?:number){
    console.log("A: "+ a)
    console.log("B: "+ b)
    console.log("C: "+ c)
    if(c){
        console.log("C: "+ c)
    }
}

showNumbers(1,2,3)
showNumbers(1,2)
// showNumbers(6)

//- 9 validando argumentos opcional

function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return(`Olá, ${firstName} ${lastName}, Tudo certo?`)
    }
   return `Olá, ${firstName}, tudo bem?`
}

console.log((advancedGreeting("Daniel", "Santin")))
console.log((advancedGreeting("Daniel")))

//--10 union type

function showBalance(balance: string| number ){
    console.log(`o saldo da conta é R$${balance}`)
}
showBalance("500")
showBalance(4897)
// showBalance(true)
const arr2: Array<number| string | boolean> = [1,"teste",true]

//-- 11 avançando em union types

function showUserRole(role: boolean | string){
    if (typeof role ===  "boolean"){
        return "Usuário não aprovado"
    }

return `A função do usuário é ${role}`


}

console.log(showUserRole(false))
console.log(showUserRole("ADM"))

// -- 12 type alias

type ID = string | number

function showId(id: ID){
    console.log(`o ID é: ${id}`)
}

showId(1)
showId("40123")
showId(546)

//-- 13 inteface

interface point {
    x: number
    y: number
    z: number
}

function showCoords(obj: point){
    console.log(`X:${obj.x} Y:${obj.y } Z: ${obj.z}`)
}

const coordObj:point ={
    x: 10,
    y: 4,
    z: 5
}

showCoords(coordObj)

//--14 interface x type alias

interface Person{
    name: string
}

interface Person{
    age: number
}

const somePerson: Person = {name: "Daniel", age:45}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

//--- literal types

let test: "testando"
test = "testando"

console.log(test)

function showDirection(direction: "left" | "right"  | "center"){
    console.log(`A direção é: ${direction}`)
}
showDirection("left")
showDirection("center")

// - 16 non null assertion operators

const p = document.getElementById("some-p")

console.log(p!.innerText)

//-- 17 big int

let n: bigint

n= 1000n

console.log(n)
console.log(typeof n)


// --18 symbol

let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")


console.log(symbolA == symbolB)
console.log(symbolA === symbolB)