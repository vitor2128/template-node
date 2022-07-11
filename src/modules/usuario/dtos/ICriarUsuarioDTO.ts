interface ICriarUsuarioDTO {
  nome_completo: string;
  email: string;
  senha_hash: string;
  funcao: string;
}

export { ICriarUsuarioDTO };
