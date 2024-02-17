
import { Text, Box, Container, SimpleGrid } from '@chakra-ui/react'
import {Link} from 'react-router-dom';

const News = () => {

  return (
    <Container maxWidth='85%'>

      <Text margin='80px' fontSize='4xl'>Por favor, eleige una de estas categorías:</Text>

      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        <Box height='200px'>
        <Link to="/News/Sports">Deportes</Link>
          <Text marginTop='20px' fontSize='md'>Encuentre las últimas noticias sobre tus deportes favoritos, desde fútbol hasta tenis, baloncesto, golf y mucho mas.</Text>
        </Box>
        <Box height='200px'>
          {/* <Button colorScheme='gray' onClick={() => setChagePages('Economy')}>Economía</Button> */}
          <Link to="/News/Economy">Economía</Link>
          <Text marginTop='20px' fontSize='md'>Mantente al día con las últimas tendencias tecnológicas, desde dispositivos móviles hasta inteligencia artificial, robótica y mucho más.</Text>
        </Box>
        <Box height='200px'>
          <Link to="/News/Tecnology">Tecnología</Link>
          <Text marginTop='20px' fontSize='md' >Descubre las últimas noticias económicas, desde mercados financieros hasta empresas, negocios, política fiscal y mucho más.</Text>
        </Box>

      </SimpleGrid>

    </Container>
  )
}

export default News;