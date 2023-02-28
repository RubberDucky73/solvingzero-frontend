import NextLink from 'next/link';
import Image from 'next/image';
import { Card, Grid, GridItem, Heading, Link, Text } from '@chakra-ui/react';

export default function AdviceCard({ article }) {
  const { title, slug, thumbnail, blurb } = article.fields;

  return (
    <Card maxW="sm" maxH="lg">
      <Grid>
        <GridItem>
          <Link as={NextLink} href={`/advice/${slug}`}>
            <Image
              src={`https:${thumbnail.fields.file.url}`}
              alt={thumbnail.fields.title}
              width={thumbnail.fields.file.details.image.width}
              height={thumbnail.fields.file.details.image.height}
            />
          </Link>
        </GridItem>
        <GridItem mt="10px" mr="10px" ml="10px">
          <Link as={NextLink} href={`/advice/${slug}`}>
            <Heading color="green.800" size="lg">
              {title}
            </Heading>
          </Link>
        </GridItem>
        <GridItem mt="10px" mr="10px" mb="10px" ml="10px">
          <Text color="green.900">{blurb}</Text>
        </GridItem>
        <GridItem mt="10px" mr="10px" mb="10px" ml="10px">
          <Link
            fontWeight="semibold"
            fontSize="lg"
            as={NextLink}
            color="green.500 "
            href={`/advice/${slug}`}
          >
            Read more...
          </Link>
        </GridItem>
      </Grid>
    </Card>
  );
}
