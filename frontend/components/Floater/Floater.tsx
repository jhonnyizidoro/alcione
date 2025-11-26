import { StrapiRoute } from '@/@types/Routes'
import { FC } from 'react'

import { get } from '@/util/api'

import FloaterImage from '@/components/FloaterImage/FloaterImage'

const Floater: FC = async () => {
  const res = await get<Api.Floater>(StrapiRoute.Floater)

  if (!res?.floater?.url) {
    return
  }

  return <FloaterImage src={res.floater.url} />
}

export default Floater
