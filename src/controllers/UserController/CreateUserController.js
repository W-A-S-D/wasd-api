let CreateUserService = require('../../services/UserService/CreateUserService');

class CreateUserController {
    async handle(request, response) {
        const { fk_empresa, nome, email, pass, access, avatar_url } = request.body;

        const service = new CreateUserService();

        console.log(request.body);
        try {
            const result = await service.execute(fk_empresa, nome, email, pass, access, avatar_url);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateUserController;