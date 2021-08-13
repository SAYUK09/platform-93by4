import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { FaTwitter, FaDiscord, FaYoutube, FaInstagram } from 'react-icons/fa'

export type SocialLinks = {
  id: number
  label: string
  href: string
  icon: React.ReactElement
}

export type LegalLinks = {
  id: number
  label: string
  href: string
}

export const socialLinks: SocialLinks[] = [
  {
    id: 1,
    label: 'Website',
    href: 'https://neog.camp/',
    icon: <HiOutlineGlobeAlt fontSize="20px" />,
  },
  {
    id: 2,
    label: 'Discord',
    href: 'https://bit.ly/team-tanay',
    icon: <FaDiscord fontSize="20px" />,
  },
  {
    id: 3,
    label: 'Twitter',
    href: 'https://twitter.com/neogcamp',
    icon: <FaTwitter fontSize="20px" />,
  },
  {
    id: 4,
    label: 'Instagram',
    href: 'https://www.instagram.com/neogcamp',
    icon: <FaInstagram fontSize="20px" />,
  },
  {
    id: 5,
    label: 'Youtube',
    href: 'https://www.youtube.com/watch?v=Ezk2AwqgS9Q&list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA',
    icon: <FaYoutube fontSize="20px" />,
  },
]

export const legalLinks: LegalLinks[] = [
  {
    id: 1,
    label: 'Privacy Policy',
    href: 'https://neog.camp/legal/privacy',
  },
  {
    id: 2,
    label: 'Terms',
    href: 'https://neog.camp/legal/tnc',
  },
  {
    id: 3,
    label: 'Community Guidelines',
    href: 'https://neog.camp/legal/communityguide',
  },
  {
    id: 4,
    label: 'Refund Policy',
    href: 'https://neog.camp/legal/refund',
  },
  {
    id: 5,
    label: 'Contact Us',
    href: '/contact',
  },
]
