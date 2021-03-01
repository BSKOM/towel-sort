
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return []
  let res = []
  for (let i = 0; i < matrix.length; i++) 
    (i % 2) ? Array.prototype.push.apply(res, matrix[i].reverse()) : Array.prototype.push.apply(res, matrix[i])
  return res
}
