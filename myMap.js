/* write your myMap function body in the function below */

function myMap(arr, callback) {
  var wtf = [];
  for (var i=0; i<arr.length; i++) {
    wtf.push(callback(arr[i], i, arr));
  ] return wtf;
}










// export this function (you can ignore this for now)
module.exports = myMap;
