import React from "react";
//import formatNumber from "format-number";
import { revealCell, reset, toggleFlagMode, flagCell } from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import flagsvg from '../images/flag.svg';
import bombsvg from '../images/bomb.svg';
import coolsvg from '../images/in-love.svg';
import cryingsvg from '../images/sad.svg';
import confusionsvg from '../images/happy.svg';


function Game() {

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const reveal = e => {
    const i = e.target.dataset.i;
    const j = e.target.dataset.j;
    return revealCell(i, j);
  };

  const flag = e => {
    const i = e.target.dataset.i;
    const j = e.target.dataset.j;
    return flagCell(i, j);
  };

  const getButtonStyle = (element, dark) => {
    let style = {}
    if (element.revealed) {
      if (dark) {
        style["boxShadow"] = "inset 3px 3px 6px rgb(52, 52, 49), inset -3px -3px 6px #000000";
      } else {
        style["boxShadow"] = "inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff";
      }
      style["fontWeight"] = "bold";
    }
    if (element.value === 1) {
      style.color = "#48BB78";
    }
    if (element.value === 2) {
      style.color = "#D69E2E";
    }
    if (element.value >= 3) {
      style.color = "#F56565";
    }
    return style;
  }

  const getFlagButtonStyle = (mode, dark) => {
    let style = {};
    if (mode) {
      if (dark) {
        style["boxShadow"] = "inset 3px 3px 6px rgb(52, 52, 49), inset -3px -3px 6px #000000";
      } else {
        style["boxShadow"] = "inset 3px 3px 6px #bec3c9, inset -3px -3px 6px #ffffff";
      }
      style["color"] = "#F56565";
    }
    return style;
  }

  return (
    <div className={store.darkmode ? "dark" : ""}>
      <div className="App" >
        {
          store.blasted && <span>Game over, Please try again!</span>
        }
        {
          store.remaining === store.mines && <h4>Great Game!</h4>
        }
        <section className={store.darkmode ? "App__buttons dark" : "App__buttons"}>
          <button onClick={(e) => dispatch(reset(e))}>
            {
              store.blasted ? <img width="15px" height="15px" src={cryingsvg} alt="sad" style={{ 'marginRight': "5px" }}></img> :
                (store.remaining === store.mines) ?
                  <img width="15px" height="15px" alt="cool" src={coolsvg} style={{ 'marginRight': "5px" }}></img> :
                  <img width="15px" height="15px" alt="reset" src={confusionsvg} style={{ 'marginRight': "5px" }}></img>
            }Reset</button>
          <button style={getFlagButtonStyle(store.flagMode, store.darkmode)} onClick={(e) => dispatch(toggleFlagMode(e))}>
            <img width="15px" height="15px" src={flagsvg} alt="flag"></img> Flag Mode</button>
        </section>
        <div className="grid">
          <table>
            <tbody>
              {
                store.grid.map(function (item, i) {
                  var entry = item.map(function (element, j) {
                    return (
                      <td key={j}>
                        <button data-i={i}
                          data-j={j}
                          style={getButtonStyle(element, store.darkmode)}
                          onClick={(e) => dispatch(store.flagMode ? flag(e) : reveal(e))}
                          disabled={store.blasted || element.revealed || store.remaining === store.mines}>
                          {element.revealed ?
                            (element.mine ? <img data-i={i} data-j={j} width="20px" height="20px" src={bombsvg}></img> : (element.value === 0 ? "" : element.value)) :
                            (element.flagged ? <img data-i={i} data-j={j} width="15px" height="15px" src={flagsvg}></img> : " ")}
                        </button>
                      </td>
                    );
                  });
                  return (
                    <tr key={i}>{entry}</tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Game;