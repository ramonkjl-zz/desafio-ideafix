import { CreateNoteUseCase } from "../../domain/usecases/create-note"
import { HttpRequest } from "../../http/http-types"
import { NoteRepository } from "../../infra/repositories/note-repository"
import { CreateNoteRouter } from "./create-note.routes"

describe('CreateNoteRouter()', () => {
  test('Should return a object with statusCode 200', async () => {
    const request: HttpRequest = {
      body: {
        title: 'Any Title',
        text: 'Any text'
      }
    }

    const repository = new NoteRepository()
    const useCase = new CreateNoteUseCase(repository)
    const sut = new CreateNoteRouter(useCase)

    const response = await sut.route(request)

    const expected = {
      "body": {
        "id": "",
        "text": "Any text",
        "title": "Any Title"
      },
      "statusCode": 200
    }

    response.body.id = ""

    expect(response).toEqual(expected)
  })
})
