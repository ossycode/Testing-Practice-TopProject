  export function analyzeArray(arr) {
    let average = arr.reduce((a, b) => a + b, 0) / arr.length;

   let min = Math.min(...arr)
   let max = Math.max(...arr)
   let length = arr.length

   const analyzedArray =   {
       average: average,
        min: min,
        max: max,
        length: length,
    };
//   console.log(analyzedArray)
   return analyzedArray;
  
};

// analyzeArray([1, 8, 3, 4, 2, 6])



