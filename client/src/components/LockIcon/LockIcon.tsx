import { Flex, Text } from '@chakra-ui/react'
import { theme } from '../../themes'

interface LockIconPropType {
  collapsible?: boolean
  locked?: boolean
  index: number
}

export function LockIcon({ collapsible, locked, index }: LockIconPropType) {
  return (
    <>
      {!collapsible && (
        <Flex alignItems={'center'} transform={['scale(1)', 'scale(0.85)']}>
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
            fontSize={'1.1rem'}
            color={theme.colors.black['800']}
          >
            {/* 
            color of text lock */}

            {index + 1}
          </Text>
        </Flex>
      )}
    </>
  )
}
