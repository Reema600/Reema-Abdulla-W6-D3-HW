import { ChakraProvider,ColorModeScript} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from './Theme'
// import Mode from './Mode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    {/* <Mode/> */}
    <App />
    </ChakraProvider>,
)
