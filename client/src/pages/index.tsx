import type { NextPage } from 'next'
import Head from 'next/head'
import {Main} from "./../components/Main"

const IndexPage: NextPage = () => {
  return (
    <div >
      <Head>
        <title>NeoG Camp Admission Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}

export default IndexPage
