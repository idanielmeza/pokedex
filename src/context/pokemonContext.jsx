import { createContext,useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({children}) =>{

    const [pokemon, setPokemon] = useState(null);
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(0);
    const [error, setError] = useState(false);
    const [info, setInfo] = useState(false);

    const nextImg = () => {
        if (image < images.length - 3) {
            setImage(image + 1);
        } else {
            setImage(0);
        }
    }

    const prevImg = () => {
        if (image > 0) {
            setImage(image - 1);
            
        } else {
            setImage(images.length - 3);
        }
    }

    const getPokemon = async (termino) => {
        try {
            setImage(0)
            const pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${termino}`)).json();
            setImages(Object.values(pokemon.sprites).filter(sprite => sprite !== null));
            setPokemon(pokemon);
        } catch (error) {
            setError(true);
        }
        
    }



    return(
        <PokemonContext.Provider
            value={{
                pokemon,
                images,
                image,
                error,
                info,
                setInfo,
                nextImg,
                prevImg,
                getPokemon
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;