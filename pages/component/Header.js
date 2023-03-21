import React from 'react'
import { Box, Container, Heading ,Text  } from '@chakra-ui/react'


export default function Header() {
  return (
    <div>
      <Container maxW={1400}>

      <Box as='section' pb={{lg: 24 , base : 48}} w={{base:'96',lg:'1326px'}}>
        <Box  bg='#6B46C1' color='#F7FAFC' pt={{lg:90, base:12}} pb={56} px={{lg:16, base:12}} textAlign={{base:'left', lg :'center'}} >
            <Heading fontWeight={800} fontSize={{base:'2xl', lg:'5xl'}}>Simple Prcing for your business</Heading>
            <Text fontWeight={500} fontSize={{base: 'md', lg:'2xl'}} mt={{base :4, lg: 8}}>    Plan that are carefully crafted to suit your business</Text>
        </Box>

      </Box>
      </Container>
    </div>
  )
}
