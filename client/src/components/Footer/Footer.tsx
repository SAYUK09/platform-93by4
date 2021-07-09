import { Box, IconButton, ButtonGroup, Text } from '@chakra-ui/react'

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaTelegram,
} from 'react-icons/fa'

import { footerLinks } from './socialLinks'

export function Footer() {
  return (
    <>
      <Box>
        <ButtonGroup variant="ghost" color="gray.600" mt={4}>
          {footerLinks.map(({ id, label, href, icon }) => {
            return (
              <IconButton
                as="a"
                href={href}
                aria-label={label}
                icon={icon}
                key={id}
              />
            )
          })}
        </ButtonGroup>
      </Box>
      <Text fontSize="sm" mt={{ base: '12', md: '8' }}>
        &copy; {new Date().getFullYear()} neoG.camp. All rights reserved
      </Text>
    </>
  )
}
