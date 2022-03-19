import { useContext, useState } from "react";
import { PokemonContext } from "../context/pokemonContext";

const Search = () => {

    const { getPokemon } = useContext(PokemonContext);
    const [search, setSearch] = useState("");

    const handleSearch = e => {
        setSearch(
            e.target.value.toLowerCase()
        )
    }

    return ( 
        <div className="search">
            <input 
                onChange={handleSearch}
                value={search}
            type="text" placeholder="Search..." />
            <button
                onClick={() => {
                    getPokemon(search)
                    setSearch("")
                }}
            type='button'>Search</button>
        </div>

     );
}
 
export default Search;