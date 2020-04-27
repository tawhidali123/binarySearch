// Find a number in an array using Binary Search

function binarySearch(arr, val) {
  let start = 0
  let end = arr.length -1
  let middle = Math.floor((start + end) / 2)

  // if start reaches end value, end  the while loop
  while(arr[middle] !== val && start <= end){
    if(val > arr[middle]){
      start = middle + 1
    } else {
      end = middle - 1
    }
    
    middle = Math.floor((start + end) / 2)
   
  }

   return arr[middle] === val ? middle : -1



}



binarySearch([1,2,4,5,10,11,13,14,21,23,25,32,44,55], 23)

// [1,2,4,5,10,11,13,14,21,23,25,32,44,55]
//  s              m                     e
