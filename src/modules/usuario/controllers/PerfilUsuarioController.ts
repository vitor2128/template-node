import { Request, Response } from "express";

import { PerfilUsuarioUseCase } from "../services/PerfilUsuarioUseCase";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

class PerfilUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.id_usuario;

    const usuarioRepository = new UsuarioRepository();
    const usuarioService = new PerfilUsuarioUseCase(usuarioRepository);

    const perfilUsuario = await usuarioService.execute(id);

    return response.status(200).json(perfilUsuario);
  }
}

export { PerfilUsuarioController };
