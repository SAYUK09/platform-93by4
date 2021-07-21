import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LockIcon, CardText, CheckList } from '../'
import { CheckListType } from '../../data/staticData/mark15'
import { theme } from '../../themes'
import { handleMarksChecked } from './handlers'

interface CardPropType extends CheckListType {
  collapsible?: boolean
  status?: string
  id: string
  title?: string
  subTitle?: string | JSX.Element
  projectName?: string
  link?: string
  index?: number
  lockIcon?: boolean
  setAllMarksChecked?: Dispatch<SetStateAction<string[]>>
}

export function Card({
  collapsible,
  status,
  id,
  title,
  projectName,
  subTitle,
  link,
  checks,
  index,
  setAllMarksChecked,
  lockIcon,
}: CardPropType) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [checkCount, setCheckCount] = useState<string[]>([])

  useEffect(() => {
    if (checks) {
      handleMarksChecked(
        id,
        checks.length,
        checkCount.length,
        setAllMarksChecked
      )

      if (localStorage && checkCount.length) {
        const localCheckData = localStorage.getItem('mark15')
        let localParsedCheckData = {}
        if (localCheckData) {
          localParsedCheckData = JSON.parse(localCheckData)
        }
        localStorage.setItem(
          'mark15',
          JSON.stringify({ ...localParsedCheckData, [id]: checkCount })
        )
      }
    }
  }, [checks, id, setAllMarksChecked, checkCount])

  useEffect(() => {
    if (localStorage) {
      const localCheckData: any = localStorage.getItem('mark15')
      let localParsedCheckData: any = {}
      if (localCheckData) {
        localParsedCheckData = JSON.parse(localCheckData)
      }
      localParsedCheckData[id] && setCheckCount(localParsedCheckData[id])
    }
  }, [])

  return (
    <Box borderRadius={'8px'} overflow={'hidden'} marginTop={'2rem'}>
      <Flex
        width={'100%'}
        background={theme.colors.black['800']}
        padding={['0.8rem', '1.5rem']}
        alignItems={'center'}
        flexDirection={[!collapsible ? 'column' : 'row', 'row']}
        onClick={() =>
          collapsible && setOpenDrawer((openDrawer) => !openDrawer)
        }
      >
        {lockIcon && <LockIcon index={index} collapsible={collapsible} />}
        <CardText
          collapsible={collapsible}
          title={title}
          projectName={projectName}
          subTitle={subTitle}
          status={status}
          checklist={checks}
          checkedCount={checkCount.length}
        />
        {!collapsible && (
          <Flex cursor={'pointer'}>
            <Link href={`${link}`}>
              <Image
                src={
                  link && link.includes('/checklist')
                    ? '/svgs/rightArrow.svg'
                    : '/svgs/link.svg'
                }
                height="30"
                width="30"
                alt={'link-svg'}
              />
            </Link>
          </Flex>
        )}
        {collapsible && (
          <Flex flex={'1'} justifyContent={'flex-end'} cursor={'pointer'}>
            <Image
              src={'/svgs/chevDown.svg'}
              height={'18'}
              width={'18'}
              alt={'link-svg'}
            />
          </Flex>
        )}
      </Flex>
      {collapsible && (
        <Flex
          display={'flex'}
          flexDirection={'column'}
          background={theme.colors.black['800']}
          padding={openDrawer ? '0rem 1rem 1.7rem 3rem' : '0 3rem'}
          transition={'0s padding ease, 0.4s all ease'}
          maxHeight={openDrawer ? '10000vh' : '0'}
          height={openDrawer ? 'auto' : '0'}
          overflow={'overhidden'}
          opacity={openDrawer ? '1' : '0.7'}
        >
          <Heading
            fontSize="1.15rem"
            pb="1.8rem"
            fontWeight="600"
            color="black.200"
          >
            {projectName}
          </Heading>
          <CheckList
            checklist={checks}
            checkCount={checkCount}
            setCheckCount={setCheckCount}
          />
        </Flex>
      )}
    </Box>
  )
}
