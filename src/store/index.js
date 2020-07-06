import { createStore } from "redux";
import reducer from "../reducers";
import makeGrid from "../makeGrid";

let rows = 10;
let cols = 10;
let totalMines = 20;

const store = createStore(reducer, makeGrid(rows, cols, totalMines), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;