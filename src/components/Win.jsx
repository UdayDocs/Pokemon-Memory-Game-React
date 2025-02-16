import React from 'react'


function Win({win, resetGame}) {
  if(!win) return null ;

  return  (
    <div className="overlay">
      <div className="popup">
        <h2>Congratulations! You won! <hr/>You did it 🎉🎉🎉</h2>
        <button 
          className="play-again-btn"
          onClick={resetGame}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Win