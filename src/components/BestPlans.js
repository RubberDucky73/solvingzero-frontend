import { useEffect, useState } from 'react';
import { collectionGroup, getDocs, where, query } from 'firebase/firestore';
import { Grid, GridItem } from '@chakra-ui/react';
import { db } from '../firebase/config';
import PostcodeSearch from './PostcodeSearch';

export default function BestPlans({ postcode }) {
  const [bestPlansState, setBestPlans] = useState(null);
  const [loading, setLoading] = useState(true);

  const renderList = () => {
    if (bestPlansState?.length && !loading) {
      return bestPlansState?.map((ele, idx) => (
        <div key={ele.id}>
          {console.log(
            'ELE',
            'IDX',
            idx,
            ele.data.electricityContract.tariffPeriod[0]
          )}
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
            {/* If greenPowerCalculated has values in it grab them
            If hasApp is true display Has an App
            If Australian is truen display Aussie */}
            <GridItem colSpan={1} bg="red.200">
              {`${ele.data.brandName} `}
            </GridItem>
            <GridItem colSpan={2} bg="blue.300">
              {ele.data.displayName}
            </GridItem>
            <GridItem gridRow="2">{`Has an App: ${ele.hasApp}`}</GridItem>
            <GridItem gridRow="3">{`Aussie: ${ele.australian}`}</GridItem>
            <GridItem colSpan={2} bg="blue.300">
              {`${ele.data.electricityContract.fees[0]}`}
            </GridItem>
            <GridItem gridRow="4">{`Plan ID: ${ele.data.planId}`}</GridItem>
            <GridItem colSpan={2} bg="green.300">
              {`Daily supply cost: ${ele.data.electricityContract.tariffPeriod[0].dailySupplyCharges}`}
            </GridItem>
            <GridItem colSpan={2} bg="yellow.300">
              {`Unit cost: ${ele.data.electricityContract.tariffPeriod[0].singleRate.rates?.[0].unitPrice}`}
            </GridItem>
            <GridItem>{` $${Math.round(ele.yearlyPrice / 100)}`}</GridItem>
            <GridItem colSpan={2}>{` Green Rating: ${(
              Math.round(ele.greenRating * 2) / 2
            ).toFixed(1)}`}</GridItem>
            <GridItem>{ele.tonnesMwh}</GridItem>
            {/* <GridItem>
              {`${ele.greenPowerCalculated[0]}`}
            </GridItem> */}
          </Grid>
        </div>
      ));
    }
    if (loading) {
      return <> Calculating...</>;
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
