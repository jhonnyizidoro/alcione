import { StrapiRoute } from '@/@types/Routes'
import Image from 'next/image'
import { FC } from 'react'

import { get } from '@/util/api'

import Container from '@/components/Container/Container'
import SocialLinks from '@/components/SocialLinks/SocialLinks'

import Logo from '../Nav/images/logo.png'
import styles from './Footer.module.scss'

const Footer: FC = async () => {
  const res = await get<Api.Footer>(StrapiRoute.Footer)

  return (
    <footer className={styles.footerWrapper}>
      <Container className={styles.footer}>
        <Image
          width={320}
          alt='Professor Alcione'
          src={Logo}
          className={styles.logo}
        />
        <div className={styles.footerText}>{res?.text}</div>
        <SocialLinks fill='dark' background='yellow' />
      </Container>
    </footer>
  )
}

export default Footer
