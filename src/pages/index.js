import Head from 'next/head';
// import dynamic from 'next/dynamic';
import { Grid, GridItem } from '@chakra-ui/react';

import Layout from '../components/ui/Layout';
import Hero from '../components/landingPage/Hero';
import HeroCarousel from '../components/landingPage/HeroCarousel';
import EnergyStats from '../components/landingPage/EnergyStats';
import ProblemSection from '../components/landingPage/ProblemSection';
import SolutionSection from '../components/landingPage/SolutionSection';
import InfoSection from '../components/landingPage/InfoSection';
import CtaBottom from '../components/landingPage/CtaBottom';

// const CTA = dynamic(() => import('../components/landingPage/CtaBottom'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Solving Zero: Affordable green electricity is possible</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Save money and the planet by choosing an affordable and green energy provider, we analyse 20,000 energy plans so you don't have to"
        />
        <meta
          property="og:title"
          content="Solving Zero for cheaper greener energy to your home"
        />
        <meta property="og:site_name" content="Solving Zero" />
        <meta name="twitter:image:alt" content="Solving Zero Logo" />
        <meta property="og:image" content="solving_zero_social.png" />
        <link rel="icon" href="/SZ_favicon.webp" />
      </Head>
      <Layout>
        <Grid
          gridTemplateColumns={{ base: '1', md: 'minmax(350px, 1fr) 3fr' }}
          gridTemplateRows={{
            base: 'minmax(max-content, 1fr)',
          }}
        >
          <Grid
            gridRow="1"
            gridColumn={{ base: '1', md: '1 / 3' }}
            gridTemplateColumns={{ base: '1', md: '1fr 1fr' }}
            gridTemplateRows={{
              base: 'minmax(max-content, 1fr)',
              md: '500px 450px',
            }}
            maxW="8xl"
            justifySelf={{ lg: 'center' }}
          >
            <GridItem
              gridRow={{ base: '1', md: '1' }}
              gridColumn={{ base: '1', md: '1 / 3' }}
              mx={{ base: '7.5%', md: '5%' }}
            >
              <Hero />
            </GridItem>
            <GridItem
              gridRow={{ base: '2', md: '1' }}
              gridColumn={{ md: '2', lg: '2' }}
              position={{ base: 'relative', md: 'relative', lg: 'relative' }}
              top={{ base: '50px', md: '0', lg: '0' }}
              right={{ base: '0', md: '0', lg: '0' }}
            >
              <HeroCarousel />
            </GridItem>
            <GridItem
              gridRow={{ base: '3', md: '2' }}
              gridColumn={{ base: '1', md: '1 / 3' }}
              mt={{ base: '80px', lg: '145px' }}
            >
              <EnergyStats />
            </GridItem>
          </Grid>
          <GridItem
            gridRow={{ base: '4', md: '3' }}
            gridColumn={{ base: '1', md: '1 / 3' }}
            background="white"
            mt={{ base: '125px', lg: '0px' }}
          >
            <ProblemSection />
          </GridItem>
          <GridItem
            gridRow={{ base: '5', md: '4' }}
            gridColumn={{ base: '1', md: '1 / 3' }}
            backgroundColor="white"
            minH="50px"
            maxH="150px"
          />
          <GridItem
            gridRow={{ base: '5', md: '4' }}
            gridColumn={{ base: '1', md: '1 / 3' }}
            background="green.500"
            transform="skewY(-6deg)"
            minH={{ md: '600px' }}
          />
          <GridItem
            gridRow={{ base: '5', md: '4' }}
            gridColumn={{ base: '1', md: '1 / 3' }}
            zIndex="1"
            mt="175px"
          >
            <SolutionSection />
          </GridItem>
          <GridItem
            gridRow={{ base: '6', md: '5' }}
            gridColumn={{ base: '1', md: '1 / 3' }}
            mt={{ base: '150px', md: '225px' }}
          >
            <InfoSection />
          </GridItem>
          <GridItem
            gridRow={{ base: '7', md: '6' }}
            gridColumn={{ base: '1', md: '1 / 3' }}
            mt={{ base: '90px', md: '175px' }}
          >
            <CtaBottom />
          </GridItem>
        </Grid>
      </Layout>
    </>
  );
}
