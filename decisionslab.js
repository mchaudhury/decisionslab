
// Problem 1

let lovesCode = true;

if (lovesCode === true) {

  console.log('I love to code!');

} else {

  console.log("Coding has it's challenges.");
}



// Problem 2

var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

if (amysAge > brittanisAge) {

  console.log('Amy is older than Brittani');

} else if (brittanisAge > amysAge) {

  console.log('Brittani is older than Amy');

} else {

  console.log(' Amy and Brittani are the same age.');
}




// Problem 3

if (amysBirthYear === brittanisBirthYear) {

  console.log('Amy and Brittani were born in the same year.');

} else {

  console.log('Amy and Brittani were born in the same year.');

}


// problem 4

var arr = [10,20,30,40,50,60];

let firstItem = arr[0];

console.log(firstItem);



// problem 5

let lastItemRemoved = arr.pop();

console.log(lastItemRemoved);

console.log(arr);







// problem 6

var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];

for(let i = 0; i < family.length; i++) {

  console.log(family[i]);
}






// problem 7


var nums = [1,2,3,6,22,98,45,23,22,12];

let evensArr = [];

for (let i = 0; i < nums.length; i++) {

  if (nums[i] % 2 === 0) {

    evensArr.push(nums[i]);

    console.log(evensArr);

  }

   // console.log(evensArr);
    
  }
  




// problem 8

var score = 74;

if (score >= 90) {

  console.log('A');

} else if (score >= 80 && score <= 89) {

  console.log('B');

} else if (score >= 70 && score <= 79) {

  console.log('C');

} else if (score >= 60 && score <= 69) {

  console.log('D');

} else {

  console.log('F');
}


// problem 9, part 1



let changeMyMind = true;

if (changeMyMind === true) {

  changeMyMind = false;

  console.log(changeMyMind);

} else {

  changeMyMind = true;

  console.log(changeMyMind);
}


// problem 9, part 2

changeMyMind = !changeMyMind;

console.log(changeMyMind);



// problem 10, part 1

var myFavoriteNumbers = [4,8,12,16,20,24];

let someNum = arr[4];


// problem 10, part 2


if (myFavoriteNumbers.length < 7) {

  console.log('There are not enough elements in this array');

  someNum = myFavoriteNumbers[6];

  console.log(someNum);

} else if(myFavoriteNumbers.length >= 7) {

  someNum = myFavoriteNumbers[6];

  console.log(someNum);
}



// problem 11

var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];

for (let i = 0; i < listOfNumbers.length; i++) {

  if (listOfNumbers[i] % 3 === 0) {

    console.log(`${listOfNumbers[i]} is divisible by 3.`);
  }

}


// problem 12

var letters = ['A', 'B', 'C', 'D', 'E'];

for (let i = letters.length - 1; i >= 0; i--) {

  console.log(letters[i]);
}


// Problem 13

let letterGrade = 'B'

switch (letterGrade) {

  case 'A':
    console.log('The student is doing excellently.');
    break;

  case 'B':
    console.log('The student is doing well.');
    break;

  case 'C':
    console.log('The student is doing alright.');
    break;

  case 'D':
    console.log('The student is not doing very well.');
    break;

  case 'F':
    console.log('The student is failing.');

  default:
      console.log('Not an eligible grade.');
}


// Problem 14

for (let i = 1; i < 100; i++ ) {

  if (i % 3 === 0 ) {

    console.log('Dev');

  } else if (i % 5 === 0) {

    console.log('mountain');

  } else if ( i % 3 === 0 && i % 5 === 0) {

    console.log('Devmountain');

  } else {

    console.log(i);
  }
}



