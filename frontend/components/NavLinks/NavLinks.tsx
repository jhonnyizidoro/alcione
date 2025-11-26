'use client'

import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './NavLinks.module.scss'

const NavLinks: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type='button'
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label='Exibir links de navegação'
      >
        <div className={styles.hamburgerMenu} data-active={open} />
      </button>
      <div className={styles.links} data-active={open}>
        <Link
          className={styles.link}
          href='/pesquisar'
          onClick={() => setOpen(false)}
        >
          Postagens
        </Link>
        <Link
          className={styles.link}
          href='/aulas-gratuitas'
          onClick={() => setOpen(false)}
        >
          Aulas de esporte gratuitas
        </Link>
        <Link
          className={styles.link}
          href='/plano-de-governo'
          onClick={() => setOpen(false)}
        >
          Plano de governo
        </Link>
        <Link
          className={styles.link}
          href='/sobre-mim'
          onClick={() => setOpen(false)}
        >
          Sobre mim
        </Link>
      </div>
    </>
  )
}

export default NavLinks
