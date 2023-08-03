// Sum of Array Elements:**
// Write a function that takes an array of numbers as input and returns the sum of all elements in the array.

const arr = [1, 2, 3, 4, 5];

function sum(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0);
}

// Reverse Array:**
// Write a function that takes an array as input and returns a new array with its elements reversed.

function reverse(value) {
    const reversedArray = []
    for (let i = value.length - 1; i >= 0; i--) {
        reversedArray.push(value[i])
    }
    return reversedArray;
}

// Remove Duplicates:**
// Write a function that takes an array as input and returns a new array with duplicates removed (keeping only the first occurrence of each element).
const array = [1,2,2,3,3,4,5,5,6]

const uniqueArray = array.filter((value, index) => array.indexOf(value) === index)


// Find Maximum and Minimum:**
// Write a function that takes an array of numbers as input and returns an object with the maximum and minimum values.
function maxAndMin(array) {
    const object = {
        max: Math.max(...array),
        min: Math.min(...array),
    }
    return object;
}

// Count Occurrences:**
// Write a function that takes an array of elements and a target element as input and returns the count of occurrences of the target element in the array.
function countOccurrence(array, target) {
    // array = [1,3,3,5] target = 3 we should have an output of 2
    // initiate a variable to store count
    // loop through the array
        // if value within the array matches the target
        // increment count++
    // return count
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(target === array[i]) {
            count++
        }
    }
    return count;
}

// Merge Arrays:**
// Write a function that takes two arrays as input and returns a new array containing the elements of both arrays merged together.
function mergedArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Filter by Length:**
// Write a function that takes an array of strings and a minimum length as input and returns a new array containing only the strings that have a length greater than or equal to the specified minimum length.
function filterByLength(array, minLength) {
    return array.filter((strings) => strings.length >= minLength)
}

// Capitalize Names:**
// Write a function that takes an array of names (strings) as input and returns a new array with all names capitalized (the first letter of each name in uppercase).
const strings = ["mouse", "Cow", "chicken", "Rat"]

const capitalizedNames = strings.map((name) => name.charAt(0).toUpperCase() + name.slice(1))

// Find Common Elements:**
// Write a function that takes two arrays as input and returns a new array containing the common elements found in both arrays.
function commonElements(arr1, arr2) {
    
}