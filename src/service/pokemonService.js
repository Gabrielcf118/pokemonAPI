import { Api } from "./axios.config"

export const getPokemon = async (idPokemon) => {
    const data = await Api.get(`/${idPokemon}`)
    return data
  }







  export const getAllPokemons = async () => {
    const data = await Api.get(`/`)
    return data
  }
  
  