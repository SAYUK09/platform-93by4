import { Layout, Card, Breadcrumbs } from '../../components'
import { CheckListData, CardOnEachPage } from '../../data/staticData/mark15'
import { useState } from 'react'
import { Button, Link, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Breadcrumbs } from './../../components/BreadCrumbs/BreadCrumbs'
import withAuth from '../../context/WithAuth'

function CheckList() {
  const [allMarksChecked, setAllMarksChecked] = useState<string[]>([])
  const router = useRouter()
  let pageNo = router.query?.pageNo as string

  if (!pageNo) {
    pageNo = '1'
  }

  const pageNumber = parseInt(pageNo, 10)

  function handlePrevButton() {
    if (pageNumber > 1) {
      router.push({
        pathname: '/submission/checklist',
        query: `pageNo=${pageNumber - 1}`,
      })
    }
  }

  function handleNextButton() {
    if (
      CheckListData.slice(
        CardOnEachPage * pageNumber,
        CardOnEachPage * pageNumber + CardOnEachPage
      ).length > 0
    ) {
      router.push({
        pathname: '/submission/checklist',
        query: `pageNo=${pageNumber + 1}`,
      })
    } else {
      router.push({
        pathname: '/submission',
      })
    }
  }

  function checkAllIdsInArray() {
    const newListData = CheckListData.slice(
      CardOnEachPage * (pageNumber - 1),
      CardOnEachPage * (pageNumber - 1) + CardOnEachPage
    )
    return newListData.every((dataItem) =>
      allMarksChecked.includes(dataItem.id)
    )
  }

  const breadcrumbsLinks = [
    { breadcrumbName: 'Dashboard', breadcrumbLink: '/dashboard' },
    {
      breadcrumbName: 'Submit Portfolio ',
      breadcrumbLink: '/submission/questions',
    },
    {
      breadcrumbName: 'mark15 Checklist',
      breadcrumbLink: '/submission/checklist',
    },
  ]

  return (
    <Layout>
      <Breadcrumbs breadcrumbProp={breadcrumbsLinks} />
      {CheckListData.slice(
        CardOnEachPage * (pageNumber - 1),
        CardOnEachPage * (pageNumber - 1) + CardOnEachPage
      ).map((question) => {
        return (
          <Card
            key={question.id}
            setAllMarksChecked={setAllMarksChecked}
            collapsible={true}
            {...question}
          />
        )
      })}

      <Flex marginTop={'3rem'} justifyContent={'space-between'}>
        <Button
          colorscheme="brand.500"
          bg="black.900"
          size={'lg'}
          variant="outline"
          _hover={{ bg: 'black.800' }}
          onClick={() => handlePrevButton()}
          visibility={pageNumber > 1 ? 'visible' : 'hidden'}
          disabled={pageNumber < 2}
        >
          Previous
        </Button>

        <Button
          colorscheme="brand"
          textColor="black.900"
          size={'lg'}
          onClick={() => handleNextButton()}
          disabled={!checkAllIdsInArray()}
        >
          Next
        </Button>
      </Flex>
    </Layout>
  )
}

export default withAuth(CheckList)
