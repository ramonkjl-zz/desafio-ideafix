import { generateID } from "../utils/generateID"
import { notesMock } from "./mock"

type NoteData = { //O que vai para o cliente.
  id: string
  title: string
  text: string
}

export type NoteRequest = { //O que vem do cliente.
  title: string
  text: string
}

class NotesDatabase {
  private notes: Array<NoteData> = [...notesMock]

  constructor() { }

  async create(noteRequest: NoteRequest) {
    const newNote: NoteData = {
      id: generateID(),
      ...noteRequest
    }

    this.notes.unshift(newNote)

    return newNote
  }

  async deleteOne(noteID: string) {
    for (const index in this.notes) {
      if (this.notes[index].id === noteID) {
        this.notes.splice(Number(index), 1)

        return { error: false, deletedMany: 1 }
      }
    }

    return { error: false, deletedMany: 0 }
  }

  async findAll() {
    return this.notes
  }
}

export { NotesDatabase }
