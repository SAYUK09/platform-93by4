import { CheckboxGroup, Checkbox, Text } from '@chakra-ui/react'
import { ChecksType } from '../../data/staticData/mark15'
import { SetStateAction, Dispatch } from 'react'
import { theme } from '../../themes'

interface CheckListProps {
  checklist?: ChecksType[]
  setCheckCount: Dispatch<SetStateAction<string[]>>
}

export function CheckList({
  checklist,
  setCheckCount,
}: CheckListProps): JSX.Element {
  const handleCheckBoxChange = (id: string, text: string) => {
    console.log('checked', text)
    setCheckCount &&
      setCheckCount((checkCount) => {
        if (checkCount.includes(id)) {
          return checkCount.filter((checkItemId) => checkItemId !== id)
        }
        return [...checkCount, id]
      })
  }

  return (
    <>
      <CheckboxGroup>
        {checklist &&
          checklist.map(({ id, text }) => {
            return (
              <Checkbox
                key={id}
                colorscheme="teal"
                color={theme.colors.black['100']}
                marginBottom={'0.5rem'}
                display={'flex'}
                alignItems={'flex-start'}
                onChange={() => handleCheckBoxChange(id, text)}
              >
                <Text>{text}</Text>
              </Checkbox>
            )
          })}
      </CheckboxGroup>
    </>
  )
}
