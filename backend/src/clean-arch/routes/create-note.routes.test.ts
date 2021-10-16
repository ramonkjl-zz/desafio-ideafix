import { HttpRequest } from "../http/http-types"
import { CreateNoteRouter } from "./create-note.routes"

describe('CreateNoteRouter()', () => {
  test('Should return a object with statusCode 200', async () => {
    const request: HttpRequest = {
      body: {
        title: 'Any Title',
        text: 'Any text'
      }
    }

    const sut = new CreateNoteRouter()
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
