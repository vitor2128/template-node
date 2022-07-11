interface Usuario {
  id: string;
  nome_completo: string;
  email: string;
  senha_hash: string;
  funcao: string;
}

export { Usuario };
