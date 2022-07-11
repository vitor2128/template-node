import { Request, Response } from "express";

import { ConsultaCepUseCase } from "./ConsultaCepUseCase";

class ConsultaCepController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cep } = request.params;

    const consultaCepUseCase = new ConsultaCepUseCase();

    const address = await consultaCepUseCase.execute({ cep });

    return response.status(200).json(address);
  }
}

export { ConsultaCepController };
