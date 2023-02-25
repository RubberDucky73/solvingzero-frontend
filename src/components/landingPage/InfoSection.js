// import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { TbMathSymbols } from 'react-icons/tb';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { AiOutlineDollar } from 'react-icons/ai';

const Feature = ({ title, text, icon }) => (
  <Stack mb={{ base: '50px' }}>
    <Flex
      w={16}
      h={16}
      align="center"
      justify="center"
      color="white"
      rounded="full"
      bg="green.700"
      mb={{ base: '5px' }}
    >
      {icon}
    </Flex>
    <Text fontWeight={600}>{title}</Text>
    <Text color="gray.600">{text}</Text>
  </Stack>
);

export default function SimpleThreeColumns() {
  return (
    <Box mx="30px" px="30px">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={TbMathSymbols} w={10} h={10} />}
          title="Expert Advice"
          text="Our objective data and research has been carefully calculated to provide straight to the point analysis of every energy plan in Australia. No sales spam or phone calls."
        />
        <Feature
          icon={<Icon as={VscWorkspaceTrusted} w={10} h={10} />}
          title="Trustworthy"
          text="We are 100% independent, no shady business or backroom deals, unlike some other sites. Our opinions are based on our endless research and are without bias, just the facts."
        />
        <Feature
          icon={<Icon as={AiOutlineDollar} w={10} h={10} />}
          title="How we make money"
          text="All of our information is free, helping you find affordable green energy is our priority. We do accept compensation from our partners but this in no way affects our recommendations or advice."
        />
      </SimpleGrid>
    </Box>
  );
}
