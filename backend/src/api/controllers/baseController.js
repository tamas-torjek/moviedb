import Logger from '#logger';

export default class BaseController {
  constructor(request, response) {
    this.init(request, response);
  }

  init(request, response) {
    this.request = request;
    this.response = response;
  }

  handleResponse(body, status = 200) {
    if (typeof status !== 'number') {
      throw new Error('status must be number!');
    }

    if (!['object', 'string'].includes(typeof body)) {
      throw new Error('body must be an object or a string!');
    }

    return this.response.status(status).json(body);
  }

  handleErrorResponse(error) {
    Logger.error(error);
    return this.handleResponse(error, 500);
  }
}
