import { HttpRequest, HttpResponse } from "../http/http-types";

export interface BaseRouter {
  route(httpRequest: HttpRequest): Promise<HttpResponse>
}
