var myArray = [1, 2, 3, 4, 6, 5];
console.log(myArray);

// myArray.push(10);

// console.log("index of 1: ", myArray.indexOf(1));

// console.log(myArray.length);

// console.log("join", myArray.join('-'));

// suma elementelor unui array

var sum = 0;
for (var i = 0; i < myArray.length; i++) {
  console.log("i:", i);
  console.log("current element: ", myArray[i]);
  console.log("sum:", sum);
  console.log("_____________________");
  sum += myArray[i];
  console.log("sum:", sum);
  console.log("_____________________");
}
console.log("Sum of array is: ", sum);

// // elementul maxim

// var max = myArray[0];
// for (var i = 0; i < myArray.length; i++) {
//   var currentItem = myArray[i];
//   if (currentItem > max) {
//     max = currentItem;
//   }
// }
// console.log("Largest number is: ", max);
