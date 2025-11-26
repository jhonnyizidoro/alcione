import { StrapiRoute } from '@/@types/Routes'
import Image from 'next/image'
import { FC } from 'react'

import { get } from '@/util/api'

import Container from '@/components/Container/Container'
import SocialLinks from '@/components/SocialLinks/SocialLinks'

import styles from './Footer.module.scss'
import Logo from './images/logo.png'

const Footer: FC = async () => {
  const res = await get<Api.Footer>(StrapiRoute.Footer)

  return (
    <footer className={styles.footerWrapper}>
      <Container className={styles.footer}>
        <Image width={320} alt='Professor Alcione' src={Logo} />
        <div className={styles.footerText}>{res?.text}</div>
        <SocialLinks fill='dark' background='yellow' />
      </Container>
    </footer>
  )
}

export default Footer
