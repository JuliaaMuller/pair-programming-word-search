const transpose = function(matrix) {
    let result = [];
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (result[j] === undefined) {
        result[j] = [];
      }
        result[j][i] = matrix[i][j];
      }
    }
    return result;
  };
  

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
let newRows = transpose(letters);
    const verticalJoin = newRows.map(ls => ls.join(''))
    for (v of verticalJoin) {
        if (v.includes(word)) return true
    }
return false;
}

module.exports = wordSearch

// Pair programming with Barento Badaso - 19.01.21