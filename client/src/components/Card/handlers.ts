import { Dispatch, SetStateAction } from 'react';

export function handleMarksChecked(
  id: string,
  checksLength: number,
  checkCount: number,
  setAllMarksChecked: Dispatch<SetStateAction<string[]>>
) {
  if (checkCount === checksLength) {
    setAllMarksChecked((allMarksChecked) => [...allMarksChecked, id]);
  } else {
    setAllMarksChecked((allMarksChecked) => {
      return allMarksChecked.filter((markCheckItem) => markCheckItem !== id);
    });
  }
}
