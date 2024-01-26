"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 489789.4548;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
//2-- string
const firstName = "Daniel";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Santin";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
//4-- inference e annotation
const ann = "Teste";
let inf = "Teste";
// ann = 1
// inf = 1
console.log("Testando");
//comandos para inicializar o tsc automaticamnete após o salvamento
// -- tsc --init
// tsc -w
// desafio dos Fundamentos
const numero = 10;
const numberString = numero.toString();
const NumberPrint = `eu vou imprimir o numero ${numberString}`;
console.log(NumberPrint);
