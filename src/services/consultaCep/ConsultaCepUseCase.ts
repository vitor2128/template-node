import axios from "axios";

// TODO: Entrada da função de busca
interface IRequest {
  cep: string;
}

// TODO: Retorno da consulta realizada
interface IResponse {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  coordinates: {
    longitude: string;
    latitude: string;
  };
}

export class ConsultaCepUseCase {
  async execute({ cep }: IRequest): Promise<IResponse> {
    const { data } = await axios.get<IResponse>(
      `https://brasilapi.com.br/api/cep/v2/${cep}`
    );

    return data;
  }
}
