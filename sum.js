//Write a javascript program to compute the sum of an array of integers??
const arr = [1, 2, 3, 4, 5, 7]

function sum(arr) {
    if (arr.length == 1) return arr[0]
    return arr[0] + sum(arr.slice(1))
}
console.log(sum( [1, 2, 3, 4, 5, 7]));