import {
  Container,
  SimpleGrid,
  Flex,
  Text,
  Stack,
  Heading,
} from '@chakra-ui/react';

export default function Terms() {
  return (
    <Container maxW="7xl" py={12} minH="90vh">
      <SimpleGrid columns={{ base: 1, md: 1 }}>
        <Stack spacing={4} px="20px">
          <Text
            textTransform="uppercase"
            color="green.800"
            fontWeight={600}
            fontSize="sm"
            pl={4}
            alignSelf="flex-center"
            rounded="md"
          >
            Privacy Policy
          </Text>
          <Text color="green.900">Last updated: March 01, 2023</Text>
          <Text m="10px">
            SolvingZero&nbsp;is committed to providing quality services to you
            and this policy outlines our ongoing obligations to you in respect
            of how we manage your Personal Information.
          </Text>
          <Text m="10px">
            We have adopted the Australian Privacy Principles (APPs) contained
            in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the
            way in which we collect, use, disclose, store, secure and dispose of
            your Personal Information.
          </Text>
          <Text m="10px">
            A copy of the Australian Privacy Principles may be obtained from the
            website of The Office of the Australian Information Commissioner at
            https://www.oaic.gov.au/.
          </Text>
          <Heading as="h2" fontSize="2xl">
            What is Personal Information and why do we collect it?
          </Heading>
          <Text m="10px">
            Personal Information is information or an opinion that identifies an
            individual. Examples of Personal Information we collect includes
            names, addresses, email addresses, phone and facsimile numbers.
          </Text>
          <Text m="10px">
            This Personal Information is obtained in many ways including:
            interviews, correspondence, by telephone, by email, via our website
            https://solvingzero.com/, from other websites, from media and
            publications, from other publicly available sources, from
            cookies&nbsp;and from third parties. We don&rsquo;t guarantee
            website links or policy of authorised third parties.
          </Text>
          <Text m="10px">
            We collect your Personal Information for the primary purpose of
            providing our services to you, providing information to our clients
            and marketing. We may also use your Personal Information for
            secondary purposes closely related to the primary purpose, in
            circumstances where you would reasonably expect such use or
            disclosure. You may unsubscribe from our mailing/marketing lists at
            any time by contacting us in writing.
          </Text>
          <Text m="10px">
            When we collect Personal Information we will, where appropriate and
            where possible, explain to you why we are collecting the information
            and how we plan to use it.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Sensitive Information
          </Heading>
          <Text m="10px">
            Sensitive information is defined in the Privacy Act to include
            information or opinion about such things as an individual&apos;s
            racial or ethnic origin, political opinions, membership of a
            political association, religious or philosophical beliefs,
            membership of a trade union or other professional body, criminal
            record or health information.
          </Text>
          <Text m="10px">Sensitive information will be used by us only:</Text>
          <Text m="10px">
            &bull;&nbsp; &nbsp;&nbsp;For the primary purpose for which it was
            obtained
          </Text>
          <Text m="10px">
            &bull;&nbsp; &nbsp;&nbsp;For a secondary purpose that is directly
            related to the primary purpose
          </Text>
          <Text m="10px">
            &bull;&nbsp; &nbsp;&nbsp;With your consent; or where required or
            authorised by law.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Third Parties
          </Heading>
          <Text m="10px">
            Where reasonable and practicable to do so, we will collect your
            Personal Information only from you. However, in some circumstances
            we may be provided with information by third parties. In such a case
            we will take reasonable steps to ensure that you are made aware of
            the information provided to us by the third party.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Disclosure of Personal Information
          </Heading>
          <Text m="10px">
            Your Personal Information may be disclosed in a number of
            circumstances including the following:
          </Text>
          <Text m="10px">
            &bull;&nbsp; &nbsp;&nbsp;Third parties where you consent to the use
            or disclosure; and
          </Text>
          <Text m="10px">
            &bull;&nbsp; &nbsp;&nbsp;Where required or authorised by law.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Security of Personal Information
          </Heading>
          <Text m="10px">
            Your Personal Information is stored in a manner that reasonably
            protects it from misuse and loss and from unauthorized access,
            modification or disclosure.
          </Text>
          <Text m="10px">
            When your Personal Information is no longer needed for the purpose
            for which it was obtained, we will take reasonable steps to destroy
            or permanently de-identify your Personal Information. However, most
            of the Personal Information is or will be stored in client files
            which will be kept by us for a minimum of 7 years.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Access to your Personal Information
          </Heading>
          <Text m="10px">
            You may access the Personal Information we hold about you and to
            update and/or correct it, subject to certain exceptions. If you wish
            to access your Personal Information, please contact us in writing.
          </Text>
          <Text m="10px">
            SolvingZero will not charge any fee for your access request, but may
            charge an administrative fee for providing a copy of your Personal
            Information.
          </Text>
          <Text m="10px">
            In order to protect your Personal Information we may require
            identification from you before releasing the requested information.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Maintaining the Quality of your Personal Information
          </Heading>
          <Text m="10px">
            It is an important to us that your Personal Information is up to
            date. We &nbsp;will &nbsp;take reasonable steps to make sure that
            your Personal Information is accurate, complete and up-to-date. If
            you find that the information we have is not up to date or is
            inaccurate, please advise us as soon as practicable so we can update
            our records and ensure we can continue to provide quality services
            to you.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Policy Updates
          </Heading>
          <Text m="10px">
            This Policy may change from time to time and is available on our
            website.
          </Text>
          <Heading as="h2" fontSize="2xl">
            Privacy Policy Complaints and Enquiries
          </Heading>
          <Text m="10px">
            If you have any queries or complaints about our Privacy Policy
            please contact us at:
          </Text>
          <Text m="10px">https://solvingzero.com/contact</Text>
          <Text m="10px">&nbsp;</Text>
        </Stack>
        <Flex object-fit="contain" position="relative" />
      </SimpleGrid>
    </Container>
  );
}
