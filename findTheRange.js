let array = [1, 4, 11, 2, 37, -4]
let min = array[0]
let max = array[0]
for (i = 0; i <= array.length; i++)
  array[i] < min ? min = array[i] : (array[i] > max ? max = array [i] : min = min)
console.log("The smallest number is: " + min + "\nThe largest number is: " + max)