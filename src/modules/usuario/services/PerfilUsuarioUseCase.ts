import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { IUsuarioResponseDTO } from "@modules/usuario/dtos/IUsuarioResponseDTO";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

interface IResponse {
  usuario: IUsuarioResponseDTO;
}

class PerfilUsuarioUseCase {
  private usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async execute(id: string): Promise<IResponse> {
    const usuario = await this.usuarioRepository.buscarUsuarioPorId(id);

    const usuarioMap: IUsuarioResponseDTO = {
      id: usuario.id,
      nome_completo: usuario.nome_completo,
      email: usuario.email,
      funcao: usuario.funcao,
    };

    return { usuario: usuarioMap };
  }
}

export { PerfilUsuarioUseCase };
