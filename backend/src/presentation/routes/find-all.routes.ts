import { HttpRequest, HttpResponse } from "../../http/http-types";
import { FindNotesUseCase } from "../../domain/usecases/find-notes";
import { BaseRouter } from "./base-router";

export class FindAllRouter implements BaseRouter {


  constructor(private findUseCase: FindNotesUseCase) {
  }

  async route(httpRequest: HttpRequest): Promise<HttpResponse> {
    const notes = await this.findUseCase.findAll()

    return {
      statusCode: 200,
      body: notes
    }
  }
}
