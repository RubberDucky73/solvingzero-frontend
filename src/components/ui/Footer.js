import {
  Box,
  chakra,
  Container,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const SocialButton = ({ children, label, href }) => (
  <chakra.button
    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    rounded="full"
    w={8}
    h={8}
    cursor="pointer"
    as="a"
    href={href}
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    transition="background 0.3s ease"
    _hover={{
      bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
    }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </chakra.button>
);

const ListHeader = ({ children }) => (
  <Text fontWeight="500" fontSize="lg" mb={2}>
    {children}
  </Text>
);

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('green.800', 'gray.200')}
      mt={{ base: '50px', md: '100px' }}
      pb={{ base: '25px' }}
    >
      <Container as={Stack} maxW="7xl" py={8}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={7}
        >
          <Stack spacing={6}>
            <Box>
              {' '}
              <NextLink href="/" passHref>
                <Image
                  src="/solvingzero-logo.png"
                  alt="SolvingZero logo"
                  minH={{ base: '20px', md: '35px' }}
                  minW={{ base: '40px', md: '70px' }}
                  maxH={{ base: '40px' }}
                />
              </NextLink>
            </Box>
            <Text fontSize="sm">© 2023 SolvingZero. All rights reserved</Text>
            <Stack direction="row" spacing={6}>
              <SocialButton
                label="Twitter"
                href="https://twitter.com/SolvingZero"
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label="Linkedin"
                href="https://www.linkedin.com/company/solving-zero"
              >
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href="#">About us</Link>
            <Link href="#">Contact us</Link>
            <Link href="#">Careers</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Legal</Link>
            <Link href="#">Privacy Policy</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction="row">
              <Input
                placeholder="Your email address"
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg="green.400"
                color="white"
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<MdMail />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
