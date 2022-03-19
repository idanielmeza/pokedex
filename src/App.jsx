import Nav from './components/Nav';
import Gallery from './components/Gallery';

import Search from './components/Search';
import { PokemonContext } from './context/pokemonContext';
import {useContext} from 'react';
import Stats from './components/Stats';

function App() {
  
  const {info, pokemon} = useContext(PokemonContext);

  return (
    <>
      <Nav/>

      {
        info && pokemon ? 
        <Stats/>
        :
        
        <>
          <Search/>
          <Gallery/>
          </>
      }

      

      <div className='background'>
      </div>

      
    </>
      
  )
}

export default App
