export const formatDateTime = (date?: string | null) => {
  const s = (date || '2000-01-01T00:00:00.000Z').split(/[-T.:]/g) || ''
  return `${s[2]}/${s[1]}/${s[0]} - ${s[3]}:${s[4]}`
}

export const formatDate = (date?: string | null) => {
  const s = (date || '2000-01-01').split(/-/g)
  return `${s[2]}/${s[1]}/${s[0]}`
}

export const formatDateYear = (date?: string | null) => {
  return new Date(date || '2000-01-01').getFullYear()
}

export const stripHtml = (html?: string | null) =>
  (html || '').replace(/<[^>]*>?/gm, '')

export const timeAgo = (date?: string | null) => {
  const d = new Date(date || '')
  const formatter = new Intl.RelativeTimeFormat('pt-BR')
  const secondsElapsed = (d.getTime() - Date.now()) / 1000

  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  }

  for (const k in ranges) {
    const key = k as keyof typeof ranges
    const range = ranges[key as keyof typeof ranges]

    if (range < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / range
      return formatter.format(Math.round(delta), key)
    }
  }
}
