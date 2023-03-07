// 1.
/*Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.*/

function minusOne(num) {
  num -= 1
  return num;
}

/*minusOne(10);        // 9
minusOne(100);       // 99
minusOne(Infinity);  // Infinity*/
console.log(minusOne(10));
console.log(minusOne(100));
console.log(minusOne(Infinity));

//2.
/*Write a function makeSentencethat takes three parameters and concatenates them into a fully formed sentence.*/
function makeSentence(...par){
    const sentence = par.join(" ");
    return sentence;
}
console.log(makeSentence("Hello!",'My','name','is','Nikita'));
// function makeSentence(par1,par2,par3){
//   return par1+par2+par3;
// }
// console.log(makeSentence('I ','want ','chimichangas '));

//3.
/*Write a function called getLastElementthat takes a parameter arr.
Invoke the function with an array as the argument.
The function should print the last element within the array. */


function getLastElement(arr){
  let lastElement = arr[arr.length-1]
  console.log(lastElement)
}
getLastElement([1, 2, 3, 4, 5, 6]);       // 6
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]