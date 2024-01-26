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