import makeGrid from "../makeGrid";

function revealcell(state, rowNum, colNum) {
  let grid = state.grid;
  if (!grid[rowNum][colNum].flagged) {
    state.remaining--;
    grid[rowNum][colNum].revealed = true;
    if (grid[rowNum][colNum].value === 'M')
      state.blasted = true;
    if (grid[rowNum][colNum].value === 0) {
      for (var xoff = -1; xoff <= 1; xoff++) {
        var i = rowNum + xoff;
        if (i < 0 || i >= grid.length) continue;

        for (var yoff = -1; yoff <= 1; yoff++) {
          var j = colNum + yoff;
          if (j < 0 || j >= grid[i].length) continue;

          if (!grid[i][j].revealed) revealcell(state, i, j);
        }
      }
    }
  }
  return state;
}

function flagcell(grid, rowNum, colNum) {
  grid[rowNum][colNum].flagged = !grid[rowNum][colNum].flagged;
  return grid;
}

function resetGrid(state) {
  let newState = makeGrid(state.rows, state.cols, state.mines)
  newState.darkmode = state.darkmode;
  return newState;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "DARKMODE":
      let root = document.documentElement;
      if (state.darkmode)
        root.style.setProperty('--main-bg-color', "#E0E5EC");
      else
        root.style.setProperty('--main-bg-color', "#181818");
      return {
        ...state,
        darkmode: !state.darkmode
      };

    case "REVEAL":
      return revealcell(Object.assign({}, state), action.rowNum, action.colNum);

    case "RESET":
      return resetGrid(state);

    case "TOGGLEFLAGMODE":
      return {
        ...state,
        flagMode: !state.flagMode
      }

    case "INSTRUCTIONS":
      return {
        ...state,
        instructions: !state.instructions
      }

    case "FLAG":
      return {
        ...state,
        grid: flagcell(state.grid, action.rowNum, action.colNum)
      }

    default:
      return state;
  }
};
export default reducer;