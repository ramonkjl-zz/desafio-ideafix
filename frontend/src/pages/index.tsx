import { GetServerSideProps } from 'next'
import { useContext, useEffect, useRef } from 'react'

import { NoteData } from '../@types/index.type'
import { CardNote } from '../components/CardNote'
import { DeleteModal } from '../components/DeleteModal'
import { ContextNotes } from '../contexts/ContextNotes'
import styles from '../styles/home.module.css'

type Props = {
  allServerNotes: Array<NoteData>
}

export default function Home({ allServerNotes }: Props) {

  const { isOpenDeleteModal, allMyNotes, setAllMyNotes, loadMyNotes } = useContext(ContextNotes)

  const refInputTitle = useRef()
  const refTextArea = useRef()

  const handleCreateNote = async () => {
    const inputTitle = (refInputTitle.current as HTMLInputElement)
    const textArea = (refTextArea.current as HTMLTextAreaElement)

    const body = {
      title: inputTitle.value,
      text: textArea.value
    }

    await fetch(`${process.env.NEXT_PUBLIC_URI_API}/create-note`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    loadMyNotes()

    inputTitle.value = ''
    textArea.value = ''
  }

  useEffect(() => {
    if (allServerNotes)
      setAllMyNotes(allServerNotes)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header />
        <nav>
          <h1>
            Bloco de notas
          </h1>
          <div>
            <input
              ref={refInputTitle}
              placeholder="Assunto"
              type="text"
            />
            <textarea
              ref={refTextArea}
              placeholder="Texto"
            />
            <button
              className={styles.btnCreateNote}
              onClick={handleCreateNote}
            >
              CRIAR NOTA
            </button>
          </div>
        </nav>

        <main>
          <h2>
            Suas notas
          </h2>
          <div className={styles.cardsContainer}>
            {
              allMyNotes?.map((note, index) => (
                <CardNote
                  key={index}
                  id={note.id}
                  title={note.title}
                  text={note.text}
                />
              ))
            }
          </div>
        </main>
        <footer />
      </div>
      {
        isOpenDeleteModal && <DeleteModal />
      }
    </div>
  )
}

//Uma das feature do Next.JS a renderização de dados do lado do servidos.
export const getServerSideProps: GetServerSideProps = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_URI_API}/all-notes`)
  const data = await response.json()

  return {
    props: {
      allServerNotes: data
    }
  }
}
