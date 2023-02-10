import NextLink from 'next/link';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        // bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
        // bg="#f7fff9"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={7} h={7} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex justify={{ base: 'center', md: 'start' }}>
          <NextLink href="/" passHref>
            <Link>
              <Image
                src="/solvingzero-logo.png"
                alt="SolvingZero logo"
                align={useBreakpointValue({ base: 'center', md: 'left' })}
                minH={{ base: '1', md: '45px' }}
                minW={{ base: '1', md: '90px' }}
                maxH={{ base: '50px' }}
              />
            </Link>
          </NextLink>
        </Flex>

        <Stack
          flex={{ base: 1, md: 18 }}
          justify="flex-end"
          direction="row"
          spacing={4}
        >
          <Flex
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            ml={10}
          >
            <DesktopNav />
          </Flex>
          <Button
            as="a"
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="sm"
            fontWeight={700}
            color="green.600"
            bg="white"
            border="2px"
            borderColor="green.500"
            href="#"
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
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('green.800', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.500', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={{ md: '0', lg: '1' }}
                href={navItem.href ?? '#'}
                fontSize={{ md: 'sm', lg: '15' }}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => (
  <Link
    href={href}
    role="group"
    display="block"
    p={2}
    rounded="md"
    _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
  >
    <Stack direction="row" align="center">
      <Box>
        <Text
          transition="all .3s ease"
          _groupHover={{ color: 'green.500' }}
          fontWeight={500}
        >
          {label}
        </Text>
        <Text fontSize="sm">{subLabel}</Text>
      </Box>
      <Flex
        transition="all .3s ease"
        transform="translateX(-10px)"
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify="flex-end"
        align="center"
        flex={1}
      >
        <Icon color="green.800" w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Link>
);

const MobileNav = () => (
  <Stack
    bg={useColorModeValue('#f7fff9', 'gray.800')}
    p={4}
    display={{ md: 'none' }}
  >
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
);

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} bg="#f7fff9">
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          bg="#f7fff9"
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Compare Plans',
    href: '#',
  },
  {
    label: 'Tips & Advice',
    children: [
      {
        label: 'Energy Efficency',
        subLabel: 'Practical ways to save and spend less',
        href: '#',
      },
      {
        label: 'Emissions facts',
        subLabel: 'How we emit carbon everyday',
        href: '#',
      },
    ],
  },
  {
    label: 'Energy Data Calculator',
    children: [
      {
        label: 'Energy pricing calculator',
        subLabel: 'Examine over 20,000 plans instantly',
        href: '#',
      },
      {
        label: 'Emissions calculator',
        subLabel: 'Emissions maths for normal people',
        href: '#',
      },
    ],
  },
  {
    label: 'Green Energy Guide',
    href: '#',
  },
];
