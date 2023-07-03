import { fetchAPI } from './getCep';

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
  test('Deve retornar os dados quando passamos um cep válido', async () => {
    const addres = await fetchAPI('40243045');
    expect(addres.cep).toBe('40243-045');
    expect(addres.logradouro).toBe('Rua Frederico Costa');
    expect(addres.bairro).toBe('Engenho Velho de Brotas');
    expect(addres.uf).toBe('BA');
  });

  test('Deve aceitar ceps com ou sem hífen', async () => {
    let addres = await fetchAPI('40243045');
    expect(addres.cep).toBe('40243-045');

    addres = await fetchAPI('40243-045');
    expect(addres.cep).toBe('40243-045');
  });
});

describe('Quando a requisição é rejeitada, ela deve retornar erro', () => {
  test('Deve lançar um erro "Você precisa passar um CEP" quando receber um cep vazio', async () => {
    const emptyCep = '';
    await expect(fetchAPI(emptyCep)).rejects.toThrow(
      new Error('Você precisa passar um CEP'),
    );
  });

  test('Deve lançar um erro quando passar cep em formato inválido', async () => {
    const invalidCep = 'XXXXX-XXX';
    const invalidCepLessDigits = '00000-00';
    const invalidCepMoreDigits = '00000-0000';

    await expect(fetchAPI(invalidCep)).rejects.toThrow();
    await expect(fetchAPI(invalidCepLessDigits)).rejects.toThrow();
    await expect(fetchAPI(invalidCepMoreDigits)).rejects.toThrow();
  });
});
