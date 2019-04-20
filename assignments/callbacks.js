// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil','yo-yo', 'Notebook', 'yo-yo', 'Gum','Gum','Gum' ];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


    function getLength(arr, cb) {
        // getLength passes the length of the array into the callback.
      
        return cb(arr.length);
      }
          getLength(items, console.log);


    function last(arr, cb) {
        
          return cb(arr[arr.length-1]);
          // last passes the last item of the array into the callback.
        }
            last(items, console.log);

    function sumNums(x, y, cb) {

        return cb(x+y);
      // sumNums adds two numbers (x, y) and passes the result to the callback.
        }
          sumNums(10, 120, console.log);

    function multiplyNums(x, y, cb) {

      return cb(x*y);
      // multiplyNums multiplies two numbers and passes the result to the callback.
        }
        multiplyNums(12,24,console.log);
    function contains(item, list, cb) {

      return cb(list.includes(item));
        // contains checks if an item is present inside of the given array/list.
        // Pass true to the callback if it is, otherwise pass false.
      }
      contains("cat", items, function (exist){
        return console.log(exist)} );

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let unique = new Set(array);
  return cb(unique);
}
removeDuplicates(items, function(ad){
  console.log(ad);
})
