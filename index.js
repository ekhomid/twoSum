/*
Дан массив целых чисел arr и целое число X, нужно определить, существуют ли в массиве два элемента, сумма которых в точности равна X.
*/

function twoSum(arr, x) {
  for (var i = 0 ; i < arr.length ; i++) {
    for (var j = i+1 ; j < arr.length ; j++) {
      if (x == arr[i] + arr[j]) { // i != j
        return i + " " + j;
      }
    }
    
  }
  return 'numbers are absent';
}

var 
 array = [2,1,4,5,3], X = 5;
// array = [1,1], X = 2;
// array = [0, -2, 4, -4, -6, -11, 7], X = -7
// array=[1, 8, -3, -2, 5], X=6
// array=[1, -2, 4, -1, 5], X=8
// array=[-1, -2, 4, 5, 4], X=8
// array=[1, -2, 8, 0], X=8
// array=[1, 2, 4, -5], X=4
// array=[-5, 3, 1, 7, -4], X=5
// array=[1], X=1
// array=[], X=0
//  array=[0, 0], X=0

console.log(twoSum(array, X));