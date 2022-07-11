import { Request, Response } from "express";
import { AutenticacaoUsuarioUseCase } from "../services/AutenticacaoUsuarioUseCase";
import { UsuarioRepository } from "@modules/usuario/repositories/UsuarioRepository";

class AutenticacaoUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, senha } = request.body;

    const usuarioRepository = new UsuarioRepository();
    const usuarioService = new AutenticacaoUsuarioUseCase(usuarioRepository);

    const usuario = await usuarioService.execute({ email, senha });

    return response.status(200).json(usuario);
  }
}

export { AutenticacaoUsuarioController };
