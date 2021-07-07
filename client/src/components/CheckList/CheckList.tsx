import { CheckboxGroup, Checkbox, Text, isChakraTheme } from '@chakra-ui/react'
import { ChecksType } from '../../data/staticData/mark15'
import { SetStateAction, Dispatch } from 'react'
import { theme } from '../../themes'

interface CheckListProps {
  checklist?: ChecksType[]
  checkCount?: string[]
  setCheckCount: Dispatch<SetStateAction<string[]>>
}

export function CheckList({
  checklist,
  checkCount,
  setCheckCount,
}: CheckListProps): JSX.Element {
  const handleCheckBoxChange = (id: string, text: string) => {
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
            const isChecked = Boolean(checkCount && checkCount.includes(id))
            return (
              <Checkbox
                key={id}
                colorScheme="teal"
                color={theme.colors.black['100']}
                marginBottom={'0.5rem'}
                display={'flex'}
                alignItems={'flex-start'}
                onChange={() => handleCheckBoxChange(id, text)}
                isChecked={isChecked}
              >
                <Text>
                  {isChecked.toString()} {text}
                </Text>
              </Checkbox>
            )
          })}
      </CheckboxGroup>
    </>
  )
}
