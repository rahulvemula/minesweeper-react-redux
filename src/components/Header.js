import React from 'react';
import logo from '../images/bomb.svg';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDarkMode, toggleInstructions } from '../actions';

function Header() {

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className={store.darkmode ? "dark" : ""}>
      <header className="header" style={{ 'display': 'flex', 'marginBottom': '15px', 'justifyContent': 'space-between' }}>
        <div className="logo">
          <img src={logo} style={{ 'margin': '10px' }} height="40px" width="40px" className="App-logo" alt="logo" />
          <h2 style={{ 'marginTop': '18px' }}>MINESWEEPER</h2>
        </div>
        <div className={store.darkmode ? "dark" : ""}>
          <button onClick={(e) => dispatch(toggleDarkMode(e))} className="headerButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon c-button__icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
          {store.instructions &&
            <div className={store.darkmode ? "dark card" : "card"}>
              <strong className="textCenter"><p>How to play?</p></strong>
              <span>Contrary to popular belief, it's actually quite simple.</span>
              <ul>
                <li> Click a square, the number displayed in it is the number of mines surrounding it. If there is no mine surrounding it, all the surrounding blocks will be opened for you.</li>
                <li>Enabling the <i>flag mode</i> will flag the block rather than opening when you click on a block.</li>
                <li>Open all the blocks with out mines to get chicken dinner. <span role="img" aria-label="emoji">😋</span></li>
              </ul>
              <a href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)" target="_blank" rel="noopener noreferrer"><span>Read More</span></a>
            </div>}
          <span onClick={(e) => dispatch(toggleInstructions(e))} className="how" style={{ 'float': 'right' }}>?</span>
        </div>
      </header>
    </div>
  );
}

export default Header;
