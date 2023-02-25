import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import BestPlans from '../components/BestPlans';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const GreenEnergy = () => {
  const router = useRouter();
  const { postcode } = router.query;
  return (
    <>
      <Navbar />
      <Box px={{ base: '15px', md: '40px' }} minH="70vh">
        <BestPlans postcode={postcode} />
      </Box>
      <Footer />
    </>
  );
};

export default GreenEnergy;
