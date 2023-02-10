import Head from 'next/head';
import { Grid, GridItem, Spacer } from '@chakra-ui/react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HeroCards from '../components/HeroCards';
import EnergyStats from '../components/EnergyStats';

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
      <main>
        <Layout>
          <Grid
            gridTemplateColumns="minmax(350px, 1fr) 3fr"
            gridTemplateRows={{ base: 'repeat(3, 1fr)', md: ' 1fr 1fr' }}
          >
            <GridItem
              gridRow={{ base: '1', md: '1' }}
              gridColumn={{ base: '1', md: '1 / 3' }}
              ml={{ md: '20px' }}
            >
              <Hero />
            </GridItem>
            <GridItem
              gridRow={{ base: '2', md: '1' }}
              position={{ base: 'relative', md: 'relative' }}
              top={{ base: '-50px', md: '0', lg: '0' }}
              right={{ md: '220', lg: '320' }}
            >
              <HeroCards />
            </GridItem>
            <Spacer />
            <GridItem
              gridRow={{ base: '3', md: '2' }}
              gridColumn={{ md: '1 / 3' }}
            >
              <EnergyStats />
            </GridItem>
          </Grid>
        </Layout>
      </main>
    </>
  );
}
