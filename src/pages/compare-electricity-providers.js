import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import BestPlans from '../components/cep/BestPlans';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const GreenEnergy = () => {
  const router = useRouter();
  const { postcode, company } = router.query;
  return (
    <>
      <Navbar />
      <Box px={{ base: '0px', md: '30px' }} minH="70vh">
        <BestPlans postcode={postcode} company={company} />
      </Box>
      <Footer />
    </>
  );
};

export default GreenEnergy;
