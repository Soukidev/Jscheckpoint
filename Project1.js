// edabit : Find the Smallest and Biggest Numbers
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

// edabit : Find the Smallest and Biggest Numbers
const sumOfCubes = (numbers) => numbers.reduce((sum, num) => sum + num ** 3, 0);

// Filter out Strings from an Array

const filterArray = (arr) => arr.filter(item => typeof item === 'number');

// Special Arrays
const isSpecialArray = (arr) => {
    return arr.every((num, index) => {
      if (index % 2 === 0) {
        return num % 2 === 0; 
      } else {
        return num % 2 !== 0; 
      }
    });
  };
  
// How Much is True?
  const countTrue = (arr) => arr.filter(Boolean).length;
  
