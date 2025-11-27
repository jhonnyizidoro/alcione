import { StrapiRoute } from '@/@types/Routes'

export const get = async <T>(
  route: StrapiRoute,
  opts?: {
    params?: Record<string, string>
    searchParams?: Record<string, string>
  },
) => {
  let endpoint = `${process.env.API_ENDPOINT}/${route}`

  const searchParams = new URLSearchParams({
    ...(opts?.searchParams || {}),
    pLevel: '3',
  })

  Object.entries(opts?.params || {}).forEach(([key, value]) => {
    endpoint = endpoint.replace(`{${key}}`, value)
  })

  endpoint += `?${searchParams.toString()}`

  const res = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    next: { revalidate: 60 * 60 },
  })

  const data = await res.json()

  if (!data.data) {
    console.error({ endpoint, data })
  }

  return data.data as T | undefined
}
