// Sum of Array Elements:**
// Write a function that takes an array of numbers as input and returns the sum of all elements in the array.
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
function removeDuplicates() {
    const duplicates = array.filter((value, index) => array.indexOf(value) === index)
    return duplicates
}


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
function capitalizeNames() {
    const capitalizedNames = strings.map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    return capitalizedNames;
}

// Find Common Elements:**
// Write a function that takes two arrays as input and returns a new array containing the common elements found in both arrays.
function findCommonElements(arr1, arr2) {
    const commonElements = arr1.filter((element) => arr2.includes(element));
    return commonElements;
}

// Rotate Array:** Write a function that takes an array and a number 'k' as input and rotates the array k steps to the right (positive k) or left (negative k).
function rotateArray(array, k) {
    const n = array.length;
    k = k % n; // Calculate effective number of rotations
  
    // Helper function to reverse the elements of the array within the given range
    function reverse(arr, start, end) {
      while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
  
    // Reverse the entire array
    reverse(array, 0, n - 1);
  
    if (k >= 0) {
      // Right rotation
      reverse(array, 0, k - 1);
      reverse(array, k, n - 1);
    } else {
      // Left rotation
      reverse(array, 0, n + k - 1);
      reverse(array, n + k, n - 1);
    }
  
    return array;
  }