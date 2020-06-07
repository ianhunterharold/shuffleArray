//  Shuffle the Array

var shuffle = function(nums, n) {
    
  let shuffledArr = [];

  for (let i = 0, j=nums.length/2; j < nums.length, i < nums.length/2; i++,j++){
    let addToEndOfArr = shuffledArr.push(nums[i],nums[j])
  }

  return shuffledArr;
};
const howMany = 5;
const num = [50,40,30,20,10,1,2,3,4,5];
shuffle(num,howMany);


// solve as a dev 
//create final structure to return 

// blending of the two 'sub-arrays in the array'; 
// is is the number of x and y elements 

// solve as a human 
// n is the number of x and number of y 
// should be blended so that it goes x1,y1,x2,y2,x3,y3,x4,y4...xn, yn

// divide the array by n, n should divide the array evenly, there has to be matching sides 

// then build out the new array with x then y then x then y 

//return that new array 

// solve as dev
// break up the array into two smaller arrays

//create new array by going inbetween the two values and adding them to the new array 

