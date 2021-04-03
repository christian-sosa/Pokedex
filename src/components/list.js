import React from 'react'

import { Stack, Image, Text } from "@chakra-ui/react"
import  {Link} from 'react-router-dom';



const List = ({ pokemon }) => {



    return (
        <Link to={`/${pokemon.name}`}>
            <Stack direction='column' border='1px' borderColor='black' width='100%'  marginTop={5}>
                <Stack bg="gray.100" justifyContent='center' alignItems='center'>
                    <Image src={pokemon.sprites.front_default} boxSize='150px' />
                </Stack>
                <Stack direction='column' justifyContent='center' alignItems='center'>
                    <Text fontSize='xl' color='gray'>N {pokemon.id}</Text>
                    <Text fontSize='3xl' color='black'>{pokemon.name.toUpperCase()}</Text>
                </Stack>
            </Stack>
        </Link>
    )
}

export default List