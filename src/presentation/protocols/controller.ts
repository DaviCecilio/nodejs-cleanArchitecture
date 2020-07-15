import { HttpRequest, HttpResponse } from '../protocols/https'

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>

}
