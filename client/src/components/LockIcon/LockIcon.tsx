import { Flex, Text } from '@chakra-ui/react';
import { colors } from '../../styles/themeVars/themeVars';

interface LockIconPropType {
  collapsible?: boolean;
  status?: string;
  index?: number;
}

export function LockIcon({ collapsible, status, index }: LockIconPropType) {
  return (
    <>
      {!collapsible && (
        <Flex alignItems={'center'} transform={['scale(1)', 'scale(0.85)']}>
          <Text
            background={
              status === 'submitted' ? colors.lightBlue : colors.textMuted
            }
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={status === 'submitted' ? '28px' : '26px'}
            width={'29px'}
            borderRadius={'4px'}
            fontWeight={'600'}
            margin={['1.2rem 0', '0 1.2rem']}
            marginLeft={'0'}
            position={'relative'}
            fontSize={'1.1rem'}
          >
            {!(status === 'submitted') && (
              <Text
                position={'absolute'}
                top={'-1.8rem'}
                left={'3px'}
                transform={'rotate(180deg)'}
                fontSize={'2rem'}
                color={colors.textMuted}
              >
                U
              </Text>
            )}
            <Text position={'relative'} top={'2px'}>
              {index + 1}
            </Text>
          </Text>
        </Flex>
      )}
    </>
  );
}
