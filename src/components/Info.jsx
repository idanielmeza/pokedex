import {useContext} from 'react';
import {PokemonContext} from '../context/pokemonContext';

const Info = () => {

    const {pokemon, error} = useContext(PokemonContext);

    return ( 

            pokemon ?
                <div className="info align-center">
                    <h3 className="subtitle">Height: <span>{pokemon.height}</span></h3>
                    <h3 className="subtitle">Weight: <span>{pokemon.weight}</span></h3>
                </div>

                :

                <div className="info">
                    <h2>{error ? 'It was not found' : 'No Pokemon'}</h2>
                </div>

        
     );
}
 
export default Info;