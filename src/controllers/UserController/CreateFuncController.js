let CreateFuncService = require('../../services/UserService/CreateFuncService');

class CreateFuncController {
    async handle(request, response) {
        const { fkEmpresa, nome, email, pass } = request.body;

        const service = new CreateFuncService();

        try {
            const result = await service.execute(fkEmpresa, nome, email, pass);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateFuncController;