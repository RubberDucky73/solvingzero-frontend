import { createClient } from 'contentful';
import { Container } from '@chakra-ui/react';

import ArticleCard from '../../components/ArticleCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
    <>
      <Navbar />
      <Container maxW="7xl" minH="75vh" className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </Container>
      <Footer />
    </>
  );
}
