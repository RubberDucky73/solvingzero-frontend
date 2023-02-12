/** @format */

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Box, Button, Input, Flex, FormControl } from '@chakra-ui/react';

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';

import jsonData from '../data/energyCompanies.json';

const { companies } = jsonData;

export default function PostcodeSearch({ sendTo, postCode }) {
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
    <Box>
      <Flex maxW="419px" mt="20px" mb="10px">
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
              borderColor="gray.300"
              boxShadow="md"
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
      <Input
        value={postCodeState}
        type="number"
        placeholder="Postcode"
        onChange={(e) => handleChangepostcode(e)}
        maxW="200px"
        mt={{ base: '25px', md: '25px' }}
        size={{ base: 'md', md: 'md', lg: 'lg' }}
        bg="white"
        color="green.700"
        fontWeight="semibold"
        borderColor="gray.300"
        boxShadow="md"
        _placeholder={{
          opacity: 1,
          color: 'green.700',
        }}
        _hover={{
          borderColor: 'gray.400',
        }}
      />
      {sendTo ? (
        <Link
          href={{
            pathname: '/green-energy',
            query: { postcode: postCodeState },
          }}
          legacyBehavior
        >
          <Button
            type="primary"
            htmlType="submit"
            size={{ base: 'md', md: 'md', lg: 'lg' }}
            mt={{ base: '35px', md: '20px', lg: '10px' }}
            ml={{ base: '0px', md: '20px', lg: '25px' }}
            mb={{ base: '0px', md: '24px', lg: '10px' }}
            fontWeight="700"
            px={6}
            border="2px"
            borderColor="green.400"
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
          px={6}
          ml="25px"
          bg="green.400"
          color="white"
          _hover={{ bg: 'green.300' }}
          type="primary"
          htmlType="submit"
          onClick={() => handleChangePostCode()}
        >
          Calculate prices
        </Button>
      )}
    </Box>
  );
}
