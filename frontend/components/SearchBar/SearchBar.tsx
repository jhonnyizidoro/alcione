'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useCallback, useState } from 'react'

import { paramToUrl } from '@/util/url'

import Input from '@/components/Input/Input'

import SearchIcon from '@/icons/Search'

import styles from './SearchBar.module.scss'

interface Props {
  initialValue?: string
}

const SearchBar: FC<Props> = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue || '')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const handleSubmit = useCallback(() => {
    const newUrl = paramToUrl(searchParams, pathname, 'texto', value)
    push(newUrl)
  }, [pathname, push, searchParams, value])

  return (
    <div className={styles.wrapper}>
      <Input value={value} onChange={setValue} placeholder='Palavras chave' />
      <button type='button' onClick={handleSubmit} className={styles.button}>
        <SearchIcon width={28} className={styles.buttonIcon} />
      </button>
    </div>
  )
}

export default SearchBar
