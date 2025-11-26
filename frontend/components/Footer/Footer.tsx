import Image from 'next/image'
import { FC } from 'react'

import { get } from '@/util/api'

import Container from '@/components/Container/Container'
import SocialLinks from '@/components/SocialLinks/SocialLinks'

import styles from './Footer.module.scss'
import Logo from './images/logo.png'

type FooterData = SingleTypeRes<{
  text: string
}>

const Footer: FC = async () => {
  const {
    data: { attributes: data },
  } = await get<FooterData>('footer')

  return (
    <footer className={styles.footerWrapper}>
      <Container className={styles.footer}>
        <Image width={320} alt='Helder Lazarotto' src={Logo} />
        <div className={styles.footerText}>{data.text}</div>
        <SocialLinks fill='dark' background='yellow' />
      </Container>
    </footer>
  )
}

export default Footer
