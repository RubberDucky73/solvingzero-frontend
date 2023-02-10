import ReactCardCarousel from 'react-card-carousel';

import {
  Box,
  Stack,
  Image,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

import {
  CheckIcon,
  CheckCircleIcon,
  SmallCloseIcon,
  StarIcon,
  WarningIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';
import json from '../data/companyHeroData.json';

const determineGreenScaleItems = (green) => {
  let icon;
  let color;
  // eslint-disable-next-line default-case
  switch (green) {
    case 'Greenest':
      icon = StarIcon;
      color = 'green.400';
      break;
    case 'Green':
      icon = CheckIcon;
      color = 'green.400';
      break;
    case 'Polluter':
      icon = WarningTwoIcon;
      color = 'red.400';
      break;
  }
  return { icon, color };
};
const determinePriceScaleItems = (price) => {
  let icon;
  let color;
  // eslint-disable-next-line default-case
  switch (price) {
    case 'Great Prices':
      icon = StarIcon;
      color = 'green.400';
      break;
    case 'Good Prices':
      icon = CheckCircleIcon;
      color = 'green.400';
      break;
    case 'Average Prices':
      icon = WarningIcon;
      color = 'yellow.400';
      break;
    case 'Expensive':
      icon = WarningTwoIcon;
      color = 'red.400';
      break;
  }
  return { icon, color };
};

export default function HeroCards() {
  return (
    <Flex fontSize={{ base: 'sm' }}>
      <ReactCardCarousel
        spread="wide"
        disable_keydown="false"
        autoplay
        autoplay_speed={4000}
      >
        {json.companies.map(
          ({ id, name, image, green, price, app, aus }, idx) => (
            <Box
              maxW={{ base: '250px', md: '300px' }}
              minW={{ base: '1', md: '180px' }}
              w="full"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow="2xl"
              rounded="md"
              overflow="hidden"
              zIndex="-1"
            >
              <Stack textAlign="center" p={6} align="center">
                <Stack direction="row" align="center" justify="center">
                  <Image
                    src={`${image}`}
                    minH={{ base: '1', md: '45px' }}
                    minW={{ base: '1', md: '90px' }}
                    maxH={{ base: '40px' }}
                  />
                </Stack>
              </Stack>

              <Box
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={useColorModeValue('gray.50', 'gray.900')}
                px={5}
                py={{ base: '5', md: '6' }}
              >
                <List fontSize="16px" spacing={{ base: '4', md: '5' }}>
                  <ListItem>
                    <ListIcon
                      as={determineGreenScaleItems(green).icon}
                      color={determineGreenScaleItems(green).color}
                    />
                    {green}
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={determinePriceScaleItems(price).icon}
                      color={determinePriceScaleItems(price).color}
                    />
                    {price}
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={app ? CheckIcon : SmallCloseIcon}
                      color={app ? 'green.400' : 'red.400'}
                    />
                    {app ? 'Has a App' : 'No App'}
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={aus ? CheckIcon : SmallCloseIcon}
                      color={aus ? 'green.400' : 'red.400'}
                    />
                    {aus ? 'Aussie Owned' : 'Foreign Owned'}
                  </ListItem>
                </List>
              </Box>
            </Box>
          )
        )}
      </ReactCardCarousel>
    </Flex>
  );
}
