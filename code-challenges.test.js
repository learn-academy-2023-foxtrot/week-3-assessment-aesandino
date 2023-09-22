// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.



// a) Create a test with expect statements for each of the variables provided.

describe("newFibonacci", () => {
  it("takes in a number greater than 2 and returns an array that applies the Fibonacci sequence to each number", () => {
    const fibonacciLength1 = 6
    const fibonacciLength2 = 10
    expect(newFibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(newFibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
    
// Eroor: newFibonacci is not defined

// const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// const newFibonacci = () => {
//   return [3, 6, 9, 15, 24, 39]********

const newFibonacci = (number) => {
  if (number === 2){
      return [1, 1]
  } else if (number > 2) {
    const fibonacciPattern = [1, 1];
    for (let i = 2; i < number; i++) {
      const newNumber = fibonacciPattern[i - 1] + fibonacciPattern[i - 2];
      fibonacciPattern.push(newNumber);
    }
    return fibonacciPattern
  }
}


// NOTES: I spent more time looking at the notes but I don't think the function is completely correct. (My mentor was not able to assist, but I'll still continue practicing this so I understand it better) Charlean assisted me with the creation of the tests and functions. 

// Pseudo code:
// input: number -greater than 2-
// output: an array that takes the first number, adds it to the following number, continuosly repeats the process. 
// process: The Fibonacci sequence is the series of numbers where each number is the sum of the two preceding numbers. Mathematically described as: xn= xn-1 + xn-2. Conditional statements if the number inputed is 2 then the array that begins with 1, 1..., if the number inputted is > 2 then the array will also begin with 1, 1. 
// -Within the for loop I have defined the index to begin with 2 - the index stops at the perameter provided. 
// -the i++ represents plus 1 
//-the .push command is adding the new number to the end of the array
//-letting the for loop to iterate through the array



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// describe("greeter", () => {********
//   it("returns an array of values sorted from least to greatest", () => {
//     expect(greeter(combinedTimeA)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(greeter(cominedTimeB)).toEqual([10, 15, 20, 45, 60, 65, 100])

describe ("totalTimes", () => {
  it("returns an array with values organized from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
     expect(totalTimes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
     expect(totalTimes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})


// Error: totalTimes is undefined


// const studyMinutesWeek1 = {********
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60

// Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {********
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// const combinedTime = {********
//   A: [15, 15, 20, 30, 30, 60, 90],
//   B: [10, 15, 20, 45, 60, 65, 100],
// };

// console.log(Object.values(combinedTime));


const totalTimes = (time) => {
  return Object.values(time).sort(function(a, b){return a-b})
}

// Pseudo code:
// name of func: totalTimes
// input: an object
// output: an array of the values sorted in order from small to largest.
// process: sorting the numbers from an object to an array - and maintain the order of small to large in the output (objects.values) 
// - inputting an object as an argument and returning an array of values
// -When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// NOTES: Applyed notes, but still failed, used .sort with the intention of sorting the timeframes within the arrays, but not sure what else I'm missing here. 


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe ("arrayOne", () => {
  it("returns the value of the numbers in each array added together", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    const accountTransactions2 = [250, -89, 100, -96]
    const accountTransactions3 = []
    expect(arrayOne(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arrayOne(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arrayOne(accountTransactions3)).toEqual([])
   })
})


// Pseudo code:
// input: an array 
// output: an array that adds the following number to the previous number
// process: Writing out a function that takes in an array of the numbers listed, then outputs the total sum of the arrays listed
// -the first values in the arrays don't change
//-starting with the second array, it changes as it's being added to the first array
//-to get the first value - define the index placement of 0 - using bracket notation
//-iteration - hits each value in the array
//-using .map to modify each value in the array
//-creating a condition that matches the first value of each array
//-we want the values to be added together

const arrayOne = (array) => {
  // console.log(array[0])
  return array.map((value, index, array) => {
    if (array[0]) {
      return value 
    } else {
      return array[index - 0] + array[index]
      }
    })
  }

// const newFibonacci = (number) => {
//   if (number === 2){
//       return [1, 1]
//   } else if (number > 2) {
//     const fibonacciPattern = [1, 1];
//     for (let i = 2; i < number; i++) {
//       const newNumber = fibonacciPattern[i - 1] + fibonacciPattern[i - 2];
//       fibonacciPattern.push(newNumber);
//     }
//     return fibonacciPattern
//   }
// }

// NOTES: Worked with Charlean to improve syntax creation. 