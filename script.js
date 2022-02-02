//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

function average1(array){
    return array.reduce((a, b) => a + b) / array.length
};
const average = (array) => array.reduce((a, b) => a + b) / array.length; //rewrote function to practice ES6 syntax

console.log(average([1,4,7]));
console.log(average1([10,5]));
console.log(average([1.5, 3, 2.5, 1]));

//MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// console.log(nums.indexOf(0));
// console.log(nums.indexOf(3));

function findIndexOfNum(numToFind){
    let numberArray = [4,5,6,7,0,1,2];
    return numberArray.indexOf(numToFind);
}

console.log("Medium challenge: ", findIndexOfNum(0));



/*HARD: Create two buttons, one that when clicked turns the background of the body red. 
The other, when clicked, turns the body's background color white. 
Each of the background colors should be defined as class styles and when the buttons are 
pushed the body's classList is updated to include the correct class for the background.  
Create a single function that takes an input className and updates the body's classList to ONLY include that className*/
/*Script on HTML */
// document.getElementById("redbtn").onclick = function(){
// 	document.classList("bg-red").style.backgroundColor ='red';
// }
// // function ChangeColor2() {
// //     document.getElementById('whitebtn').style.background-color;
// // }
// document.getElementById("whitebtn").onclick = function(){
// 	document.classList("bg-white").style.backgroundColor ='white';
// }

// var button = document.querySelector("button");

// button.getElementsByClassName("click", function() {
//     const backColor = document.body.style.backgroundColor;

//     if (backColor === 'red') {
//         document.body.style.backgroundColor = "white";
//     }
//     else {
//         document.body.style.backgroundColor = "red";
//     }
// });
// // var button = document.querySelector("button");

// // button.addEventListener("click", function() {
// //     const curColour = document.body.style.backgroundColor;

// //     document.body.style.backgroundColor = curColour === 'red' ? 'white' : 'red';
// // });

// const redButton = document.querySelectorAll('[data-red]')
// const whiteButton = document.querySelectorAll('[data-white]')

// redButton.forEach(button => {
//     button.addEventListener('click', () => {
      
//     })
//   })
  
//   whiteButton.forEach(button => {
//     button.addEventListener('click', () => {
      
//     })
//   })



// VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

// //need a for loop to filter through coinc then create an array with lowest amount of coins?
// //

// function coinChange (minNumOfCoins, moneyAmount){
    
// }