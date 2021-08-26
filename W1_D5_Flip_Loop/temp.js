function reverse(arr) {
    for(var left=0; left<Math.floor(arr.length/2); left++) {
        var right = arr.length-1-left;
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        console.log("loopnumber "+left +" "+ arr)
    }
    return arr
}
    
var result1 = reverse( ["a","b","c","d","e"] );
    // console.log(result1);
var result2 = reverse( ["e","d","c","b","a"] );
    // console.log(result2);
