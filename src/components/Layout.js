import { Container } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <Container maxW="7xl" minH="75vh">
      {children}
    </Container>
    <Footer />
  </div>
);

export default Layout;
