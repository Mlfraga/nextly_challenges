const matrix = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.'],
]

let cellsToPaint = [];

function getRelatedCells(row, column, color) {    
  const relatedCells = [];

  if(column !== matrix[row].length - 1 && matrix[row][column + 1] === color && !cellsToPaint.find(cell => cell.row === row && cell.column === column + 1)) {
    relatedCells.push({row: row, column: column + 1});
  }

  
  if(column !== 0 && matrix[row][column - 1] === color && !cellsToPaint.find(cell => cell.row === row && cell.column === column - 1)) {
    relatedCells.push({row: row, column: column - 1});
  }
  
  if(row !== matrix.length - 1 && matrix[row + 1][column] === color && !cellsToPaint.find(cell => cell.row === row + 1 && cell.column === column)) {
    relatedCells.push({row: row + 1, column});
  }

  
  if(row !== 0 && matrix[row - 1][column] === color && !cellsToPaint.find(cell => cell.row === row - 1 && cell.column === column)) {
    relatedCells.push({row: row - 1, column});
  }

  return relatedCells;
}
  
function paintBucket(row, column, color) {
  const selectedColor = matrix[row][column];
  cellsToPaint.push({row, column});
  
  const relatedCells = getRelatedCells(row, column, selectedColor);

  relatedCells.forEach(cell => {
    paintRelatedCells(cell.row, cell.column, color);    
    
    cellsToPaint.push({row: cell.row, column: cell.column });
  });

  cellsToPaint.forEach(cell => {
    matrix[cell.row][cell.column] = color;
  });

  console.log('out', matrix);
}

function paintRelatedCells (row, column, color) {
  const selectedColor = matrix[row][column];
  const relatedCells = getRelatedCells(row, column, selectedColor);

  if(relatedCells.length === 0) {
    return;
  }

  relatedCells.forEach(cell => {
    cellsToPaint.push({row: cell.row, column: cell.column });    
    paintRelatedCells(cell.row, cell.column, color);
  });
}

console.log('in: ', matrix) 
paintBucket(1, 3, '#');