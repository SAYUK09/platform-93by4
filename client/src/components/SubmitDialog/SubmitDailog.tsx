import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { theme } from '../../themes'

import React, { useState, useRef, LegacyRef } from 'react'

export function Alert({
  isDisabled,
  onClick,
}: {
  isDisabled: boolean
  onClick: () => Promise<void>
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onClose = () => setIsOpen(false)
  const cancelRef: LegacyRef<HTMLButtonElement> | null = useRef(null)

  const SubmitHandler = () => {
    onClose()
    onClick()
  }

  return (
    <>
      <Button
        background={theme.colors.brand['500']}
        color={theme.colors.black['900']}
        mt={['1rem', '0']}
        ml={['0', '1rem']}
        width={['100%', 'auto']}
        onClick={() => setIsOpen(true)}
        isDisabled={isDisabled}
      >
        Submit
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={'black.800'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm submission
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure, you want to submit this URL?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                background={theme.colors.red['400']}
                onClick={onClose}
                _hover={{ bg: 'red.600' }}
              >
                Cancel
              </Button>
              <Button onClick={SubmitHandler} ml={3}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
