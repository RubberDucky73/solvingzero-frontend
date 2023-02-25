import NextLink from 'next/link';
import Image from 'next/image';
import { Card, Grid, GridItem, Heading, Link, Text } from '@chakra-ui/react';

export default function ArticleCard({ article }) {
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
          <Heading color="green.800" size="lg">
            {title}
          </Heading>
        </GridItem>
        <GridItem mt="10px" mr="10px" mb="10px" ml="10px">
          <Text color="green.900">{blurb}</Text>
        </GridItem>
        {/* <Text>by {author.fields.authorName}</Text> */}
        {/* <p className="date">{date}</p> */}
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
