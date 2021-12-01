let CreateUserService = require('../../services/UserService/CreateUserService');

class CreateUserController {
    async handle(request, response) {
        const { fk_empresa, nome, email, pass } = request.body;

        const service = new CreateUserService();

        console.log(request.body);
        try {
            const result = await service.execute(parseInt(fk_empresa), nome, email, pass);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateUserController;
