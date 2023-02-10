import { useRouter } from 'next/router';
import BestPlans from '../components/BestPlans';
import Layout from '../components/Layout';

const GreenEnergy = () => {
  const router = useRouter();
  const { postcode } = router.query;
  return (
    <Layout>
      <BestPlans postcode={postcode} />
    </Layout>
  );
};

export default GreenEnergy;
