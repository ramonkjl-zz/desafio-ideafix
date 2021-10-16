import { NoteRepository } from "../../infra/repositories/note-repository"
import { CreateNoteUseCase } from "./create-note"

describe('CreateNoteUseCase()', () => {
  test('Should ', async () => {
    const repo = new NoteRepository()
    const sut = new CreateNoteUseCase(repo)

    const expected = {
      "id": "",
      "text": "Any text",
      "title": "Any Title"
    }

    const received = await sut.create('Any Title', 'Any text')
    received.id = ""

    expect(expected).toEqual(received)
  })
})
