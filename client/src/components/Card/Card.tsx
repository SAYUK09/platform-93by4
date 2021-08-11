import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'
import { LockIcon, CardText, CheckList } from '../'
import { CheckListType } from '../../data/staticData/mark15'
import { theme } from '../../themes'
import { handleMarksChecked } from './handlers'
import router from 'next/router'

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

interface CardCompPropType extends CardPropType {
  checkCount: string[]
  setCheckCount: Dispatch<SetStateAction<string[]>>
}

function CardComp({
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
  checkCount,
  setCheckCount,
}: CardCompPropType) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

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
            {link && link.includes('/checklist') ? (
              // \<Link href={`${link}`}>
              <HiArrowCircleRight style={{ height: '30px', width: '30px' }} />
            ) : (
              // </Link>
              <Link href={`${link}`} isExternal>
                  <BiLinkExternal style={{ height: '30px', width: '30px' }} />
              </Link>
            )}
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
            color="white"
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

export function Card(props: CardPropType) {
  const [checkCount, setCheckCount] = useState<string[]>([])

  useEffect(() => {
    if (props.checks) {
      handleMarksChecked(
        props.id,
        props.checks.length,
        checkCount.length,
        props.setAllMarksChecked
      )

      if (localStorage && checkCount.length) {
        const localCheckData = localStorage.getItem('mark15')
        let localParsedCheckData = {}
        if (localCheckData) {
          localParsedCheckData = JSON.parse(localCheckData)
        }
        localStorage.setItem(
          'mark15',
          JSON.stringify({ ...localParsedCheckData, [props.id]: checkCount })
        )
      }
    }
  }, [props.checks, props.id, props.setAllMarksChecked, checkCount])

  useEffect(() => {
    if (localStorage) {
      const localCheckData: any = localStorage.getItem('mark15')
      let localParsedCheckData: any = {}
      if (localCheckData) {
        localParsedCheckData = JSON.parse(localCheckData)
      }
      localParsedCheckData[props.id] &&
        setCheckCount(localParsedCheckData[props.id])
    }
  }, [])

  return (
    <>
      {props.link && props.link.includes('/checklist') ? (
        <Box
          cursor="pointer"
          onClick={() => {
            router.push('/submission/checklist')
          }}
        >
          <CardComp
            {...props}
            checkCount={checkCount}
            setCheckCount={setCheckCount}
          />
        </Box>
      ) : (
        <CardComp
          {...props}
          checkCount={checkCount}
          setCheckCount={setCheckCount}
        />
      )}
    </>
  )
}
