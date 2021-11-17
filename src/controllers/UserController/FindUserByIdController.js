const FindUserByIdService = require("../../services/UserService/FindUserByIdService");

class FindUserByIdController {
     async handle(request, response) {
        const { user_id } = request;

        const service = new FindUserByIdService();

        try {
            const result = await service.execute(parseInt(user_id));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}


module.exports = FindUserByIdController;