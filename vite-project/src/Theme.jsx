// import { ChakraProvider} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const Theme = extendTheme({ config })
export default  Theme