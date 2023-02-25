import { Box, Button, Heading } from '@chakra-ui/react';

export default function CtaBottom() {
  return (
    <div>
      <Box textAlign="center" pb={{ base: '0px', md: '{10}' }} px={6}>
        <Heading as="h2" size="xl" mt={2} mb={2} color="green.800">
          Make the biggest impact by saving more
        </Heading>
        <Button
          as="a"
          href="../../compare-electricity-providers"
          display="inline-flex"
          fontSize="lg"
          fontWeight={800}
          color="green.600"
          bg="white"
          mt="30px"
          py="30px"
          px="30px"
          border="2px"
          borderColor="green.500"
          _hover={{
            color: 'white',
            bg: 'green.500',
            border: '2px',
            borderColor: 'green.500',
          }}
          _focus={{
            border: '2px',
            borderColor: 'green.500',
          }}
        >
          Start Saving
        </Button>
      </Box>
    </div>
  );
}
