export const fetchAPI = async (cep) => {
  if (!cep) throw new Error('Você precisa passar um CEP');

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();

  if (data.erro) throw new Error('Erro de cep inválido');

  return data;
};
