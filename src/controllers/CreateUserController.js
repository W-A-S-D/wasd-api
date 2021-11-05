let CreateUserService = require('../services/CreateUserService');

class CreateUserController {
    async handle(request, response) {
        const { name, email, password, Acess, avatar } = request.body;

        const service = new CreateUserService();

        try {
            const result = await service.execute(name, email, password, Acess, avatar);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateUserController;