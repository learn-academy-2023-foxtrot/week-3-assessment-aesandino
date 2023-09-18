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
  it("returns an array that applies the Fibonacci sequence to each number", () => {
    expect(greeter()).toEqual("[3, 6, 9, 15, 24, 39])

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

const newFibonacci = () => {
  return [3, 6, 9, 15, 24, 39]

// NOTES: I'm going to reach out for help to better understand this, because this is most likely incorrect. 

// Pseudo code:
// input: number greater than 2
// output: an array that takes the first number, adds it to itself and then continuosly repeats the process
// process: Maybe to use "length" as a property and hold the numbers within the component. 

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("greeter", () => {
  it("returns an array of values sorted from least to greatest", () => {
    expect(greeter(combinedTimeA)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(greeter(cominedTimeB)).toEqual([10, 15, 20, 45, 60, 65, 100])

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

const combinedTime = {
  A: [15, 15, 20, 30, 30, 60, 90],
  B: [10, 15, 20, 45, 60, 65, 100],
};

console.log(Object.values(combinedTime));

// Pseudo code:
// input: an object
// output: an array of the values sorted in order from small to largest.
// process: use expect statements to sort the numbers from an object to an array - and maintain the order of small to large in the output

// NOTES: I'm going to reach out for help to better understand this, because this is most likely incorrect. 


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

 describe("greeter", () => {
  it("returns an array of accumulating sum", () => {
    expect(greeter(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(greeter(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(greeter(accountTransactions3)).toEqual([])

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

describe("greeter", () => {
  it("returns an array of accumulating sum", () => {

  
    let accountTransactions1 = [100, -17, -23, -9]
    let accountTransactions2 = [250, -89, 100, -96]
    let accountTransactions3 = []


    expect(greeter(accountTransactions1, accountTransactions2, accountTransaction3)).toEqual([100, 83, 60, 51], [250, 161, 261, 165], [])
  })
})
 

// Pseudo code:
// input: an array 
// output: an array that adds the following number to the previous number
// process: Use expect statements to create the expected outputs of each individual array

// NOTES: I'm going to reach out for help to better understand this, because this is most likely incorrect. 