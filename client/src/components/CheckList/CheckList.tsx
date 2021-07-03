import { CheckboxGroup, Checkbox, Text } from '@chakra-ui/react'
import { ChecksType } from '../../data/staticData/mark15'
import { colors } from '../../styles/themeVars/themeVars'
import { SetStateAction, Dispatch } from 'react'

interface CheckListPropType {
  checklist: ChecksType
  setCheckCount: Dispatch<SetStateAction<string[]>>
}

export function CheckList({ checklist, setCheckCount }) {
  const handleCheckBoxChange = (id, text) => {
    console.log('checked', text)
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
        {checklist.map(({ id, text }) => {
          return (
            <Checkbox
              key={id}
              colorScheme="teal"
              color={colors.textMuted}
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
