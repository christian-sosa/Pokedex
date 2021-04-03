import React from 'react'
import { Button, Container, Grid } from "@chakra-ui/react"
import pokemonsServices from '../services/pokemons'

const Buttons = ({ setPokemons, loading }) => {
    const onclick1 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true)
        }, 1500)
        loading(false)
    }
    const onclick2 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true);
        }, 1500)
        loading(false)
    }
    const onclick3 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true)
        }, 1500)
        loading(false)
    }
    const onclick4 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true)
        }, 1500)
        loading(false)
    }
    const onclick5 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true)
        }, 1500)
        loading(false)
    }
    const onclick6 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true)
        }, 1500)
        loading(false)
    }
    const onclick7 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true)
        }, 1500)
        loading(false)
    }
    const onclick8 = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=84&offset=809'
        pokemonsServices.getAll2(url).then(initial => {
            setPokemons(initial)
        })
        setTimeout(() => {
            loading(true)
        }, 1500)
        loading(false)
    }

    return (
        <Container maxWidth='container.xl'>
            <Grid templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={15} justifyContent='center' >
                <Button onClick={onclick1} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Primera Gen</Button>
                <Button onClick={onclick2} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Segunda Gen</Button>
                <Button onClick={onclick3} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Tercera Gen</Button>
                <Button onClick={onclick4} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Cuarta Gen</Button>
                <Button onClick={onclick5} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Quinta Gen</Button>
                <Button onClick={onclick6} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Sexta Gen</Button>
                <Button onClick={onclick7} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Septima Gen</Button>
                <Button onClick={onclick8} marginLeft={50} size="md" marginTop='10px' height="48px" width="200px" border="2px" borderColor="green.500">Octava Gen</Button>
            </Grid>
        </Container>
    )
}

export default Buttons