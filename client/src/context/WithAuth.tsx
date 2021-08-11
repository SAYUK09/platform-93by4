import { Progress, useToast, Center, Spinner } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { useRouter } from 'next/router'

import { useAuth } from './AuthContext'

const withAuth = (WrappedComponent: NextComponentType) => {
  // we will type this later
  return (props: any) => {
    if (typeof window !== 'undefined') {
      const Router = useRouter()
      const { authState } = useAuth()
      const isAuthenticated = authState?.isAuthenticated
      const isLoading = authState?.isLoading
      if (!isLoading && !isAuthenticated) {
        Router.push({
          pathname: '/',
        })
        return (
          <Center minH="100vh">
            <Spinner />
          </Center>
        )
      }

      if (isLoading) {
        return (
          <Center minH="100vh">
            <Spinner />
          </Center>
        )
      }
      return <WrappedComponent {...props} />
    }

    return null
  }
}

export default withAuth
