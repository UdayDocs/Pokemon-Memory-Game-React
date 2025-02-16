import React from 'react';

function PokemonCard({ name, image, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          {/* Blank themed placeholder - you can customize this with an icon or text */}
          <div className="placeholder-content">
            <span></span>
          </div>
        </div>
        <div className="card-back">
          <img 
            src={image} 
            alt={name} 
            className="pokemon-image"
            onError={(e) => {
              e.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png';
            }}
          />
          <h3 className="pokemon-name">{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
