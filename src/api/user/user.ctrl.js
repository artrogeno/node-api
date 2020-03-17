import BaseResponse from '../../shared/base/response'
import { User } from '../../shared/models'

class UserController extends BaseResponse {
  constructor() {
    super()
    this.User = User
  }

  async index(req, res, next) {
    try {
      const data = await this.User.find()
      this.sendResponse(res, next, {
        data,
        messages: 'OK!',
        status: 201,
      })
    } catch (error) {
      this.sendError(res, next, {
        messages: 'NOK!',
        status: 401,
      })
    }
  }

  async store(req, res, next) {
    const {
      body: { username, email, nickname },
    } = req
    try {
      if (username && email && nickname) {
        await this.User.create({ username, email, nickname })
        this.sendResponse(res, next, {
          messages: 'OK!',
          status: 201,
        })
      } else {
        this.sendError(res, next, {
          messages: 'SET BODY PARAMS!',
          status: 402,
        })
      }
    } catch (error) {
      this.sendError(res, next, {
        messages: 'NOK!',
        status: 401,
      })
    }
  }
}

export default new UserController()
