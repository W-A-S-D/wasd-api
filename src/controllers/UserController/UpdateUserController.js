const UpdateUserService = require("../../services/UserService/UpdateUserService");


class UpdateUserController {
    async handle(request, response) {
        const { nome, avatar, email, senha } = request.body;
        const { user_id } = request;

        const service = new UpdateUserService();

        try {
            const result = service.execute(parseInt(user_id), nome, avatar, email, senha)

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = UpdateUserController;