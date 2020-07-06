export const withdrawMoney = amount => ({
  type: "WITHDRAW",
  payload: amount
});

export const revealCell = (i, j) => ({
  type: "REVEAL",
  rowNum: parseInt(i),
  colNum: parseInt(j)
});

export const reset = () => ({
  type: "RESET"
});

export const toggleFlagMode = () => ({
  type: "TOGGLEFLAGMODE"
});

export const flagCell = (i, j) => ({
  type: "FLAG",
  rowNum: parseInt(i),
  colNum: parseInt(j)
});

export const toggleDarkMode = () => ({
  type: "DARKMODE"
});

export const toggleInstructions = () => ({
  type: "INSTRUCTIONS"
});