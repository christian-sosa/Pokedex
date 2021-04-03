import React, { useState } from 'react'
import { Stack, Input, IconButton, Image, ChakraProvider } from "@chakra-ui/react"
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [search, setSearch] = useState([])

  const OnChangeInputNav = (e) => {
    setSearch(e.target.value)
  }

  return (
    <ChakraProvider>
      <Stack direction='row' spacing='60' padding={4} backgroundColor='red'>
        <Link to={'/'}>
          <Stack paddingLeft={2}>
            <Image src="//www.cpokemon.com/wp-content/themes/nuevocp/images/cplogo-hdpi.png" height='35px' alt='Pokedex' />
          </Stack>
        </Link>
        <form style={{ width: "100%" }}>
          <Stack direction='row' spacing='0' width='50%'>
            <Input roundedBottomRight={0} placeholder='Busqueda' backgroundColor='white' onChange={OnChangeInputNav}></Input>
            <Link to={`/${search}`}><IconButton type='submit' roundedBottomLeft={0} aria-label="Search database" icon={<img src="https://icongr.am/octicons/search.svg?size=20&color=currentColor" alt=''></img>} /></Link>
          </Stack>
        </form>
      </Stack>
    </ChakraProvider>
  )
}

export default Navbar