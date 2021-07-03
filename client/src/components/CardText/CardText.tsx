import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ChecksType } from '../../data/staticData/mark15';
import { colors } from '../../styles/themeVars/themeVars';

interface CardTextPropType {
  collapsible?: boolean;
  status?: string;
  title: string;
  subTitle: string | JSX.Element;
  checklist?: ChecksType[];
  checkedCount?: number;
}

export function CardText({
  collapsible,
  status,
  title,
  subTitle,
  checklist,
  checkedCount,
}: CardTextPropType) {
  return (
    <>
      <Flex
        flexDirection={collapsible ? 'row' : 'column'}
        justifyContent={collapsible ? 'flex-start' : 'center'}
        alignItems={['center', 'flex-start']}
        flex={'1'}
        margin={['1rem 0', '']}
        textAlign={['center', 'left']}
      >
        {collapsible && (
          <Flex
            alignItems={'center'}
            marginRight={'1rem'}
            position={'relative'}
            top={'-2px'}
          >
            {checkedCount === checklist.length ? (
              <Image
                src={'/svgs/circleCheck.svg'}
                height={'24'}
                width={'24'}
                alt={'link-svg'}
              />
            ) : (
              <Image
                src={'/svgs/circle.svg'}
                height={'24'}
                width={'24'}
                alt={'link-svg'}
              />
            )}
          </Flex>
        )}
        <Heading color={colors.textColor} fontSize={'1.3rem'}>
          {title}
        </Heading>
        {!collapsible && (
          <Text
            color={colors.textMuted}
            marginTop={'0.5rem'}
            textTransform={'capitalize'}
            fontSize={'0.85rem'}
            paddingRight={'1rem'}
          >
            {subTitle}
          </Text>
        )}
      </Flex>
      {collapsible && (
        <Flex flex={'1'} justifyContent={'center'}>
          <Text color={colors.textMuted} paddingLeft={'3.5rem'}>
            {checkedCount}/{checklist.length}
          </Text>
        </Flex>
      )}
    </>
  );
}
