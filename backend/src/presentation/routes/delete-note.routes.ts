import { HttpRequest, HttpResponse } from "../../http/http-types";
import { DeleteNoteUseCase } from "../../domain/usecases/delete-note";
import { BaseRouter } from "./base-router";

export class DeleteNoteRouter implements BaseRouter {
  constructor(private deleteNoteUseCase: DeleteNoteUseCase) { }

  async route(httpRequest: HttpRequest): Promise<HttpResponse> {

    const { id } = httpRequest.params

    const deletedNote = await this.deleteNoteUseCase.delete(id)

    return {
      statusCode: 200,
      body: deletedNote
    }
  }
}
