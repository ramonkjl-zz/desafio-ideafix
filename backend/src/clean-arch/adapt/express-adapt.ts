import { Request, Response } from "express";

import { BaseRouter } from "../routes/base-router";

export class ExpressAdapt {
  static adapt(router: BaseRouter) {
    return async (req: Request, res: Response) => {
      console.log(req.body)
      const httpRequest = {
        body: req.body,
        params: req.params
      }

      const httpResponse = await router.route(httpRequest)
      return res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
