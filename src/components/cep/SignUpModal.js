import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
// import PostcodeSearch from './PostcodeSearch';

export default function SignUpModal({
  companyFrom,
  postCode,
  planId,
  companyChosen,
  price,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dbInstance = collection(db, 'users');
  const initialRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyFrom,
    planId,
    price,
    postCode,
    companyChosen,
  });

  const handleInputChange = (e, type) => {
    setUserInfo((user) => ({
      ...user,
      [type]: e.target.value,
    }));
  };

  const saveUser = () => {
    setLoading(true);
    addDoc(dbInstance, {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      companyFrom: userInfo.companyFrom,
      planId: userInfo.planId,
      price: userInfo.price,
      postCode: userInfo.postCode,
      companyChosen: userInfo.companyChosen,
    }).then(() => {
      setLoading(false);
      setUserInfo({
        firstName: '',
        lastName: '',
        email: '',
        companyFrom: '',
        planId: '',
        price: '',
        postCode: '',
        companyChosen: '',
      });
    });
  };
  return (
    <>
      <Button
        onClick={onOpen}
        minW="100%"
        border="2px"
        borderColor="blue.300"
        bg="blue.300"
        color="white"
        fontWeight="bold"
        boxShadow="md"
        mb={{ base: '40px', md: '0px' }}
        mt={{ base: '45px', md: '10px' }}
        _hover={{
          color: 'blue.500',
          bg: 'white',
          border: '2px',
          borderColor: 'blue.500',
        }}
      >
        Choose Plan
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent mx={{ base: '10px', md: '0px' }}>
          <ModalHeader maxW="90%" pb="3px">
            Your basic info is only used to confirm switching plans
          </ModalHeader>
          <Text pl="25px" color="gray.400">
            No spam, we swear
          </Text>
          <ModalCloseButton />
          <ModalBody pb={6} pt={7}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                value={userInfo.firstName}
                onChange={(e) => handleInputChange(e, 'firstName')}
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                value={userInfo.lastName}
                onChange={(e) => handleInputChange(e, 'lastName')}
                placeholder="Last name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                value={userInfo.email}
                onChange={(e) => handleInputChange(e, 'email')}
                placeholder="Email address"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              // disabled={loading || userInfo.email === ''}
              isLoading={loading}
              onClick={saveUser}
              size="md"
              fontWeight="bold"
              px={{ base: '5', md: '6' }}
              bg="green.400"
              color="white"
              _hover={{
                color: 'green.500',
                bg: 'white',
                border: '2px',
                borderColor: 'green.500',
              }}
              mr={3}
            >
              Continue
            </Button>
            <Button variant="ghost" color="gray.500" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
