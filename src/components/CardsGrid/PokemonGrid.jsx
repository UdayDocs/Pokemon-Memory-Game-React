import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonGrid({ pokemonList, handleClick }) {
  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          onClick={() => handleClick(pokemon.name)}
        />
      ))}
    </div>
  );
}

export default PokemonGrid;









// import React from 'react';
// import PokemonCard from './PokemonCard';


// function PokemonGrid({ pokemonList, handleClick }) {
//   return (
//     <div className="pokemon-grid">
//       {pokemonList.map((pokemon) => (
//         <PokemonCard
//           key={pokemon.name}
//           name={pokemon.name}
//           image={pokemon.image}
//           onClick={() => handleClick(pokemon.name)}
//         />
//       ))}
//     </div>
//   );
// }

// export default PokemonGrid;