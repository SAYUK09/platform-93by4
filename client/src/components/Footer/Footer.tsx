import { Box, IconButton, ButtonGroup, Text } from '@chakra-ui/react'

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaTelegram,
} from 'react-icons/fa'

export function Footer() {
  return (
    <>
      <Box>
        <ButtonGroup variant="ghost" color="gray.600" mt={4}>
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Youtube"
            icon={<FaYoutube fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Telegram"
            icon={<FaTelegram fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Discord"
            icon={<FaDiscord fontSize="20px" />}
          />
        </ButtonGroup>
      </Box>
      <Text fontSize="sm" mt={{ base: '12', md: '8' }}>
        &copy; {new Date().getFullYear()} © neoG.camp. All rights reserved
      </Text>
    </>
  )
}
