import { Heading, Text, GridItem, Grid, Link } from '@chakra-ui/react';

export default function HeroProblem() {
  return (
    <Grid
      gridTemplateColumns={{ base: '1', md: '2' }}
      gap="5"
      bg="linear(to-t, green.400, green.400)"
      pb={{ base: '150px' }}
      mx="30px"
      // px="30px"
      rounded="lg"
      // shadow="lg"
    >
      <GridItem
        gridColumn={{ base: '1', md: '1' }}
        gridRow={{ base: '1', md: '1' }}
      >
        <Grid shadow="2xl" rounded="lg" minH="200px">
          <Heading
            as="h3"
            gridRow="1"
            py="20px"
            px="30px"
            fontSize="lg"
            fontWeight="semibold"
            color="green.100"
          >
            Purpose built to find affordable green energy
          </Heading>
          <Heading
            gridRow="2"
            as="h2"
            fontSize={{ base: 'lg', md: '3xl' }}
            py="15px"
            px="30px"
            color="green.50"
          >
            Green Rating
          </Heading>
          <Text
            gridRow="3"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            py="15px"
            px="30px"
            color="green.100"
          >
            We use over a dozen different sources and tools to calculate the
            carbon emissions of every plan. What to know how it works?
          </Text>
          <Link
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            maxW="max-content"
            py="15px"
            px="30px"
            color="blue.200"
            textDecoration="underline"
            _hover={{
              color: 'blue.100',
            }}
          >
            Learn more...
          </Link>
        </Grid>
      </GridItem>
      <GridItem
        gridColumn={{ base: '1', md: '2' }}
        gridRow={{ base: '2', md: '1' }}
      >
        <Grid
          bgGradient="none"
          shadow="2xl"
          rounded="lg"
          minH={{ md: '200px' }}
        >
          <Heading
            as="h3"
            gridRow="1"
            py="20px"
            px="30px"
            fontSize="lg"
            fontWeight="semibold"
            color="yellow.100"
          >
            Using trusted goverment data
          </Heading>
          <Heading
            gridRow="2"
            as="h2"
            fontSize={{ base: 'lg', md: '3xl' }}
            py="15px"
            px="30px"
            color="yellow.50"
          >
            Pricing
          </Heading>
          <Text
            gridRow="3"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            py="15px"
            px="30px"
            color="yellow.100"
          >
            All our pricing data comes straight from the Australian Energy
            Regulator updated in real time. Check out how we do it.
          </Text>
          <Link
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="semibold"
            maxW="max-content"
            py="15px"
            px="30px"
            color="blue.200"
            textDecoration="underline"
            _hover={{
              color: 'blue.100',
            }}
          >
            Learn more...
          </Link>
        </Grid>
      </GridItem>
    </Grid>
  );
}
