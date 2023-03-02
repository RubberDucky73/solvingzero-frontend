import { Container, useColorModeValue, Icon, Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Box>
      <Navbar />
      <Container maxW="100%" px="0" mx="0" minH="80vh">
        {children}
      </Container>
      <Footer />
    </Box>
    <Blob
      // w="100%"
      h={{ base: '85vh', md: '60vh' }}
      position="absolute"
      overflow="hidden"
      top={{ base: '-100', md: '-205', lg: '-420' }}
      left={{ md: '-550' }}
      zIndex={-1}
      opactity="0.1"
      filter="auto"
      blur="150px"
      maxW="7xl"
      color={useColorModeValue('green.100', 'green.400')}
    />
    <Blob
      // w="100%"
      h={{ base: '75vh', md: '60vh' }}
      position="absolute"
      overflow="hidden"
      top={{ base: '-30', md: '-95', lg: '500' }}
      left={{ md: '-200' }}
      zIndex={-1}
      opactity="0.1"
      filter="auto"
      blur="90px"
      color={useColorModeValue('yellow.100', 'yellow.400')}
    />
    <Blob
      w={{ base: '100%', md: 'min-content' }}
      h={{ base: '85vh', md: '60vh' }}
      position="absolute"
      overflow="hidden"
      top={650}
      left={{ base: '{0}', md: '500' }}
      zIndex={-1}
      opactity="0.1"
      filter="auto"
      blur="90px"
      maxW="50%"
      color={useColorModeValue('green.100', 'green.400')}
    />
  </>
);

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

export default Layout;
