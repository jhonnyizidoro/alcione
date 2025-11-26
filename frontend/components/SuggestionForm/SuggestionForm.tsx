'use client'

import { FC, useCallback, useState } from 'react'

import { submitContact } from '@/util/actions'

import Input from '@/components/Input/Input'
import TextArea from '@/components/TextArea/TextArea'

import styles from './SuggestionForm.module.scss'

const initialData = {
  name: '',
  subject: '',
  contact: '',
  content: '',
}

const SuggestionForm: FC = () => {
  const [data, setData] = useState(initialData)

  const handleSubmit = useCallback(async () => {
    if (!data.name || !data.subject || !data.content || !data.contact) {
      return alert('Preencha todos os campos')
    }

    try {
      await submitContact(data)
      setData(initialData)
      alert('Mensagem recebida, agradecemos o contato.')
    } catch {
      alert(
        'Ocorreu um error. Tente novamente, se o erro persistir, entre em contato.',
      )
    }
  }, [data])

  return (
    <form action={handleSubmit} className={styles.form}>
      <Input
        onChange={(v) => setData((o) => ({ ...o, name: v }))}
        value={data.name}
        placeholder='Seu nome'
      />
      <Input
        onChange={(v) => setData((o) => ({ ...o, contact: v }))}
        value={data.contact}
        placeholder='Contato (celular, whatsapp ou email)'
      />
      <Input
        onChange={(v) => setData((o) => ({ ...o, subject: v }))}
        value={data.subject}
        placeholder='Assunto'
      />
      <TextArea
        onChange={(v) => setData((o) => ({ ...o, content: v }))}
        value={data.content}
        placeholder='Assunto'
      />
      <button type='submit' className={styles.button}>
        Enviar sugestão
      </button>
    </form>
  )
}

export default SuggestionForm
