import BaseResponse from '../../shared/base/response'

class UserController extends BaseResponse {
  constructor() {
    super()
  }

  index(req, res, next) {
    const params = {
      messages: 'OK!',
      status: 201,
    }
    this.sendResponse(res, next, params)
  }

  store(req, res, next) {
    const { body } = req
    const params = {
      messages: 'OK!',
      data: body,
      status: 201,
    }
    this.sendResponse(res, next, params)
  }
}

export default new UserController()
