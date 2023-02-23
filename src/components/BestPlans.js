import { CheckIcon, SmallCloseIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { collectionGroup, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import jsonData from '../data/companyHeroData.json';
import { db } from '../firebase/config';
import { ratesFormat, RenderIf } from '../utils/utils';
import PostcodeSearch from './PostcodeSearch';

// Aussie and HasApp display the relative data about Aussie owned and Apps
function Aussie({ aussie }) {
  const [aussieOwned, setAussieOwned] = useState('');

  useEffect(() => {
    if (aussie) {
      setAussieOwned('Aussie Owned');
    } else {
      setAussieOwned('Foregin Owned');
    }
  }, [aussie]);

  if (aussieOwned === 'Aussie Owned') {
    return (
      <Box fontWeight="semibold" color="green.600">
        <SunIcon /> <spacer />
        {aussieOwned}
      </Box>
    );
  }
  return (
    <Box fontWeight="semibold" color="red.500">
      <SmallCloseIcon />
      {aussieOwned}
    </Box>
  );
}

function HasApp({ ownApp }) {
  const [hasApp, setHasApp] = useState('');

  useEffect(() => {
    if (ownApp) {
      setHasApp('Has an App');
    } else {
      setHasApp('No App');
    }
  }, []);

  if (hasApp === 'Has an App') {
    return (
      <Box fontWeight="semibold" color="green.600">
        <CheckIcon /> <spacer />
        {hasApp}
      </Box>
    );
  }
  return (
    <Box fontWeight="semibold" color="red.500">
      <SmallCloseIcon />
      {hasApp}
    </Box>
  );
}

// This function appends the emit/offset strings and formats the emissions number/percentage
function EmissionsTotal(ele) {
  // eslint-disable-next-line react/destructuring-assignment
  const prefix = ele.ele > 0 ? 'Emit' : 'Offset';
  // eslint-disable-next-line react/destructuring-assignment
  const total = parseFloat(ele.ele / 1.62).toFixed(2);
  if (total < 1 && total > -1) {
    return (
      <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} py="15px" px="30px">
        {`${prefix} ${total * 100}% of a car`}
      </Heading>
    );
  }
  return (
    <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} py="15px" px="30px">
      {`${prefix} ${total * -1} cars`}
    </Heading>
  );
}

// FeesButton and FeesList render the fees accordian for each plan
function FeesButton({ plans }) {
  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <Grid>
      <GridItem justifySelf="center">
        <Button
          {...buttonProps}
          bg="none"
          _hover={{
            color: 'gray.500',
          }}
          _focus={{
            bg: 'none',
          }}
        >
          View Fees
        </Button>
      </GridItem>
      <Text {...disclosureProps} mt={4}>
        <Divider orientation="horizontal" />
        <Box flexWrap="wrap" justifyContent="space-evenly">
          <FeesList plans={plans} />
        </Box>
      </Text>
    </Grid>
  );
}

const FeesList = (fees) => {
  if (fees) {
    return fees?.plans?.map((e, idx) => (
      <Grid minW="250px" mb="30px" mt="20px" gridRowGap="5px">
        <GridItem>
          <Heading
            color="green.900"
            as="h3"
            fontSize="md"
          >{`${e?.type}`}</Heading>
        </GridItem>
        <GridItem fontWeight="medium">{`$${(
          Math.round(100 * e?.amount) / 100
        ).toFixed(2)}`}</GridItem>
        <GridItem>
          <RenderIf value={e.rate}>
            {(rate) => <Text>{`${ratesFormat(rate)}`}</Text>}
          </RenderIf>
        </GridItem>
        <GridItem>{`${e?.description}`}</GridItem>
        <Divider orientation="horizontal" />
        {/* <GridItem>{`Term ${e?.term}`}</GridItem> */}
      </Grid>
    ));
  }
  return null;
};

