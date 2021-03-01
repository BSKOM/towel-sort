
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res[] 
  for(let i = matrix.length-1; i>=0; i--){
    if (i % 2){
      for (let j = matrix[i].length-1; j>=0; j--){
        res.push(matrix[i][j])
      }
    } else {
      for (let j = 0; j < matrix[i].length; j++) {
        res.push(matrix[i][j])
      }
    } 
  } 
  return res[].revers()
}
