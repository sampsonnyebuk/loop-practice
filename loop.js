function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let result = [];
    for(i = 0; i<arr.length; i++) {
        if(i%2===1)
    }
    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let result = [];
    for(i=arr.length-1; i<=1; i--) {
        if(i%2===1)
    }
    return result;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let result = [];
    for(i=0; i=arr.length; i++) {
        if((i & (i-1))=== 0) {
            result.push[i]
        }
    }
    return result;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    const powerIndicesArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Math.log(arr[i]) / Math.log(n) % 1 === 0) {
      powerIndicesArray.push(i);
    }
  }

  return powerIndicesArray;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
        const middleIndex = Math.floor(arr.length / 2);
        return arr.slice(0, middleIndex + 1);
      }
      

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    const middleIndex = Math.floor(arr.length / 2);
  return arr.slice(middleIndex + (arr.length % 2), arr.length);
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
