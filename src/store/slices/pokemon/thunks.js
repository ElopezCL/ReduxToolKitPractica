import { pokemonApi } from "../../../apis/PokemonAPI"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch(startLoadingPokemons())

        //REALIZAR PETICION HTTP
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?Limit=10&offset=${page *10}`)
        // const data = await resp.json();
        // console.log(data);

        const {data} = await pokemonApi.get(`/pokemon?Limit=10&offset=${page *10}`)
        console.log(data);
        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}