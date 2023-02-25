/** @format */

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  Box,
  Button,
  Input,
  Flex,
  FormControl,
  GridItem,
  Grid,
} from '@chakra-ui/react';

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';

import jsonData from '../data/energyCompanies.json';

const { companies } = jsonData;

export default function PostcodeSearch({ sendTo, postCode }) {
  console.log('SEND TO ', sendTo);
  const [postCodeState, setPostCode] = useState(postCode);
  // const [name, setName] = useState();

  const router = useRouter();

  function handleChangePostCode() {
    router.replace(
      {
        query: {
          postcode: postCodeState,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  const handleChangepostcode = (e) => {
    setPostCode(e.target.value);
  };

  return (
    <Grid>
      <GridItem GridRow="1">
        <Flex maxW="419px" mt="35px" mb="10px">
          <FormControl
            w="60"
            bg="white"
            maxW="419px"
            minW={{ base: '325px', md: '325px', lg: '420px' }}
          >
            <AutoComplete openOnFocus maxW="419px">
              <AutoCompleteInput
                placeholder="Search for your current provider"
                _placeholder={{ opacity: 1, color: 'green.700' }}
                size={{ base: 'md', md: 'md', lg: 'lg' }}
                maxW="419px"
                bg="white"
                color="green.700"
                fontWeight="semibold"
                borderColor="gray.50"
                boxShadow="lg"
                _hover={{
                  borderColor: 'gray.400',
                }}
              />
              <AutoCompleteList maxW="419px" minW="415px" mt="0">
                {companies.map((data) => (
                  <AutoCompleteItem
                    key={`option-${data.id}`}
                    value={data.display}
                    textTransform="capitalize"
                  >
                    {data.display}
                  </AutoCompleteItem>
                ))}
              </AutoCompleteList>
            </AutoComplete>
          </FormControl>
        </Flex>
      </GridItem>
      <Grid gridRow="2" maxW="max-content">
        <GridItem gridRow="2" maxW="max-content" gridColumn="1">
          <Input
            value={postCodeState}
            type="number"
            placeholder="Postcode"
            onChange={(e) => handleChangepostcode(e)}
            maxW="200px"
            mt={{ base: '25px', md: '30px' }}
            size={{ base: 'md', md: 'md', lg: 'lg' }}
            bg="white"
            color="green.700"
            fontWeight="semibold"
            borderColor="gray.50"
            boxShadow="lg"
            _placeholder={{
              opacity: 1,
              color: 'green.700',
            }}
            _hover={{
              borderColor: 'gray.400',
            }}
          />
        </GridItem>
        <GridItem display="grid" gridRow="2" gridColumn="2" maxW="max-contnet">
          {sendTo ? (
            <Link
              href={{
                pathname: '/compare-electricity-providers',
                query: { postcode: postCodeState },
              }}
              legacyBehavior
            >
              <Button
                onClick={() => console.log('asdasdasd')}
                type="primary"
                htmlType="submit"
                maxW="200px"
                size={{ base: 'md', lg: 'lg' }}
                mt={{ base: '25px', md: '30px', lg: '10px' }}
                ml={{ base: '15px', md: '30px', lg: '0px' }}
                mb={{ base: '0px', md: '0px', lg: '0px' }}
                fontWeight="700"
                px={{ base: '5', md: '5' }}
                border="2px"
                borderColor="green.500"
                bg="green.500"
                color="white"
                boxShadow="md"
                _hover={{
                  color: 'green.500',
                  bg: 'white',
                  border: '2px',
                  borderColor: 'green.500',
                }}
                _focus={{
                  borderColor: 'green.500',
                  border: '1px',
                }}
              >
                Calculate pricing
              </Button>
            </Link>
          ) : (
            <Button
              size="md"
              fontWeight="bold"
              px={{ base: '5', md: '6' }}
              ml={{ base: '10px', md: '20px' }}
              mt={{ base: '25px', md: '35px' }}
              bg="green.400"
              color="white"
              _hover={{
                color: 'green.500',
                bg: 'white',
                border: '2px',
                borderColor: 'green.500',
              }}
              type="primary"
              htmlType="submit"
              onClick={() => handleChangePostCode()}
            >
              Calculate prices
            </Button>
          )}
        </GridItem>
      </Grid>
    </Grid>
  );
}
