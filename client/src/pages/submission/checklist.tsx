import { Layout, Card } from '../../components'
import { CheckListData, CardOnEachPage } from '../../data/staticData/mark15'
import { useState } from 'react'
import { Button, Link, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function CheckList() {
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

  console.log(pageNumber, pageNumber > 1 ? 'visible' : 'hidden')

  return (
    <Layout>
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
          colorScheme="blue"
          size={'lg'}
          variant="outline"
          _hover={{ bg: 'rgba(49, 130, 206, 0.1)' }}
          _active={{ bg: 'rgba(49, 130, 206, 0.1)' }}
          onClick={() => handlePrevButton()}
          visibility={pageNumber > 1 ? 'visible' : 'hidden'}
          disabled={pageNumber < 2}
        >
          Previous
        </Button>

        <Button
          colorScheme="blue"
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

export default CheckList
