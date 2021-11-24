const DeleteUserService = require("../../services/UserService/DeleteUserService");


class DeleteUserController {
    async handle(request, response) {
        const { idUser } = request.params;

        const service = new DeleteUserService();

        try {
            const result = service.execute(parseInt(idUser));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = DeleteUserController;