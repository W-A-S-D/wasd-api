let AuthenticateUserService = require('../services/AuthenticateUserService');

class AuthenticateUserController {
    async handle(request, response) {
        const { email, password } = request.body;

        const service = new AuthenticateUserService();
        
        try {
            const token = await service.execute(email, password)

            return response.json({ token: token })
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = AuthenticateUserController;