// Logic of the user endpoints 

import { NextFunction, Response } from "express";

class UserController {
  constructor() {}

  async getUsers( req: any, res: Response, next: NextFunction){
    return res.status(200).json({
      success: true,
      data: [
        {
          name: 'Mohamed Rabia'
        },
        {
          name: 'Abdallah'
        }
      ]
    })
  }
}

export default new UserController()