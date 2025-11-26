import { notFound } from 'next/navigation'

export const get = async <T extends SingleType<unknown> | Collection<unknown>>(
  collection: string,
) => {
  const endpoint = `${process.env.API_ENDPOINT}/${collection}`
  const headers = {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  }

  const res = await fetch(endpoint, {
    headers,
    next: { revalidate: 60 * 60 },
  })

  if (res.status === 404) {
    notFound()
  } else if (res.status !== 200) {
    throw new Error(
      JSON.stringify({ message: 'Error fetching data', endpoint, headers }),
    )
  }

  const data = (await res.json()) as T

  return data
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
