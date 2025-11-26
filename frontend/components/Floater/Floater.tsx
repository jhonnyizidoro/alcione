import { FC } from 'react'

import { get } from '@/util/api'

import FloaterImage from '@/components/FloaterImage/FloaterImage'

type FloaterData = SingleTypeRes<{
  floater: SingleType<Collections.Image>
}>

const Floater: FC = async () => {
  const {
    data: { attributes: data },
  } = await get<FloaterData>('floater?populate=deep,2')

  if (!data.floater?.data?.attributes.url) {
    return
  }

  return <FloaterImage src={data.floater?.data?.attributes.url} />
}

export default Floater
