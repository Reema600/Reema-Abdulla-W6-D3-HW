// import { ChakraProvider,SimpleGrid} from '@chakra-ui/react'
import './App.css'
import Navbar from './component/Navbar'
import Fotter from './component/Fotter'
import Carousel from './component/Carousel'
import Cart from './component/Cart'
// import Mode from './Mode'


function App() {
  

  return (
    <>
    {/* <Mode/> */}
      <Navbar></Navbar>
      
<Carousel></Carousel>

<Cart></Cart>



      <Fotter></Fotter>
    </>
  )
}

export default App
