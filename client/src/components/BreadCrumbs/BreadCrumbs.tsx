import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import { theme } from '../../themes'
import Link from 'next/link'

export type BreadcrumbObj = {
  breadcrumbName: string
  breadcrumbLink: string
}

export type BreadcrumbProp = {
  breadcrumbProp: BreadcrumbObj[]
}

export const Breadcrumbs = ({
  breadcrumbProp,
}: BreadcrumbProp): JSX.Element => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<BsChevronRight color={theme.colors.black['400']} />}
    >
      {breadcrumbProp.map((breadcrumb: BreadcrumbObj, index) => (
        <BreadcrumbItem key={index} color={theme.colors.black['400']}>
          <BreadcrumbLink as = {Link} href={breadcrumb.breadcrumbLink}>
            {breadcrumb.breadcrumbName}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}
