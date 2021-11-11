let CreateCompanyService = require('../services/CreateCompanyService');

class CreateCompanyController {
    async handle(request, response) {
        const { nome, email, cnpj, logradouro, numero, bairro, cidade, uf, cep, telefone } = request.body;
       


        const service = new CreateCompanyService();

        try {
            const result = await service.execute(nome, email, cnpj, logradouro, numero, bairro, cidade, uf, cep, telefone);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateCompanyController;