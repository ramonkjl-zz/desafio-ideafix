import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

import { NoteData } from "../@types/index.type"

type Props = {
    children: ReactNode
}

type ContextNotesType = {
    handleOpenModal(noteID: string): void
    isOpenDeleteModal: boolean
    isDeleteConfirm: boolean
    deleteConfirm(isDelete: boolean): void
    allMyNotes: Array<NoteData>
    setAllMyNotes: Dispatch<SetStateAction<NoteData[]>>
    loadMyNotes(): Promise<void>
}

export const ContextNotes = createContext({} as ContextNotesType)

export const ContextNotesProvider = ({ children }: Props) => {
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [isDeleteConfirm] = useState(false)
    const [noteIdDelete, setNoteIdDelete] = useState('')
    const [allMyNotes, setAllMyNotes] = useState<Array<NoteData>>()

    const loadMyNotes = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URI_API}/all-notes`)
        const data = await response.json()

        setAllMyNotes(data)
    }

    const deleteConfirm = (isDelete: boolean) => {
        isDelete
            ? handleDeleteNote(noteIdDelete)
            : resetConfirmation()
    }

    const resetConfirmation = () => {
        setNoteIdDelete('')
        setIsOpenDeleteModal(preState => !preState)
    }

    const handleDeleteNote = async (noteID: string) => {
        await fetch(`${process.env.NEXT_PUBLIC_URI_API}/delete-note/${noteID}`, { method: 'DELETE' })

        resetConfirmation()
        loadMyNotes()
    }

    const handleOpenModal = (noteID: string) => {
        setNoteIdDelete(noteID)
        setIsOpenDeleteModal(preState => !preState)
    }

    return (
        <ContextNotes.Provider value={{
            handleOpenModal,
            isOpenDeleteModal,
            isDeleteConfirm,
            deleteConfirm,
            allMyNotes,
            setAllMyNotes,
            loadMyNotes
        }}>
            {children}
        </ContextNotes.Provider>
    )
}
