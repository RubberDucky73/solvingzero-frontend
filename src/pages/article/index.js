import { createClient } from 'contentful';
import { Text, Heading, SimpleGrid, Container } from '@chakra-ui/react';

import ArticleCard from '../../components/blog/ArticleCard';
import Layout from '../../components/ui/Layout';
// import Footer from '../../components/Footer';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'articleDefault' });

  return {
    props: {
      articles: res.items,
    },
  };
}

export default function Articles({ articles }) {
  console.log(articles);
  return (
    <Layout>
      <Container maxW="4xl">
        <Heading mt="40px" mr="20px" mb="10px" ml="20px">
          Learn more about energy in Australia
        </Heading>
        <Text mt="10px" mr="20px" mb="10px" ml="20px">
          Each article below is our own in-depth analysis of popular energy
          topics. In each article we take a deep dive into a specific topic with
          the goal to paint a more vivid picture on the state of green energy in
          Australia.
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
        {articles.map((article) => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
