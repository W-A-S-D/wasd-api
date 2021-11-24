let AuthenticateUserService = require('../../services/UserService/AuthenticateUserService');

class AuthenticateUserController {
    async handle(request, response) {
        const { email, password } = request.body;

        const service = new AuthenticateUserService();

        try {
            const result = await service.execute(email, password)

            return response.json(result)
        } catch (error) {
            return response.status(401).json({ error: error.message })
        }
    }
}

module.exports = AuthenticateUserController;