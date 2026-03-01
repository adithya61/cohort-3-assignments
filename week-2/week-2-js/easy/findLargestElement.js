/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxi = -1;
    for(let num of numbers){
        if(num > maxi) maxi = num;
    }
    return maxi;
}

console.log(findLargestElement([1,2,3,4,5,6]))

module.exports = findLargestElement;