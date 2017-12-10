// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
  
  var i=0; 
  var variable;

  if(typeof(initialValue) == "undefined") {
    i++;
    variable = arr[0];
  } else {
    variable = initialValue;
  }

  for (; i<arr.length; i++) {
    variable = callback(variable, arr[i], i, arr);
  }
  return variable;
}



// export this function (you can ignore this for now)
module.exports = myReduce;


