"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Matheus", "João"];
// nomes.push(2)
//-- 2 outro sintaxe de array
const nums = [100, 200];
nums.push(300);
// nums.push("teste")
console.log(nums);
console.log(nums[0]);
//-- any
const arr1 = [1, "teste", true, [], { nome: "Daniel" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
//-4 parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//-- 5 retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Daniel"));
//  6 função anonima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
}, 2000);
//- 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X Coordinates: " + coord.x);
    console.log("Y Coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.4 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Daniel", surname: "Santin" };
// 8 -- props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// showNumbers(6)
//- 9 validando argumentos opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá, ${firstName} ${lastName}, Tudo certo?`);
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log((advancedGreeting("Daniel", "Santin")));
console.log((advancedGreeting("Daniel")));
