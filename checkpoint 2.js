// 2. Count Characters

function countCharacters(str) {
    return str.length;
}

// Example Usage
console.log(countCharacters("hi")); 

//Find Maximum and Minimum

function minMax(arr) {
    var returnArr = [];
    var min = arr[0];
    var max = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    returnArr.push(min);
    returnArr.push(max);

    return returnArr;
}
// prime number check

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


//sum of array

const myNums = [1,2,3,4,5];

let sum = 0;

myNums.forEach( num => {
  sum += num;
})

console.log(sum) 
