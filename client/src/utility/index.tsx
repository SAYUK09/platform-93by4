import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export type BreadcrumbObj = {
  breadcrumbName: string
  breadcrumbLink: string
}

export type BreadcrumbProp = {
  breadcrumbProp: BreadcrumbObj[]
}

const Breadcrumbs = ({ breadcrumbProp }: BreadcrumbProp): JSX.Element => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {breadcrumbProp.map((breadcrumb: BreadcrumbObj) => (
        <BreadcrumbItem>
          <BreadcrumbLink href={breadcrumb.breadcrumbLink}>
            {breadcrumb.breadcrumbName}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default Breadcrumbs
