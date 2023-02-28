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

import { MdPhonelinkErase, MdSmartphone } from 'react-icons/md';
import { GiAustralia } from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';
// import { QuestionOutlineIcon } from '@chakra-ui/icons';

import jsonData from '../data/companyHeroData.json';
import { db } from '../firebase/config';
import { ratesFormat, RenderIf } from '../utils/utils';
import PostcodeSearch from './PostcodeSearch';
import SignUpModal from './SignUpModal';
import ToolTips from './ToolTips';

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
      <Flex fontWeight="semibold" color="green.600">
        <Grid>
          <GridItem gridRow="1" maxW="wrap" mr="2px" alignSelf="center">
            <GiAustralia />
          </GridItem>
          <GridItem gridRow="1" maxW="max-content" placeSelf="center">
            {aussieOwned}
          </GridItem>
        </Grid>
      </Flex>
    );
  }
  return (
    <Flex fontWeight="semibold" color="red.500">
      <Grid>
        <GridItem gridRow="1" maxW="wrap" mr="2px" alignSelf="center">
          <BiWorld />
        </GridItem>
        <GridItem gridRow="1" maxW="max-content" placeSelf="center">
          {aussieOwned}
        </GridItem>
      </Grid>
    </Flex>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasApp === 'Has an App') {
    return (
      <Flex fontWeight="semibold" color="green.600">
        <Grid>
          <GridItem gridRow="1" maxW="wrap" mr="2px" alignSelf="center">
            <MdSmartphone />
          </GridItem>
          <GridItem gridRow="1" maxW="max-content" placeSelf="center">
            {hasApp}
          </GridItem>
        </Grid>
      </Flex>
    );
  }
  return (
    <Flex fontWeight="semibold" color="red.500">
      <Grid>
        <GridItem gridRow="1" maxW="wrap" mr="2px" alignSelf="center">
          <MdPhonelinkErase />
        </GridItem>
        <GridItem gridRow="1" maxW="max-content" placeSelf="center">
          {hasApp}
        </GridItem>
      </Grid>
    </Flex>
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
    return fees?.plans?.map((e) => (
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
          <Grid key={ele.id}>
            <Grid
              gridTemplateColumns={{
                base: '1',
                md: 'repeat(12, minmax(50px, 1fr));',
              }}
              gap={3}
              bg="white"
              border="2px"
              borderColor="gray.50"
              shadow="md"
              mt={{ base: '50px', md: '20px' }}
              py="20px"
              px={{ base: '20px', md: '20px' }}
              rounded="2xl"
            >
              {/* The company Logo */}
              <Grid
                gridRow="1 / span 2"
                columnGap={{ base: '0px', md: '10px' }}
              >
                <GridItem
                  gridColumn="1"
                  gridRow="1 / span 2"
                  minH="50px"
                  minW="110px"
                  justifySelf={{ base: 'center' }}
                  placeSelf="center"
                  mb={{ base: '20px', md: '0px' }}
                >
                  <Image
                    src={`${filterObj?.[0]?.image}`}
                    minH={{ base: '5', md: '60px' }}
                    minW={{ base: '5', md: '110px' }}
                    maxH={{ base: '55px' }}
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
                  ml={{ base: '0px', md: '17px' }}
                >
                  {`${ele.data.brandName} `}
                </GridItem>
                {/* Name of the plan */}
                <GridItem
                  minW="max-content"
                  gridColumn={{ base: '1', md: '5 / span 1' }}
                  gridRow={{ base: '5', md: '1 / span 2' }}
                  alignSelf="center"
                  mt="5px"
                  color="gray.500"
                >
                  {`${ele.data.displayName} `}
                </GridItem>
                {/* Plan ID */}
                <GridItem
                  gridColumn={{ base: '1', md: '6 / span 1' }}
                  gridRow={{ base: '6', md: '1 / span 2' }}
                  alignSelf="center"
                  mt="5px"
                  color="gray.500"
                >{`${ele.data.planId}`}</GridItem>
              </Grid>
              {/* Extra plan Info */}
              <Grid
                gridTemplateRows="35px 35px"
                gridColumn={{ base: '1', md: '1 / span 2' }}
              >
                <GridItem maxH="max-content" pb={{ base: '30px', md: '50px' }}>
                  <HasApp gridRow="1" ownApp={ele.hasApp} />
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
                shadow="2xl"
                rounded="lg"
                mr={{ md: '10px' }}
                minH="150px"
              >
                {/* The yearly price */}
                <Grid
                  gridRow="1"
                  gridColumn="1"
                  py="15px"
                  px="30px"
                  gridTemplateColumns="min-content max-content"
                >
                  <GridItem gridRow="1">
                    <Heading as="h2" fontSize={{ base: 'lg', md: '3xl' }}>
                      {`$${Math.round(ele.yearlyPrice / 100)}`}
                    </Heading>
                  </GridItem>
                  <GridItem gridRow="1" alignSelf="start" mt="10px" ml="10px">
                    <Text fontSize="md">/ year</Text>
                  </GridItem>
                </Grid>
                {/* The Daily Supply Charge */}
                <GridItem
                  gridColumn="1"
                  px="30px"
                  pb="5px"
                  fontWeight="semibold"
                  maxH="15px"
                >
                  {`Daily charge: ${
                    Math.round(
                      100 *
                        ele.data.electricityContract.tariffPeriod[0]
                          .dailySupplyCharges
                    ) / 100
                  }¢`}
                </GridItem>
                {/* Unit of kwh cost */}
                <GridItem
                  gridColumn="1"
                  px="30px"
                  pb="5px"
                  fontWeight="semibold"
                >
                  {`Price per Kwh: ${(
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
                shadow="2xl"
                rounded="lg"
                mt={{ base: '10px', md: '0px' }}
                minH="150px"
              >
                <GridItem>
                  <EmissionsTotal ele={ele.tonnesMwh} />
                </GridItem>
                <GridItem
                  px="30px"
                  pb="5px"
                  fontWeight="semibold"
                  maxH="15px"
                >{`Tonnes of CO2: ${ele.tonnesMwh}`}</GridItem>
                <GridItem
                  px="30px"
                  pb="5px"
                  fontWeight="semibold"
                >{`Comapny Green Rating: ${(
                  Math.round(ele.greenRating * 2) / 2
                ).toFixed(1)}`}</GridItem>
              </Grid>
              <GridItem
                gridRow={{ base: '6', md: '4' }}
                gridColumn={{ base: '1', md: '1 / span 2' }}
                mb={{ base: '5px', md: '10px' }}
                mt="0px"
              >
                <Flex justifyContent={{ base: 'center' }}>
                  <SignUpModal />
                </Flex>
              </GridItem>

              {/* <GridItem>
              {`${ele.greenPowerCalculated[0]}`}
            </GridItem> */}
              <Grid
                gridRow={{ base: '7', md: '4' }}
                gridColumnStart={{ base: '1', md: '1' }}
                gridColumnEnd={{ base: '1', md: '13' }}
                mt={{ md: '20px' }}
              >
                <GridItem justifyContent="center">
                  <FeesButton plans={ele.data.electricityContract.fees} />
                </GridItem>
              </Grid>
            </Grid>
          </Grid>
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
    return (
      <Heading as="h3" fontSize="md" fontWeight="semibold" mt="45px">
        Hello, either you need to enter your criteria above or there are no
        plans available for your search
      </Heading>
    );
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
    <Grid>
      <Grid
        gridTemplateColumns={{ md: '1fr 1fr' }}
        mb={{ base: '10px', md: '30px', lg: '40px' }}
      >
        <GridItem minW="min-content" pl={{ base: '5', md: '50px' }} mx="0">
          <PostcodeSearch postCode={postcode} />
        </GridItem>
        <GridItem
          gridRow="1"
          gridColumn={{ base: '1', md: '2' }}
          placeSelf="center"
          ml={{ base: '25px', md: '50px' }}
          mt={{ base: '20px', md: '30px' }}
          mr={{ md: '15%', lg: '10%' }}
        >
          <ToolTips />
          <Text mt="30px" mr="2%">
            All the data is based on a home using 11Kwh a day (4000 Kwh/year).
            If you'd like an option to customise and filter this data, let me
            know!
          </Text>
        </GridItem>
      </Grid>
      <GridItem gridColumn="1" mx={{ base: '10px', md: '50px', lg: '5%' }}>
        {renderList()}
      </GridItem>
    </Grid>
  );
}
