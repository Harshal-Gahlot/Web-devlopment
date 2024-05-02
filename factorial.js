/* approach 1
num = 6
result = 1
for (let i = 2; i <= num; i++) {
    result *= i
}
console.log(result)
*/ 
//approach 2 

let num = 5
let arr = []
// let arr = Array.from(Array(number).keys())
for (let i=1; i <= num; i++) {
    arr.push(i)
}
console.log(arr.reduce( (a,b) => {return a*b} ) )
