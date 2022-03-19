import { useContext } from "react";
import { PokemonContext } from '../context/pokemonContext';
import Logo from '../Pokeball.svg';
import Info from './Info';

const Gallery = () => {

    const { images, nextImg, prevImg, image, pokemon, getPokemon } = useContext(PokemonContext);

    return ( 
        <>
            <div className="gallery">
            {
                pokemon ?
                    <div className='is-flex is-flex-column'>    
                        <span className='tag'>{pokemon.name}</span>
                        <div className="is-flex justify-content-center img">
                            <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon" />
                        </div>                    
                        <div className="gallery-item">
                            <button onClick={prevImg} className='btn-img'>&#10094;</button>
                            <img src={images[image]} alt={pokemon.name} />
                            <button onClick={nextImg} className="btn-img">&#10095;</button>
                        </div>
                        <Info/>
                        <div className='is-flex justify-content-center'>
                            <button className="btn-img" onClick={
                                () => getPokemon(pokemon.id - 1)
                            }>&#10094;</button>
                            <p className='title'>#{pokemon.id}</p>
                            <button className="btn-img"
                                onClick={
                                    () => getPokemon(pokemon.id + 1)
                                }
                            >&#10095;</button>
                        </div>
                    </div>

                    :
                    <div className="gallery-item">
                        <img className='no-pokemon' src={Logo} alt="pokemon" />
                    </div>
            }
            
            
            </div>
        </>
        
     );
}
 
export default Gallery;