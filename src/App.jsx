import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PokemonGrid from './components/CardsGrid/PokemonGrid';
// import  './App.scss'ss
import Win from './components/Win';
import Lose from './components/Lose'


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lose, setLose] = useState(false)
  const [win, setWin] = useState(false)

  // Fetch Pokémon data
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: details.name,
              image: details.sprites.other['official-artwork'].front_default,
            };
          })
        );

        setPokemonList(pokemonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  

  const resetGame = () => {
    setCurrentScore(0)
    setLose(false)
    setWin(false)
    setClickedPokemon([]);
    console.log('resetGame')

  }
  

  useEffect(() => {
    if (currentScore === pokemonList.length && pokemonList.length > 0) {
      setWin(true);
    }
  }, [currentScore, pokemonList.length]);

  
  // Handle card clicks
  const handleCardClick = (pokemonName) => {
    if (clickedPokemon.includes(pokemonName)) {
      // lose game
      setLose(true)

      
    } else  {
      // Update score
      setClickedPokemon([...clickedPokemon, pokemonName]);
      setCurrentScore(prev => {
        const newScore = prev + 1;
        if (newScore > bestScore) setBestScore(newScore);
        return newScore;
        
      });

    } 
    shufflePokemon();
  };

  // Shuffle Pokémon
  const shufflePokemon = () => {
    const shuffled = [...pokemonList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setPokemonList(shuffled);
  };

  if (loading) return <div className="loading">Loading Pokémon...</div>;
  if (error) return <div className="error">Error: {error}</div>;


  return (
    <div className="app">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <PokemonGrid pokemonList={pokemonList} handleClick={handleCardClick} />
      <Win win={win} resetGame={resetGame} />
       <Lose lose={lose} resetGame={resetGame} score={currentScore} /> 
    </div>
  );
}

export default App;