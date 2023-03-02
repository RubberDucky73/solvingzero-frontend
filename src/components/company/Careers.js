import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
} from '@chakra-ui/react';

import Image from 'next/image';
import NextLink from 'next/link';

export default function Careers() {
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
            Careers
          </Text>
          <Heading color="green.900">Work life</Heading>
          <Text color="green.800" fontSize="lg">
            At the moment SolvingZero is a startup team of just me. I've been
            building and funding this project on my own, so unfortunately I
            can't hire anyone just yet.
            <br />
            <br />
            <strong>That being said</strong> I am always on the look out for an
            Australia based co-founder who wants to tackle climate change head
            on. There is a real unique oppurtunity here to use a pure SaaS
            product to combat emssions using the CDR APIs.
            <br />
            <br />
            If you have solid software engineering experince or data science
            experince it'd be great to chat. You can find me on{' '}
            <Link
              textDecoration="underline"
              color="blue.400"
              as={NextLink}
              href="https://www.linkedin.com/in/sambendat/"
            >
              Linkedin
            </Link>
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src="/monet.png"
            width={500}
            height={200}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
