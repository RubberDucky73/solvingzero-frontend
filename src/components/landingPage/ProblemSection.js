import { Heading, Text, GridItem, Grid } from '@chakra-ui/react';
import Image from 'next/image';

export default function LandingCard() {
  return (
    <Grid
      gridTemplateColumns={{ base: '1', md: '2' }}
      gap="5"
      bg="linear(to-t, green.400, green.400)"
      pt="100px"
      pb="200px"
      px="30px"
      rounded="lg"
      // shadow="lg"
    >
      <GridItem gridColumn="1">
        <Grid minH="200px">
          <Heading
            as="h3"
            gridRow="1"
            pt="15px"
            pb="30px"
            px="30px"
            fontSize="lg"
            fontWeight="semibold"
            color="green.700"
          >
            Affordable and greener
          </Heading>
          <Heading
            gridRow="2"
            as="h2"
            fontSize={{ base: 'lg', md: '3xl' }}
            py="15px"
            px="30px"
            color="green.900"
            maxW="100%"
          >
            On average Aussies are paying 11% more for their energy than
            necessary*
          </Heading>
          <Text
            gridRow="3"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="medium"
            py="15px"
            px="30px"
            maxW="100%"
          >
            SolvingZero exists to filter through the thousands of plans to find
            you the most affordable plan for your home. We believe Aussies
            deserve access to affordable energy, and in 2023 that energy can be
            green.
          </Text>
          <Text py="15px" px="30px" fontSize={{ base: 'sm', md: 'sm' }}>
            * Institue for Energy Economics and Finacial Analysis
          </Text>
        </Grid>
      </GridItem>
      <GridItem gridColumn="1">
        <Grid minH="200px">
          <Heading
            gridRow="2"
            as="h2"
            fontSize={{ base: 'lg', md: '3xl' }}
            py="15px"
            px="30px"
            color="green.900"
            maxW="100%"
          >
            Energy to Aussie homes emit 630kgs of CO2 for every MWh
          </Heading>
          <Text
            gridRow="3"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="medium"
            py="15px"
            px="30px"
            maxW="100%"
          >
            Some maths... A standard passenger car emits 1,626kgs of carbon a
            year. The standard Aussie house uses around 4MWh a year, which means
            a normal Aussie home is the equivalent of an extra 1.5 cars on the
            road every year.
          </Text>
        </Grid>
      </GridItem>
      <GridItem
        gridColumn={{ base: '1', md: '2' }}
        gridRow={{ base: '3', md: '1 / span 2' }}
        placeSelf="center"
        mt={{ base: '50px' }}
        mb={{ base: '0px' }}
        pb={{ base: '0px' }}
      >
        <Image
          src="/energyPriceDotPlot.png"
          alt="Energy Price Dot Plot Graph"
          height={500}
          width={500}
          minW="300px"
          minH="300px"
          mx="30px"
          shadow="2xl"
          rounded="2xl"
        />
      </GridItem>
    </Grid>
  );
}
