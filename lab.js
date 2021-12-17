var arr = [10,20,30,40,50,60]

// Problem 1
var firstItem = arr[0]
console.log(firstItem)

// Problem 2
var lastItemRemoved = arr.pop()
console.log(lastItemRemoved)


// Problem 3
var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];

for (let i of family) {
  console.log(i);
}

// Problem 4
var nums = [1,2,3,6,22,98,45,23,22,12];
let evensArr = []

for (let i of nums) {
  if (i % 2 == 0 ) {
    evensArr.push(i)
    // console.log(evensArr)
  }
}

// Problem 5
var score = 74

if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else if (score >= 70) {
  console.log('C')
} else if (score >= 60) {
  console.log('D')
} else {
  console.log('F')
}


// Problem 6
var myFavoriteNumbers = [4,8,12,16,20,24];

var someNum = myFavoriteNumbers[4]
console.log(someNum)

// Problem 7
console.log(myFavoriteNumbers.length)
if (myFavoriteNumbers.length < 7) {
  console.log('There are not enough elements in this array')
} else {
  someNum = myFavoriteNumbers[6]
}

// Problem 8
var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];

for (let i of listOfNumbers) {
  if (i % 3 === 0) {
    console.log(`${i} is divisible by 3`)
  }
}

// Problem 9
var letters = ['A', 'B', 'C', 'D', 'E'];

for (let i = letters.length - 1; i >= 0; i--) {
  console.log(letters[i])
}


////////// Advanced Problems //////////

////////// PROBLEM 10 //////////
// Switch statements can be excellent alternatives to if blocks. Look up switch statements (I recommend W3 Schools) and try to implement one for the following.

// Do not edit the code below.
let letterGrade = 'B'
// Do not edit the code above.

/* Use a switch statement on 'letterGrade' and console.log the appropriate response.

If A: "The student is doing excellently."
If B: "The student is doing well."
If C: "The student is doing alright."
If D: "The student is not doing very well."
If F: "The student is failing."
If the letter grade is not one of the above letters, console.log 'Not an eligible grade.'
*/

//Code Here



////////// PROBLEM 11 //////////
/* The famous FizzBuzz, Devmountain style!
  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional logic, if the number your for loop is currently on is divisible by 3, console.log 'Dev'. If the number is divisible by 5, console.log 'mountain'. If the number is divisible by 5 & 3, console.log 'Devmountain'. If the number is not divisible by 5 or 3, console.log the number itself. Hint: Look up the modulo operator.

  Your output should look like:
  1
  2
  Dev
  4
  Mountain
  Dev
  7
  8
  Dev
  mountain
  11
  Dev
  13
  14
  Devmountain
  16
  ...
*/

//Code Here