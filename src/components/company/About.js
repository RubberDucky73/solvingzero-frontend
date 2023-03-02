import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

import Image from 'next/image';
// import Koala from './public/koala.jpg';

export default function AboutUs() {
  return (
    <Container maxW="5xl" py={12} minH="90vh">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="green.800"
            fontWeight={600}
            fontSize="sm"
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Our Story
          </Text>
          <Heading color="green.900">What is SolvingZero?</Heading>
          <Text color="green.800" fontSize="lg">
            SolvingZero is being built with the sole purpose to help us save
            money and go greener. In its current form SolvingZero compares
            energy plans by the two main criteria, price and green rating.
            <br />
            <br />
            In our next phase, we are building a product that (with permission)
            will monitor your energy usage in real time and then use that data
            to optimise your energy lifestyle. We will be able to calculate your
            energy costs and potential savings down to the cent and then
            estimate the relative emissions down to the kilo.
            <br />
            <br />
            Further into the future you can let us charge your electric vehicle
            at the most optimal time of the day, export/sell your solar power,
            run your smart washer/dryer when its cheapest, and a hundred other
            energy intensive activities without ever having to think about it
            again.
          </Text>
        </Stack>
        <Flex object-fit="contain" position="relative">
          <Image
            alt="Koala on a tree"
            src="/MelbourneWave.png"
            width={500}
            height={200}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
