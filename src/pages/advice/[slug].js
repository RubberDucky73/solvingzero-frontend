import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'advicePost',
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
    content_type: 'advicePost',
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
    props: { advice: items[0] },
    revalidate: 3,
  };
}

export default function Advice({ advice }) {
  const { featuredImage, title, author, date, articleBody } = advice.fields;
  console.log(advice);
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
        <Prose>{documentToReactComponents(articleBody)}</Prose>
      </Container>
      <Footer />
    </>
  );
}
