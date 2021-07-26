import { Box, Flex, useMediaQuery, Text } from '@chakra-ui/react';
import { colors } from '../../styles/themeVars/themeVars';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {CardText} from "./../CardText/CardText"

interface DashboardCardPropType {
  collapsible?: boolean;
  status?: string;
  id: string;
  title?: string;
  subTitle?: string | JSX.Element;
  link?: string;
  index?: number;
  lockIcon?: boolean;
}

export function DashboardCard({
  collapsible,
  title,
  link,
}: DashboardCardPropType) {
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box borderRadius={'8px'} overflow={'hidden'} marginTop={'2rem'}>
      <Flex
        width={'100%'}
        background={colors.darkGrey}
        padding={'1.5rem'}
        alignItems={'center'}
        flexDirection={!collapsible && isSmallerThan700 ? 'column' : 'row'}
        onClick={() =>
          collapsible && setOpenDrawer((openDrawer) => !openDrawer)
        }
      >
        <Text
            background={
              colors.lightBlue
            }
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'28px'}
            width={'29px'}
            borderRadius={'4px'}
            fontWeight={'600'}
            margin={!collapsible && isSmallerThan700 ? '1.2rem 0' : '0 1.2rem'}
            marginLeft={'0'}
            position={'relative'}
            fontSize={'1.1rem'}
          />
        
        <CardText
          collapsible={collapsible}
          title={title}
        />
        {!collapsible && (
          <Flex cursor={'pointer'}>
            <Link href={`${link}`}>
              <Image
                src={'/svgs/link.svg'}
                height={'30'}
                width={'30'}
                alt={'link-svg'}
              />
            </Link>
          </Flex>
        )}
        
      </Flex>
    </Box>
  );
}
