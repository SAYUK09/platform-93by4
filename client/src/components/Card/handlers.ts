import { Dispatch, SetStateAction } from 'react'

export function handleMarksChecked(
  id: string,
  checksLength: number,
  checkCount: number,
  setAllMarksChecked?: Dispatch<SetStateAction<string[]>>
) {
  if (setAllMarksChecked && checkCount === checksLength) {
    setAllMarksChecked((allMarksChecked) => [...allMarksChecked, id])
  } else if (setAllMarksChecked) {
    setAllMarksChecked((allMarksChecked) => {
      return allMarksChecked.filter((markCheckItem) => markCheckItem !== id)
    })
  }
}
