
import { ChakraProvider } from "@chakra-ui/react"
import Main from './component/main'


export default function Home() {
  return (
    <>
    <ChakraProvider>
     <Main/>
    </ChakraProvider>
    
  </>
    
  )
}
