import Head from 'next/head'
import React, { Children } from 'react'

interface Props {
  title: string
  description?: string
  children?: React.ReactNode
}

export function SEO({
  title,
  description = 'A portal for admission into NeoG Camp',
  children,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      {children}
    </Head>
  )
}
