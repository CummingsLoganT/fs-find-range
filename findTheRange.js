// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:

// find min and max values
// declare variable to hold the value of min
// initialize variable to first item in array
let min = array[0];

// declare variable to hold the value of max
// initialize variable to first item in array
let max = array[0];

// loop over values of the array (for loop)
for (let i = 0; i <array.length; i++){
    // console.log(`array[${i}] is ${array[i]}`);
    // compare min to the current number (if statement)
    // if current is smaller than min, min becomes current
    if (array[i] < min){
        min = array[i];
        // console.log(`new min = ${min}`)
    }
        // compare max to the current number (if statement)
            // if current is larger than max, min becomes current
           if (array[i] > max){
            max = array[i];
        // console.log(`new max = ${max}`)

    }
           
           
}
        
        // print min and max values 
console.log(`min: ${min}, max: ${max}`)