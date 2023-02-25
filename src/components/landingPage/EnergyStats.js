import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py="5"
      shadow="lg"
      color="green.700"
      bgGradient="none"
      rounded="lg"
      mx="5%"
      maxW="7xl"
    >
      <StatLabel fontWeight="medium" isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize="2xl" fontWeight="medium">
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign="center"
        fontSize="4xl"
        py={10}
        fontWeight="bold"
        color="green.800"
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title="We analyse" stat="20,000+ energy plans" />
        <StatsCard title="From" stat="50+ different providers" />
        <StatsCard title="For" stat="1000's of postcodes" />
      </SimpleGrid>
    </Box>
  );
}
