import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import { ChecksType } from '../../data/staticData/mark15'
import { colors } from '../../styles/themeVars/themeVars'

interface CardTextPropType {
  collapsible?: boolean
  status?: string
  title: string
  subTitle: string | JSX.Element
  checklist?: ChecksType[]
  checkedCount?: number
}

export function CardText({
  collapsible,
  status,
  title,
  subTitle,
  checklist,
  checkedCount,
}: CardTextPropType) {
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)')

  return (
    <>
      <Flex
        flexDirection={collapsible ? 'row' : 'column'}
        justifyContent={collapsible ? 'flex-start' : 'center'}
        alignItems={collapsible || isSmallerThan700 ? 'center' : 'flex-start'}
        flex={'1'}
        margin={isSmallerThan700 ? '1rem 0' : ''}
        textAlign={isSmallerThan700 ? 'center' : 'left'}
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
  )
}
