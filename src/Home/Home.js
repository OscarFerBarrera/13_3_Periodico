import { Heading, Box, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Box maxW='32rem'>
        <Heading mb={4}>Bienvenido al periódico digital</Heading>
        <Text fontSize='xl'>
          Paystack helps businesses in Africa get paid by anyone, anywhere in the
          world
        </Text>

      </Box>
    </div>
  )
}

export default Home;