let rows = 10, cols = 10, totalMines = 10;


function make2DArray(rows, cols) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function Cell(rowNum, colNum) {
  return {
    mine: false,
    value: 0,
    revealed: false,
    rowNum: rowNum,
    colNum: colNum,
    flagged: false
  }
}

function initializeGrid(grid) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
}

function insertMines(grid) {
  let options = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      options.push([i, j]);
    }
  }
  for (let n = 0; n < totalMines; n++) {
    let index = Math.floor(Math.random() * options.length);
    let choice = options[index];
    let i = choice[0];
    let j = choice[1];
    // Deletes that spot so it's no longer an option
    options.splice(index, 1);
    grid[i][j].mine = true;
  }
}

function populateValues(grid) {
  for (let rowNum = 0; rowNum < rows; rowNum++) {
    for (let colNum = 0; colNum < cols; colNum++) {
      let cell = grid[rowNum][colNum];
      if (cell.mine)
        cell.value = 'M';
      else {
        for (var xoff = -1; xoff <= 1; xoff++) {
          var i = rowNum + xoff;
          if (i < 0 || i >= rows) continue;

          for (var yoff = -1; yoff <= 1; yoff++) {
            var j = colNum + yoff;
            if (j < 0 || j >= cols) continue;

            var neighbor = grid[i][j];
            if (neighbor.mine) {
              cell.value++;
            }
          }
        }
      }
    }
  }
}

function makeGrid(i, j, m) {
  rows = i;
  cols = j;
  totalMines = m;
  let grid = make2DArray(i, j);
  initializeGrid(grid);
  insertMines(grid);
  populateValues(grid);
  const initialState = {
    rows: rows,
    cols: cols,
    mines: totalMines,
    grid: grid,
    blasted: false,
    remaining: rows * cols,
    flagMode: false,
    darkmode: false,
    instructions: false
  };
  return initialState;
}

export default makeGrid;