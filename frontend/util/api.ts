import { StrapiRoute } from '@/@types/Routes'

export const get = async <T>(
  route: StrapiRoute,
  opts?: { suffix?: string; params?: Record<string, string> },
) => {
  const params = new URLSearchParams({
    ...(opts?.params || {}),
    pLevel: '10',
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

export const post = async (collection: string, payload: object) => {
  const endpoint = `${process.env.API_ENDPOINT}/${collection}`
  const headers = {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
    'Content-Type': 'application/json',
  }

  const res = await fetch(endpoint, {
    headers,
    method: 'POST',
    body: JSON.stringify({ data: payload }),
  })

  if (res.status !== 200) {
    throw new Error(
      JSON.stringify({
        message: 'Error posting data',
        endpoint,
        headers,
        payload,
      }),
    )
  }

  const data = await res.json()

  return data
}
