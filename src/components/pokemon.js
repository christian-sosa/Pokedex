import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { Stack, Image, Text } from "@chakra-ui/react"
import pokemonService from '../services/pokemons'
import {useParams} from 'react-router-dom';


const Pokemon = () => {
    const [pokemon, setPokemon] = useState()
    let { name } = useParams();

    useEffect(() => {
        pokemonService.get1(name).then(initial2 => {
            setPokemon(initial2)
        })
    })


    return (
        <Stack>
            <Navbar></Navbar>
            {pokemon ?
                <Stack justifyContent='center' alignItems='center'>
                    <Stack width='25%' border='1px' borderColor='black' marginTop={5}>
                        <Stack>
                            <Image src={pokemon.sprites.front_default} boxSize='250px' />
                        </Stack>
                        <Stack direction='column' justifyContent='center' alignItems='center'>
                            <Text fontSize='xl' color='gray'>N {pokemon.id}</Text>
                            <Text fontSize='3xl' color='black'>{pokemon.name.toUpperCase()}</Text>
                        </Stack>
                    </Stack>
                </Stack>
                :
                <Stack></Stack>
            }
        </Stack>

    )
}

export default Pokemon