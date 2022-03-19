import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const Stats = () => {

    const { pokemon, error } = useContext(PokemonContext);

    return ( 
        <>
        <div className='stats'>
            <p className='title'>Stats</p>
            {
                pokemon ?
                    

                    <ul className='grid'>{
                    pokemon.stats.map(stat => (
                        <li className='stat' key={stat.stat.name}>
                            <span>{stat.stat.name}</span>
                            <span>{stat.base_stat}</span>
                        </li>
                    ))
    }
                    </ul>
                :
                    <div className="info">
                        <h2>{error ? 'It was not found' : 'No Pokemon'}</h2>
                    </div>
                    
            }
        </div>

            <div className='stats'>
                <p className='title'>Abilities</p>
                {
                    pokemon ?
                        <ul className='grid'>
                            {
                                pokemon.abilities.map(ability => (
                                    <li className='stat' key={ability.ability.name}>
                                        <span>{ability.ability.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        :
                        null
                        }
            </div>
        </>
     );
}
 
export default Stats;