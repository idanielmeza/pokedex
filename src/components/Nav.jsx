import Logo from '../Pokeball.svg';
import { useContext } from 'react';
import { PokemonContext } from '../context/pokemonContext';

const Nav = () => {
    const {pokemon, info, setInfo} = useContext(PokemonContext);

    return ( 
        <nav className='navbar'>
            <ul className='is-flex align-center'>
                <li>
                    <img className='logo' src={Logo} alt="Logo" />
                </li>
                <li>
                    Pokedex <span>by LedezmaDev</span>
                </li>
                <li>
                    {
                        pokemon ?
                        <button className='btn' onClick={() => setInfo(!info)}>Info</button>
                        : null
                    }
                    
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;