import { CreateNoteUseCase } from "./create-note"

describe('CreateNoteUseCase()', () => {
  test('Should ', async () => {
    const sut = new CreateNoteUseCase()

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
