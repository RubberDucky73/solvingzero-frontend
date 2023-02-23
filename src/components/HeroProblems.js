import { Heading, Text, GridItem, Grid } from '@chakra-ui/react';

export default function HeroProblem() {
  return (
    <>
      <Grid
        gridTemplateColumns={{ base: '1', md: '2' }}
        gap="5"
        bg="linear(to-t, green.400, green.400)"
        py="100px"
        px="30px"
        rounded="lg"
        // shadow="lg"
      >
        <GridItem gridColumn="1">
          <Grid shadow="2xl" rounded="lg" minH="200px">
            <Heading
              as="h3"
              gridRow="1"
              pt="15px"
              px="30px"
              fontSize="md"
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
              carbon emissions of every plan.
            </Text>
          </Grid>
        </GridItem>
        <GridItem gridColumn="2">
          <Grid bgGradient="none" shadow="2xl" rounded="lg" minH="200px">
            <Heading
              as="h3"
              gridRow="1"
              pt="15px"
              px="30px"
              fontSize="sm"
              fontWeight="semibold"
              color="yellow.700"
            >
              Goverment Data
            </Heading>
            <Heading
              gridRow="2"
              as="h2"
              fontSize={{ base: 'lg', md: '3xl' }}
              py="15px"
              px="30px"
              color="green.900"
            >
              Pricing
            </Heading>
            <Text
              gridRow="3"
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="semibold"
              py="15px"
              px="30px"
            >
              All our pricing data comes straight from the Australian Energy
              Regulator updated in real time.
            </Text>
          </Grid>
        </GridItem>
      </Grid>
      {/* <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        mb={{ base: '30px', md: '60px' }}
      >
        <Stack>
          <CardBody>
            <Heading as="h3" size="sm" color="green.600">
              Finding your solution
            </Heading>
            <Heading as="h2" size="lg" color="green.800" mt="20px">
              On average Aussies are paying 11% more for their energy than
              necessary
            </Heading>

            <Text py="2">
              Based on the above statistic by the Institue for Energy Economics
              and Financial Analysis you are most likely spending at least $100
              on your energy. In a best case scenario thats still a loss of
              thousands of dollars over your lifetime.
            </Text>
          </CardBody>
        </Stack>
      </Card> */}
      {/* <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >

        <Stack>
          <CardBody>
            <Heading as="h3" size="sm" color="green.600">
              How it works
            </Heading>
            <Heading as="h2" size="lg" color="green.800" mt="20px">
              A complete energy plan analysis using governmnet data
            </Heading>

            <Text py="2">
              We use pricing data provided by the Australian Energy Regulator
              (AER) in real time to search for the best plans. We then use
              multiple different industry standard carbon emission tools and our
              own research to calculate an estiamte of emissions for each plan.
            </Text>
          </CardBody>
        </Stack>
      </Card> */}
    </>
  );
}
