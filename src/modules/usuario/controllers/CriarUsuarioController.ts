import { Request, Response } from "express";

import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { CriarUsuarioUseCase } from "../services/CriarUsuarioUseCase";

class CriarUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, funcao, nome_completo, senha } = request.body;

    const usuarioRepository = new UsuarioRepository();
    const usuarioService = new CriarUsuarioUseCase(usuarioRepository);

    await usuarioService.execute({
      email,
      funcao,
      nome_completo,
      senha,
    });

    return response.status(201).send();
  }
}

export { CriarUsuarioController };
