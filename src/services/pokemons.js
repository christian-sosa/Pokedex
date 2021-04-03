/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const pokemonUrl2 = 'https://pokeapi.co/api/v2/pokemon?limit=25'
const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'


const getAll = async () => {
    const request =  axios.get(pokemonUrl2)
    const aux = await request.then(response => response.data)
    const promises = aux.results.map(async (pokemon) => {
        return await getEspecifico(pokemon.url)
    })
    const results = await Promise.all(promises)
    return results  
}

const getAll2 = async (url) => {
    const request =  axios.get(url)
    const aux = await request.then(response => response.data)
    const promises = aux.results.map(async (pokemon) => {
        return await getEspecifico(pokemon.url)
    })
    const results = await Promise.all(promises)
    return results   
}

const get1 =  (id) => {
    const  request =  axios.get(`${pokemonUrl}${id}`)
    return request.then(response => response.data)
}

const getEspecifico =  (url) => {
    const  request =  axios.get(url)
    return request.then(response => response.data)
}

export default { getAll , get1 , getEspecifico , getAll2} 