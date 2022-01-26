//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

function average1(array){
    return array.reduce((a, b) => a + b) / array.length
};
const average = (array) => array.reduce((a, b) => a + b) / array.length; //rewrote function to practice ES6 syntax

console.log(average([1,4,7]));
console.log(average1([10,5]));
console.log(average([1.5, 3, 2.5, 1]));

//MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

let nums = [4,5,6,7,0,1,2];
console.log(nums.indexOf(0));
console.log(nums.indexOf(3));

/*HARD: Create two buttons, one that when clicked turns the background of the body red. 
The other, when clicked, turns the body's background color white. 
Each of the background colors should be defined as class styles and when the buttons are 
pushed the body's classList is updated to include the correct class for the background.  
Create a single function that takes an input className and updates the body's classList to ONLY include that className*/