import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { Container, Heading, Text, Box, Avatar, Grid } from '@chakra-ui/react';
import dayjs from 'dayjs';
// import RichText from '../../components/RichText';

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
  const { featuredImage, title, subHeading, author, date, articleBody } =
    article.fields;
  const formatDate = dayjs({ date }[0]).format('MMM DD, YYYY');
  return (
    <>
      <Navbar />
      <Container
        maxW={{ base: '7xl', md: '4xl' }}
        minH="100vh"
        minW
        bgColor="white"
        shadow="lg"
        border="2px"
        borderColor="gray.50"
        padding="50px"
      >
        <Heading mt={{ base: '2px', md: '10px' }} as="h1" color="green.900">
          {title}
        </Heading>
        <Text mt="20px" fontSize="lg" fontWeight="semibold" color="green.900">
          {subHeading}
        </Text>
        <Grid
          columns={2}
          justifyContent="start"
          mt="20px"
          mb="20px"
          alignItems="start"
        >
          <Avatar gridColumn="1" name="Sam Bendat" src="/samAvatar.webp" />
          <Box gridColumn="2" ml="10px">
            <Text color="green.900">{author.fields.authorName}</Text>
            <Text fontSize="sm" color="green.800">
              {formatDate}
            </Text>
          </Box>
        </Grid>
        <Box
          // maxW={{ base: '100%', md: '100%' }}
          minW={{ md: '{featuredImage.fields.file.details.image.width}' }}
          minH={{ md: '{featuredImage.fields.file.details.image.height}' }}
        >
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            alt={featuredImage.fields.title}
          />
        </Box>
        {/* <RichText> */}
        <Prose fontWeight="semibold">
          {documentToReactComponents(articleBody)}
        </Prose>
        {/* </RichText> */}
      </Container>
      <Footer />
    </>
  );
}
