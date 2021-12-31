function fibonacci(num) {
  // type your code here
  if(num === 0){
    return 0
  }else if(num === 1){
      return 1
  }else{
    return fibonacci(num-2)+fibonacci(num-1)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 377");
  console.log("=>", fibonacci(14));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/* 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377 
  if num is zero:
    return zero,
  else if num is 1:
    return 1
  else:
    using recursion to return fibonacci(num-2)+fibonacci(num-1) until n-2 = 0
*/
// And a written explanation of your solution

