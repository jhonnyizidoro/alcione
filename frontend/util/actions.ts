'use server'

import { post } from '@/util/api'

export const submitContact = (data: object) => post('contacts', data)
