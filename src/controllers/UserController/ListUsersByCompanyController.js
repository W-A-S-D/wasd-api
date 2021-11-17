const ListUsersByCompanyService = require('../../services/UserService/ListUsersByCompanyService');

class ListUsersByCompanyController {
     async handle(request, response) {
        const { user_id } = request;

        const service = new ListUsersByCompanyService();

        try {
            const result = await service.execute(parseInt(user_id));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListUsersByCompanyController;