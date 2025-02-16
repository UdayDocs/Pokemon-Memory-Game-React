import React from 'react';

function Header({ currentScore, bestScore }) {
  return (
    <header className="header">
      <h1>Pokémon Memory Game </h1> <hr/> <h5> Click & Remember </h5> 
      <div className="score-board">
        <div className="score current-score">Score: {currentScore}</div>
        <div className="score best-score">Best: {bestScore}</div>
      </div>
    </header>
  );
}

export default Header;