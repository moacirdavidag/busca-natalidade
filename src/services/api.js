import axios from "axios";

export const apiDadosNatalidade = axios.create({
  baseURL: `https://servicodados.ibge.gov.br/api/v3/agregados/105/periodos/2010/variaveis/1001515`,
});

export const apiLocalidades = axios.create({
  baseURL: `https://servicodados.ibge.gov.br/api/v1/localidades/`
})