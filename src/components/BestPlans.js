import { useEffect, useState } from 'react';
import { collectionGroup, getDocs, where, query } from 'firebase/firestore';
import { Flex, Grid, GridItem, CircularProgress } from '@chakra-ui/react';
import { db } from '../firebase/config';
import PostcodeSearch from './PostcodeSearch';
import { RenderIf, ratesFormat } from '../utils/utils';

const FeesList = (fees) => {
  if (fees) {
    console.log('Fees', fees);
    return fees?.plans?.map((e, idx) => (
      <div style={{ background: 'red' }}>
        <h1>{idx}</h1>
        <li>{`Amount ${e?.amount}`}</li>

        <RenderIf value={e.rate}>
          {(rate) => <li>{`Rate :${ratesFormat(rate)}`}</li>}
        </RenderIf>

        <li>{`Description ${e?.description}`}</li>
        <li>{`Term ${e?.term}`}</li>
        <li>{`Type ${e?.type}`}</li>
      </div>
    ));
  }
  return null;
};
export default function BestPlans({ postcode }) {
  const [bestPlansState, setBestPlans] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(bestPlansState);
  const renderList = () => {
    if (bestPlansState?.length && !loading) {
      return bestPlansState?.map((ele) => (
        <div key={ele.id}>
          {/* {console.log(
            'ELE',
            'IDX',
            idx,
            ele.data.electricityContract.tariffPeriod[0]
          )} */}
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={4}
            bg="white"
            border="2px"
            borderColor="gray.200"
            shadow="md"
            mt="20px"
            mb="20px"
            rounded="2xl"
          >
            <GridItem gridColumn="1" bg="red.200">
              {`${ele.data.brandName} `}
            </GridItem>
            <GridItem gridColumn="2 / span 3" bg="blue.300">
              {ele.data.displayName}
            </GridItem>
            <GridItem gridRow="2">{`Has an App: ${ele.hasApp}`}</GridItem>
            <GridItem gridRow="3">{`Aussie: ${ele.australian}`}</GridItem>
            {/* <GridItem colSpan={2} bg="blue.300">
              {`${ele.data.electricityContract.fees[0]}`}
            </GridItem> */}
            <FeesList plans={ele.data.electricityContract.fees} />
            <GridItem gridRow="4">{`Plan ID: ${ele.data.planId}`}</GridItem>
            <GridItem
              gridRow="1"
              gridColumn="5 / span 3"
              bg="yellow.300"
            >{`Yearly cost for 15kWh p/d: $${Math.round(
              ele.yearlyPrice / 100
            )}`}</GridItem>
            <GridItem gridRow="2" gridColumn=" 5 / span 3" bg="yellow.200">
              {`Daily supply cost: ${ele.data.electricityContract.tariffPeriod[0].dailySupplyCharges}`}
            </GridItem>
            <GridItem gridRow="3" gridColumn="5 / span 3" bg="yellow.100">
              {`Unit cost: ${ele.data.electricityContract.tariffPeriod[0].singleRate.rates?.[0].unitPrice}`}
            </GridItem>

            <GridItem
              gridRow="1"
              gridColumn="8 / span 3"
              bg="green.300"
            >{`Comapny Green Rating: ${(
              Math.round(ele.greenRating * 2) / 2
            ).toFixed(1)}`}</GridItem>
            <GridItem
              gridRow="2"
              gridColumn="8 / span 3"
              bg="green.200"
            >{`Tonnes of carbon per MWh: ${ele.tonnesMwh}`}</GridItem>
            <GridItem gridRow="3" gridColumn="8 / span 3" bg="green.100">
              {`Equivalent car emssions: ${parseFloat(
                ele.tonnesMwh / 1.62
              ).toFixed(2)}`}
            </GridItem>
            {/* <GridItem>
              {`${ele.greenPowerCalculated[0]}`}
            </GridItem> */}
          </Grid>
        </div>
      ));
    }
    if (loading) {
      return (
        <Flex justifyContent="center">
          <CircularProgress
            isIndeterminate
            color="green.300"
            size={{ base: '60px', lg: '120px' }}
          />
        </Flex>
      );
    }
    return <> Sorry, there are no plans available</>;
  };
  useEffect(() => {
    fetchPlans(postcode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postcode]);

  // eslint-disable-next-line no-shadow
  const fetchPlans = async (postcode) => {
    const best = [];
    setLoading(true);
    const bestplans = query(
      collectionGroup(db, 'RESIDENTIAL'),
      where('data.geography.includedPostcodes', 'array-contains', `${postcode}`)
    );
    // console.log('BEST PLANS', bestplans);
    const querySnapshot = await getDocs(bestplans);
    querySnapshot.forEach((doc) => {
      best.push({ id: doc.id, ...doc.data() });
    });
    setBestPlans(best);
    // console.log('BEST', best);
    setTimeout(setLoading(false), 5000);
  };
  return (
    <>
      <PostcodeSearch postCode={postcode} />
      {renderList()}
    </>
  );
}
