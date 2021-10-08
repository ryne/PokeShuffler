import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import CatchPokemon from './components/CatchPokemon';
import ActionsBar from './components/ActionsBar';
import { usePalette } from 'react-palette';

function App() {
  const initRandom = Math.floor(Math.random() * 898) + 1;
  const [appLoading, setAppLoading] = useState(false);
  const [pokedex, setPokedex] = useState(false);
  const [catchEm, setCatchEm] = useState(false);

  const [pokemon, setPokemon] = useState(
    `https://pokeapi.co/api/v2/pokemon/${initRandom}`
  );
  const [number, setNumber] = useState(initRandom);
  const [name, setName] = useState([]);
  const [sprite, setSprite] = useState([]);
  const [title, setTitle] = useState("Gotta Catch 'Em All!");

  const { data, loading } = usePalette(sprite);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const loadPokemon = async () => {
      setAppLoading(true);
      const response = await axios.get(pokemon);
      setName(response.data.name);
      setSprite(response.data.sprites.front_default);
      setTitle(`Wild ${response.data.name.toUpperCase()} appeared!`);
      setAppLoading(false);
    };
    loadPokemon();
  }, [pokemon]);

  const shufflePokemon = () => {
    if (loading === false) {
      let number = Math.floor(Math.random() * 898) + 1;
      setNumber(number);
      setPokemon(`https://pokeapi.co/api/v2/pokemon/${number}`);
    }
  };

  const catchPokemon = () => {
    if (loading === false) {
      const pokeball = document.querySelector('.pokeball');
      const pokemonImg = document.querySelector('.pokemonImage');
      const pokedexIcon = document.querySelector('.pokedex');
      setCatchEm(true);
      setName(`Catching ${name}`);
      setTitle(`Catching ${name.toUpperCase()}`);

      // Catch Animation Sequence
      setTimeout(() => {
        pokeball.classList.add('throw');

        setTimeout(() => {
          pokemonImg.classList.add('catching');
        }, 1500);

        setTimeout(() => {
          pokeball.classList.add('catching');

          setTimeout(() => {
            pokeball.classList.remove('catching', 'throw');
            pokeball.classList.add('finished');
            pokeball.classList.add('clear');

            setTimeout(() => {
              setName(`Caught ${name}!`);
              setTitle(`Caught ${name.toUpperCase()}!`);

              setTimeout(() => {
                setPokedex(true);
                pokedexIcon.classList.add('flash');
                pokeball.classList.remove('clear', 'finished');

                setTimeout(() => {
                  setCatchEm(false);
                  shufflePokemon();
                  pokedexIcon.classList.add('flash');

                  setTimeout(() => {
                    pokedexIcon.classList.remove('flash');
                  }, 1500);
                }, 250);
              }, 1250);
            }, 500);
          }, 3500);
        }, 1750);
      }, 250);
    }
  };

  return (
    <div className="App" style={{ background: `${data.lightVibrant}` }}>
      <PokemonCard
        appLoading={appLoading}
        sprite={sprite}
        name={name}
        number={number}
        data={data}
      />
      <ActionsBar
        loading={loading}
        shufflePokemon={shufflePokemon}
        catchPokemon={catchPokemon}
        pokedex={pokedex}
      />
      <CatchPokemon catchEm={catchEm} />
    </div>
  );
}

export default App;
