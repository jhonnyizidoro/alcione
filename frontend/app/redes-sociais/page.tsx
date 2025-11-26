import { FC } from 'react'

import { defaultMetadata } from '@/util/seo'

import SocialLinksOverlay from '@/components/SocialLinksOverlay/SocialLinksOverlay'

export const metadata = defaultMetadata(
  'Helder Lazarotto | Twitter, Instagram, TikTok, YouTube e Facebook',
  'Helder Lazarotto: acompanhe nossas redes sociais para ficar por dentro de todas as nossas novidades.',
)

const SocialNetworksPage: FC = () => <SocialLinksOverlay />

export default SocialNetworksPage
