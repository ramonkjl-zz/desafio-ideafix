import { NoteRepository } from "../../infra/repositories/note-repository"
import { DeleteNoteUseCase } from "./delete-note"
import { FindNotesUseCase } from "./find-notes"

describe('', () => {
  test('Should return object with delete many and boolean error.', async () => {

    const repo = new NoteRepository()
    const notes = await new FindNotesUseCase(repo).findAll()
    const sut = new DeleteNoteUseCase(repo)

    const deletedNote = await sut.delete(notes[0].id)

    const expected = { "deletedMany": 1, "error": false }

    expect(expected).toEqual(deletedNote)
  })
})
