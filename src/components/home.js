import pokemonService from '../services/pokemons'
import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import Buttons from './buttons'
import List from './list'
import { ChakraProvider, Grid, Container, CircularProgress, Stack } from "@chakra-ui/react"


function Home() {
    const [pokemons, setPokemons] = useState()
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        pokemonService.getAll().then(initial2 => {
            setPokemons(initial2)
        })
        setTimeout(() => {
            setisLoading(true);
        }, 1500);
    }, [])

    return (
        <ChakraProvider>
            <Navbar></Navbar>
            <Container className="App" maxWidth='container.xl'>
                <Buttons setPokemons={setPokemons} loading={setisLoading}></Buttons>
                {!isLoading ?
                    <Stack margin='250px' justifyContent='center' alignItems='center'>
                        <CircularProgress isIndeterminate value={59} size="100px" thickness="4px" />
                    </Stack>
                    :
                    <Stack>
                        <Container maxW="container.xl">
                            <Grid templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={5}>
                                {pokemons &&
                                    pokemons.map((poke, id) =>
                                        <List key={id} pokemon={poke}></List>
                                    )}
                            </Grid>
                        </Container>
                    </Stack>}
            </Container>
        </ChakraProvider>
    );
}

export default Home
