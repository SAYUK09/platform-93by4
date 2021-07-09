import { Flex, Text } from '@chakra-ui/react'
import { theme } from '../../themes'
import { MdLock } from 'react-icons/md'
interface LockIconPropType {
  collapsible?: boolean
  locked?: boolean
  index: number
}

export function LockIcon({ collapsible, locked, index }: LockIconPropType) {
  return (
    <>
      {!collapsible && (
        <Flex
          alignItems={'center'}
          width={['50px', '60px', '60px']}
          transform={['scale(0.85)', 'scale(1)', 'scale(1)']}
        >
          {!locked ? (
            <Text
              background={
                !locked ? theme.colors.brand['500'] : theme.colors.gray['300']
              }
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              height={!locked ? '28px' : '26px'}
              width={'29px'}
              borderRadius={'4px'}
              fontWeight={'600'}
              marginRight={'1rem'}
              position={'relative'}
              fontSize={'1rem'}
              color={theme.colors.black['800']}
            >
              {index + 1}
            </Text>
          ) : (
            <Flex marginRight={'1rem'} alignItems="flex-end">
              <MdLock style={{ height: '2em', width: '2em' }} />
              <Text fontSize={'0.8rem'}>{index + 1} </Text>
            </Flex>
          )}
        </Flex>
      )}
    </>
  )
}
