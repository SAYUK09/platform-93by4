import { ReactNode } from 'react'
import { Stack } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}
export function AuthLayout({ children }: Props) {
  return (
    <Stack
      minH="calc(100vh - 60px);"
      d="flex"
      align={['', '', 'center']}
      justify="center"
      bg={'#151515'}
    >
      <Stack
        maxW={['100%', '100%', '80%']}
        minW={['100%', '100%', '80%']}
        direction={{ base: 'column', md: 'row' }}
        rounded={'10px'}
        overflow="hidden"
        bg={'black.800'}
        m={['3rem 0.5rem', '', '2rem auto']}
      >
        {children}
      </Stack>
    </Stack>
  )
}
