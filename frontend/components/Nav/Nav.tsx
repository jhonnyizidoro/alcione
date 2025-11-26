import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Container from '@/components/Container/Container'
import NavLinks from '@/components/NavLinks/NavLinks'

import styles from './Nav.module.scss'
import Logo from './images/logo.png'

const Nav: FC = () => (
  <Container className={styles.nav}>
    <Link href='/'>
      <Image
        src={Logo}
        width={150}
        alt='Professor Alcione'
        className={styles.logo}
      />
    </Link>
    <div className={styles.linksWrapper}>
      <NavLinks />
      <Link className={styles.button} href='/hospital-de-colombo'>
        <strong className={styles.buttonStrong}>Hospital</strong>
        de Colombo
      </Link>
    </div>
  </Container>
)

export default Nav
