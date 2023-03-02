import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import PostcodeSearch from '../PostcodeSearch';

// import HeroCards from './HeroCards';

export default function CallToAction() {
  return (
    <Grid
      align="start"
      spacing={{ base: 0, md: 10 }}
      py={{ base: 14, md: 28 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Grid gridRow="1" maxW="50%">
        <GridItem>
          <Heading
            lineHeight={1.25}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
          >
            <Text as="span" color="green.900">
              {'Save '}
            </Text>
            <Text as="span" color="yellow.400">
              {'hundreds '}
            </Text>
            <Text as="span" color="green.900">
              {'and the '}
            </Text>
            <Text as="span" color="green.400">
              {'planet '}
            </Text>
            <Text as="span" color="green.900">
              by switching energy providers
            </Text>
          </Heading>
        </GridItem>
        <GridItem>
          <PostcodeSearch sendTo />
        </GridItem>
      </Grid>
      <Flex flex={1} position="relative" w="full">
        <Blob
          w="100%"
          h={{ base: '85vh', md: '60vh' }}
          position="absolute"
          overflow="hidden"
          top={{ base: '-10', md: '-205', lg: '-400' }}
          left={{ md: '150' }}
          zIndex={-1}
          opactity="0.1"
          filter="auto"
          blur="70px"
          color={useColorModeValue('green.100', 'green.400')}
        />
        <Blob
          w="100%"
          h={{ base: '45vh', md: '35vh' }}
          position="absolute"
          overflow="hidden"
          top={{ base: '-10', md: '-95', lg: '-100' }}
          left={{ md: '200' }}
          zIndex={-1}
          opactity="0.1"
          filter="auto"
          blur="90px"
          color={useColorModeValue('yellow.100', 'yellow.400')}
        />
        <Box position="relative" rounded="2xl" width="full" overflow="hidden" />
      </Flex>
    </Grid>
  );
}

export const Blob = (props) => (
  <Icon
    width="100%"
    viewBox="0 0 578 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
      fill="currentColor"
    />
  </Icon>
);
