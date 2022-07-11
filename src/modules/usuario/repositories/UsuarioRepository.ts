import { database } from "@shared/infra/database";
import { IUsuarioRepository } from "@modules/usuario/repositories/IUsuarioRepository";
import { ICriarUsuarioDTO } from "@modules/usuario/dtos/ICriarUsuarioDTO";
import { Usuario } from "../entities/Usuario";

class UsuarioRepository implements IUsuarioRepository {
  async criarUsuario(data: ICriarUsuarioDTO): Promise<void> {
    // TODO: a palavra "usuarios" que está apois database se refere a tabela do banco de dados é a mesma colocada na migration em createTable

    // TODO: a palavra "Promise" indica o retorno da função e entre os sinais de <> fica o tipo de retorno que pode ser string, number, objeto ou array de objeto

    await database("usuarios").insert(data);
  }

  async buscarUsuarioPorEmail(email: string): Promise<Usuario> {
    const usuario = await database<Usuario>("usuarios").where({
      email,
    });

    return usuario[0];
  }

  async buscarUsuarioPorId(id: string): Promise<Usuario> {
    const usuario = await database<Usuario>("usuarios").where({
      id,
    });

    return usuario[0];
  }

  async buscarTodosUsuarios(): Promise<Usuario[]> {
    const usuario = await database<Usuario>("usuarios");

    return usuario;
  }
}

export { UsuarioRepository };
