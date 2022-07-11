import { AppError } from "@shared/errors/AppError";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { hash } from "bcrypt";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

interface IRequest {
  nome_completo: string;
  email: string;
  senha: string;
  funcao: string;
}

class CriarUsuarioUseCase {
  private usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async execute({
    email,
    funcao,
    nome_completo,
    senha,
  }: IRequest): Promise<void> {
    const usuarioExiste = await this.usuarioRepository.buscarUsuarioPorEmail(
      email
    );

    if (usuarioExiste) {
      throw new AppError("Usuario já existe");
    }

    const senha_hash = await hash(senha, 10);

    await this.usuarioRepository.criarUsuario({
      email,
      funcao,
      nome_completo,
      senha_hash,
    });
  }
}

export { CriarUsuarioUseCase };
