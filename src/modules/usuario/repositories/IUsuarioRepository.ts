import { ICriarUsuarioDTO } from "../dtos/ICriarUsuarioDTO";
import { Usuario } from "../entities/Usuario";

interface IUsuarioRepository {
  criarUsuario(data: ICriarUsuarioDTO): Promise<void>;
  buscarUsuarioPorEmail(email: string): Promise<Usuario>;
  buscarUsuarioPorId(id: string): Promise<Usuario>;
  buscarTodosUsuarios(): Promise<Usuario[]>;
}

export { IUsuarioRepository };
