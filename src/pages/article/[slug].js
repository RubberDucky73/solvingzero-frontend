import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';

import Skeleton from '../../components/ArticleSkeleton';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'articleDefault',
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'articleDefault',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { article: items[0] },
    revalidate: 3,
  };
}

export default function Article({ article }) {
  if (!article) return <Skeleton />;

  const { featuredImage, title, author, date, articleBody } = article.fields;
  console.log(article);
  return (
    <>
      <Navbar />
      <Container maxW="5xl" minH="100vh">
        <div className="banner">
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            alt={featuredImage.fields.title}
          />
          <h1>{title}</h1>
        </div>
        <div className="Info">
          <p className="author"> {author.fields.authorName}</p>
          <p className="date">Published on: {date}</p>
        </div>
        <div className="body">
          <div>{documentToReactComponents(articleBody)}</div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
