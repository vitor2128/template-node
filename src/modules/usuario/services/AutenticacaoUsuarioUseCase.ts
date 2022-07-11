import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";
import { IUsuarioResponseDTO } from "@modules/usuario/dtos/IUsuarioResponseDTO";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";

import auth_config from "@config/auth";
import { UsuarioRepository } from "@modules/usuario/repositories/UsuarioRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  usuario: IUsuarioResponseDTO;
  accessToken: string;
}

class AutenticacaoUsuarioUseCase {
  private usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async execute({ email, senha }: IRequest): Promise<IResponse> {
    const usuarioExiste = await this.usuarioRepository.buscarUsuarioPorEmail(
      email
    );

    if (!Boolean(usuarioExiste)) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(senha, usuarioExiste.senha_hash);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!", 401);
    }

    const accessToken = sign({ email }, auth_config.secret_token, {
      expiresIn: auth_config.expires_in_token,
      subject: usuarioExiste.id,
    });

    const usuario: IUsuarioResponseDTO = {
      id: usuarioExiste.id,
      nome_completo: usuarioExiste.nome_completo,
      email: usuarioExiste.email,
      funcao: usuarioExiste.funcao,
    };

    return {
      usuario,
      accessToken,
    };
  }
}

export { AutenticacaoUsuarioUseCase };
