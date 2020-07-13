import { HttpRequest, HttpResponse } from '../protocols/https'
import { MissingParamError } from '../errors/missing-param-error'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body?.name) {
      return {
        body: new MissingParamError('name'),
        statusCode: 400
      }
    }

    if (!httpRequest.body?.email) {
      return {
        body: new MissingParamError('email'),
        statusCode: 400
      }
    }
  }
}
