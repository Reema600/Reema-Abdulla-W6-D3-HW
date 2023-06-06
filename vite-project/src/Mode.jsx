import {Button} from "@chakra-ui/button"
import {useColorMode} from "@chakra-ui/icons"

const Mode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  

    </>
  )
}

export default Mode