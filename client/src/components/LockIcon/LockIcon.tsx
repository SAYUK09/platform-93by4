import { Flex, Text } from '@chakra-ui/react'
import { theme } from '../../themes'

interface LockIconPropType {
  collapsible?: boolean
  locked?: boolean
  index?: number
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
            margin={['1.2rem 0', '0 1.2rem']}
            marginLeft={'0'}
            position={'relative'}
            fontSize={'1.1rem'}
          >
            {locked && (
              <Text
                position={'absolute'}
                top={'-1.8rem'}
                left={'3px'}
                transform={'rotate(180deg)'}
                fontSize={'2rem'}
                color={theme.colors.gray['300']}
              >
                U
              </Text>
            )}

            {index && index + 1}
          </Text>
        </Flex>
      )}
    </>
  )
}
