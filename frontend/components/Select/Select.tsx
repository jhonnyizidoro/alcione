'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, FC, useCallback, useMemo } from 'react'

import { paramToUrl } from '@/util/url'

import DownIcon from '@/icons/Down'

import styles from './Select.module.scss'

interface Props {
  options: string[]
  label: string
  prop: string
  hidePlaceholder?: boolean
  defaultValue?: string
}

const Select: FC<Props> = ({
  options,
  prop,
  label,
  hidePlaceholder,
  defaultValue,
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const value = useMemo(() => {
    return searchParams.get(prop) || defaultValue || ''
  }, [searchParams, prop, defaultValue])

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLSelectElement>) => {
      const newUrl = paramToUrl(searchParams, pathname, prop, ev.target.value)
      push(newUrl)
    },
    [pathname, prop, push, searchParams],
  )

  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        data-selected={!!value}
        onChange={handleChange}
        value={value}
      >
        {!hidePlaceholder && <option value=''>{label}</option>}
        {options.map((op, i) => (
          <option key={i} value={op}>
            {op}
          </option>
        ))}
      </select>
      <DownIcon width={12} className={styles.icon} data-selected={!!value} />
    </div>
  )
}

export default Select
