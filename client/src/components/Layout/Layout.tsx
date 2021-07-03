import { Flex, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Head from 'next/head';
import { colors } from '../../styles/themeVars/themeVars';
import { Navbar } from '../';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex
      background={colors.blackColor}
      height={`100vh`}
      maxWidth={`100vw`}
      margin={'auto'}
      flexDirection={'column'}
      alignItems={'center'}
      overflowX={'hidden'}
      overflowY={'auto'}
    >
      <Head>
        <title>NeoG Camp Admission Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box
        maxWidth={'1000px'}
        width={'100%'}
        padding={['1rem', '2rem']}
        marginTop={'1rem'}
      >
        {children}
      </Box>
    </Flex>
  );
}
