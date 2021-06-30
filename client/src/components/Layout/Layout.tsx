import { Flex, Box, useMediaQuery, IconButton } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Head from 'next/head';
import { colors } from '../../styles/themeVars/themeVars';
import { Navbar } from '../';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function Layout({ children }: { children: ReactNode }) {
  const [isSmallerThan400] = useMediaQuery('(max-width: 400px)');
  const router = useRouter();
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
      {router.pathname !== '/dashboard' && (
        <Flex
          width={'100vw'}
          justifyContent={'space-between'}
          padding={'1rem 1.4rem'}
          position={'fixed'}
          top={'60px'}
          left={'0'}
          z-index={'2'}
        >
          <IconButton
            aria-label="Go Back"
            borderRadius={'4px'}
            background={colors.mediumGrey}
            _hover={{ background: colors.darkGrey }}
            _active={{ background: colors.darkGrey }}
            size={'md'}
            icon={
              <Image
                src={'/svgs/chevLeft.svg'}
                height={'18'}
                width={'18'}
                alt={'link-svg'}
              />
            }
            onClick={() => {
              window.history.back();
            }}
          />
          <IconButton
            aria-label="Go Back"
            borderRadius={'4px'}
            background={colors.mediumGrey}
            _hover={{ background: colors.darkGrey }}
            _active={{ background: colors.darkGrey }}
            size={'md'}
            icon={
              <Image
                src={'/svgs/chevRight.svg'}
                height={'18'}
                width={'18'}
                alt={'link-svg'}
              />
            }
            onClick={() => {
              window.history.forward();
            }}
          />
        </Flex>
      )}
      <Box
        maxWidth={'1000px'}
        width={'100%'}
        padding={isSmallerThan400 ? '1rem' : '2rem'}
        marginTop={'1rem'}
      >
        {children}
      </Box>
    </Flex>
  );
}
