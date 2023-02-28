import { createClient } from 'contentful';
import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import AdviceCard from '../../components/blog/AdviceCard';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import { RenderIf } from '../../utils/utils';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'advicePost' });

  return {
    props: {
      articles: res.items,
    },
  };
}

export default function Articles({ articles }) {
  return (
    <>
      <Navbar />
      <Container maxW="4xl">
        <Heading mt="40px" mr="20px" mb="10px" ml="20px">
          Discover tips and advice on saving energy in your home
        </Heading>
        <Text mt="10px" mr="20px" mb="10px" ml="20px">
          The articles here are strictly advice and tips based on facts and cold
          hard research. We try to remove the fluff and boring overspeak as much
          as possible.
        </Text>
      </Container>
      <SimpleGrid
        columns={{ base: '1', md: '3' }}
        spacing={{ base: '30px', md: '25px' }}
        // maxW="9xl"
        minH="75vh"
        mt="80px"
        mr="35px"
        ml="35px"
        mb={{ base: '100px' }}
        alignContent="start"
        justifyContent="center"
        justifyItems="center"
      >
        {articles.length
          ? articles.map((article) => (
              <RenderIf value={article.sys.id}>
                <AdviceCard key={article.sys.id} article={article} />
              </RenderIf>
            ))
          : null}
      </SimpleGrid>
      <Footer />
    </>
  );
}
