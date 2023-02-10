/** @format */

import { Box, Button, Input, Select } from '@chakra-ui/react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import jsonData from '../data/energyCompanies.json';

// const { companies } = jsonData;

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
      <Select
        maxW="419"
        placeholder="Choose your current provider"
        size={{ base: 'md', md: 'md', lg: 'lg' }}
        _placeholder={{ opacity: 1, color: 'gray.700' }}
        mt="20px"
        mb="10px"
        fontWeight="semibold"
        bg="white"
        color="green.700"
        boxShadow="md"
        // _hover={{
        //   color: 'white',
        //   bg: 'green.400',
        //   border: '2px',
        //   borderColor: 'white',
        // }}
        // _focus={{
        //   borderColor: 'green.400',
        //   border: '3px',
        // }}
      >
        <option style={{ color: 'red' }} value="option1">
          Option 1
        </option>
        <option>Option 2</option>
      </Select>
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
        boxShadow="md"
        _placeholder={{
          opacity: 1,
          color: 'green.700',
        }}
        // _hover={{
        //   color: 'white',
        //   bg: 'green.400',
        //   border: '2px',
        //   borderColor: 'green.400',
        // }}
        // _focus={{
        //   color: 'green.600',
        //   bg: 'white',
        //   borderColor: 'green.400',
        //   border: '3px',
        // }}
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
