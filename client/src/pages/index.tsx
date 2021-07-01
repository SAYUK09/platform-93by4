import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Main } from './../components/Main'
import { Layout } from '../components';
import { colors } from '../styles/themeVars/themeVars';
import { Text } from '@chakra-ui/react';

function IndexPage() {
  return (
    <Layout>
      <Text color={colors.textColor}>HI</Text>
    </Layout>
  );
}

export default IndexPage;