export default function BestPlans({ postcode }) {
  const [bestPlansState, setBestPlans] = useState(null);

  const [loading, setLoading] = useState(true);
  const renderList = () => {
    if (bestPlansState?.length && !loading) {
      return bestPlansState?.map((ele) => {
        const filterObj = jsonData.companies.filter(
          (item) => item.name === ele.data.brandName
        );

        return (
          <div key={ele.id}>
            <Grid
              gridTemplateColumns={{
                base: '1',
                md: 'repeat(12, minmax(50px, 1fr));',
              }}
              gap={4}
              bg="white"
              border="2px"
              borderColor="gray.200"
              shadow="md"
              mt="20px"
              py="30px"
              px="30px"
              rounded="2xl"
            >
              {/* The company Logo */}
              <Grid gridRow="1" columnGap={{ md: '10px' }}>
                <GridItem
                  gridColumn="1"
                  gridRow="1 / span 2"
                  minH="50px"
                  minW="150px"
                >
                  <Image
                    src={`${filterObj?.[0]?.image}`}
                    minH={{ base: '1', md: '45px' }}
                    minW={{ base: '1', md: '90px' }}
                    maxH={{ base: '40px' }}
                  />
                </GridItem>
                {/* Name of the company */}
                <GridItem
                  gridColumn={{ base: '1', md: '3 / span 1' }}
                  gridRow={{ base: '4', md: '1 / span 2' }}
                  minW="max-content"
                  alignSelf="center"
                  fontWeight="semibold"
                  fontSize="xl"
                >
                  {`${ele.data.brandName} `}
                </GridItem>
                {/* Name of the plan */}
                <GridItem
                  minW="max-content"
                  gridColumn={{ base: '1', md: '5 / span 1' }}
                  gridRow={{ base: '5', md: '1 / span 2' }}
                  alignSelf="center"
                  color="gray.500"
                >
                  {`${ele.data.displayName} `}
                  {`- ${ele.data.planId}`}
                </GridItem>
              </Grid>
              {/* Extra plan Info */}
              <Grid
                gridTemplateRows="30px 30px"
                gridColumn={{ base: '1', md: '1 / span 2' }}
              >
                <GridItem maxH="max-content">
                  <HasApp gridRow="1" pb="30px" ownApp={ele.hasApp} />
                </GridItem>
                <GridItem maxH="max-content">
                  <Aussie gridRow="2" aussie={ele.australian} />
                </GridItem>
              </Grid>

              {/* Pricing Below */}
              <Grid
                minW="max-content"
                gridColumnStart={{ base: '1', md: '3' }}
                gridColumnEnd={{ base: '1', md: '8' }}
                gridrow={{ base: '3', md: '3' }}
                bgGradient="linear(to-t, yellow.200, yellow.100)"
                shadow="lg"
                rounded="lg"
              >
                {/* The yearly price */}
                <GridItem>
                  <Heading
                    as="h2"
                    fontSize={{ base: 'lg', md: '2xl' }}
                    py="15px"
                    px="30px"
                  >
                    {`$${Math.round(ele.yearlyPrice / 100)} per year`}
                  </Heading>
                </GridItem>
                {/* Daily supply cost */}
                <GridItem px="30px">
                  {`Daily supply cost: ${
                    Math.round(
                      100 *
                        ele.data.electricityContract.tariffPeriod[0]
                          .dailySupplyCharges
                    ) / 100
                  }¢`}
                </GridItem>
                {/* Unit of kwh cost */}
                <GridItem px="30px" pb="30px">
                  {`Unit cost: ${(
                    Math.round(
                      100 *
                        ele.data.electricityContract.tariffPeriod[0].singleRate
                          .rates?.[0].unitPrice
                    ) / 100
                  ).toFixed(2)}¢`}
                </GridItem>
              </Grid>

              {/* Green Rating Below */}
              <Grid
                minW="max-content"
                gridColumnStart={{ base: '1', md: '8' }}
                gridColumnEnd={{ base: '1', md: '13' }}
                gridrow={{ base: '4', md: '3' }}
                bgGradient="linear(to-t, green.200, green.100)"
                shadow="lg"
                rounded="lg"
              >
                <GridItem>
                  {/* <Heading
                  as="h2"
                  fontSize={{ base: 'lg', md: '3xl' }}
                  py="15px"
                  px="30px"
                > */}
                  <EmissionsTotal ele={ele.tonnesMwh} />
                  {/* </Heading> */}
                </GridItem>
                <GridItem px="30px">{`Comapny Green Rating: ${(
                  Math.round(ele.greenRating * 2) / 2
                ).toFixed(1)}`}</GridItem>
                <GridItem
                  px="30px"
                  pb="30px"
                >{`Tonnes of carbon per MWh: ${ele.tonnesMwh}`}</GridItem>
              </Grid>

              {/* <GridItem>
              {`${ele.greenPowerCalculated[0]}`}
            </GridItem> */}
              <Grid
                gridRow={{ base: '6', md: '4' }}
                gridColumnStart={{ base: '1', md: '1' }}
                gridColumnEnd={{ base: '1', md: '13' }}
                // display="block"
              >
                <GridItem justifyContent="center">
                  <FeesButton plans={ele.data.electricityContract.fees} />
                </GridItem>
              </Grid>
            </Grid>
          </div>
        );
      });
    }
    if (loading) {
      return (
        <Flex justifyContent="center">
          <CircularProgress
            isIndeterminate
            color="green.300"
            size={{ base: '60px', lg: '120px' }}
            mt="100px"
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
    const querySnapshot = await getDocs(bestplans);
    querySnapshot.forEach((doc) => {
      best.push({ id: doc.id, ...doc.data() });
    });
    setBestPlans(best);
    setTimeout(setLoading(false), 5000);
  };
  return (
    <div>
      <PostcodeSearch postCode={postcode} />
      {renderList()}
    </div>
  );
}
