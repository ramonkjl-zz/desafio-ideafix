import { NoteRequest } from "../database/notes-database"
import { NoteRepository } from "./note-repository"

const makeSut = () => {
  const sut = new NoteRepository()
  return { sut }
}

describe('', () => {
  test('Should return the same information with an id', async () => {
    const { sut } = makeSut()

    const note: NoteRequest = {
      title: 'Any Title',
      text: 'Any text'
    }

    const receivedNote = await sut.add(note)

    const expectedNote = {
      id: '',
      title: 'Any Title',
      text: 'Any text'
    }

    receivedNote.id = ''

    expect(expectedNote).toEqual(receivedNote)
  })
})
