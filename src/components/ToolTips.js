import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Text,
  Box,
  Divider,
} from '@chakra-ui/react';

export default function ToolTips() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        color="blue.500"
        textDecoration="underline"
        bg="gray.100"
        onClick={onOpen}
        shadow="lg"
        py="25px"
        px="30px"
        _hover={{
          bg: 'gray.50',
          color: 'blue.400',
        }}
      >
        Learn more about the data
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Explaining the data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading as="h2" fontSize="lg">
                Pricing
              </Heading>
              <Text>
                All pricing is based on a home using 4000kwh a year, which is
                roughly 11kwh a day. The price of the plan is displayed as a
                yearly cost.
              </Text>
              <br />
              <Text>
                <strong>Daily charge</strong> is the cost charged to you
                everyday regardless if you use energy or not.
              </Text>
              <br />
              <Text>
                <strong>Price per Kwh</strong> is the price charged for one
                single unit of energy. For example a standard 100 watt light
                bulb that is used for ten hours will consume one Kwh.
              </Text>
              <br />
              <Divider orientation="horizontal" />
              <br />
              <Heading as="h2" fontSize="lg">
                Emissions
              </Heading>
              <Text>
                For emissions we calculate where the energy plan primarily
                purchase its energy from (coal, gas, wind, solar, etc) and then
                convert those emissions into how many passenger cars driving for
                a full year it would equate to.
              </Text>
              <br />
              <Text>
                <strong>Tonnes of CO2</strong> this is the raw amount of CO2
                that this company emit/offsets per customer.
              </Text>
              <br />
              <Text>
                <strong>Company Green Rating</strong> based on a list of factors
                this is the overall green rating to this company.
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="green.500"
              color="white"
              _hover={{
                bg: 'white',
                color: 'green.500',
                border: '1px',
                borderColor: 'green.500',
              }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
// return (
//   <Grid mt="35px" px="15px" py="15px" bg="white" rounded="lg" shadow="lg">
//     <GridItem
//       gridColumn="1 / span 5"
//       justifySelf="start"
//       minW="max-content"
//       // minH="100"
//     >
//       <Text
//         color="blue.500"
//         textDecoration="underline"
//         my="10px"
//         fontSize="lg"
//         fontWeight="semibold"
//         _hover={{
//           color: 'blue.300',
//         }}
//       >
//         Quick help guide
//       </Text>
//     </GridItem>
// {
/* <GridItem gridRow="2">
        <Button
          bgGradient="linear(to-t, yellow.200, yellow.100)"
          fontWeight="semibold"
          rounded="md"
          shadow="lg"
          px="45px"
          mx="5px"
          py="15px"
          maxW="130px"
          _hover={{
            bg: 'yellow.300',
          }}
        >
          Cost
        </Button>
      </GridItem>
      <GridItem gridRow="2">
        <Button
          bgGradient="linear(to-t, green.200, green.100)"
          fontWeight="semibold"
          rounded="md"
          shadow="lg"
          px="45px"
          mx="15px"
          py="15px"
          maxW="130px"
        >
          Emissions
        </Button>
      </GridItem>
      <GridItem gridRow="2">
        <Button
          bgGradient="linear(to-t, gray.200, gray.100)"
          fontWeight="semibold"
          rounded="md"
          shadow="lg"
          px="40px"
          mx="5px"
          py="15px"
          maxW="130px"
        >
          Other info
        </Button>
      </GridItem> */
// }
//     </Grid>
//   );
// }
