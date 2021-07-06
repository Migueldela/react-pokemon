
import React, { useState } from 'react'
import axios from 'axios';
import './App.css';
import Card from '../src/components/Card';
function App() {
  const [Pokemon, setPokemon] = useState('');
  const [PokemonInfo, setPokemonInfo] = useState('');
//klk

  const handleChangePokemon = (e) => {
    setPokemon(e.target.value)
}
//klk
  
const handleClick = async event =>{
  event.preventDefault()
  let res= await axios.get(` https://pokeapi.co/api/v2/pokemon/${Pokemon}`)
  console.log(res);
  console.log(res.data);
  setPokemonInfo(res.data)

  
}

//
  return (
    <div className="App">
        <form >
        <label>Pokemon: </label>
                <input type="text" name="Pokemon" onChange={handleChangePokemon}/>
                <button onClick={handleClick}>ENVIAR</button>
        </form>
<Card info={PokemonInfo}/>



        
        
      
    </div>
  );
}

export default App;
