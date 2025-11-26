import { StrapiRoute } from '@/@types/Routes'

export const get = async <T>(
  route: StrapiRoute,
  opts?: { suffix?: string; params?: Record<string, string> },
) => {
  const params = new URLSearchParams({
    ...(opts?.params || {}),
    pLevel: '3',
  })

  const suffix = opts?.suffix ? `${opts.suffix}/` : ''
  const endpoint = `${process.env.API_ENDPOINT}/${route}${suffix}?${params.toString()}`
  const headers = { Authorization: `Bearer ${process.env.API_TOKEN}` }

  const res = await fetch(endpoint, {
    headers,
    next: { revalidate: 60 * 60 },
  })

  const data = await res.json()

  return data.data as T | undefined
}
