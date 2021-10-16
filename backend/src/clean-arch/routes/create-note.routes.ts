import { HttpRequest, HttpResponse } from "../http/http-types";
import { CreateNoteUseCase } from "../usecases/create-note";
import { BaseRouter } from "./base-router";

export class CreateNoteRouter implements BaseRouter {

  constructor(private createNoteUseCase: CreateNoteUseCase) { }

  async route(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { title, text } = httpRequest.body

    const createdNote = await this.createNoteUseCase.create(title, text)

    return {
      statusCode: 200,
      body: createdNote
    }
  }
}
