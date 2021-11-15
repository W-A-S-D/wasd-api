const ListUsersByCompanyService = require('../../services/UserService/ListUsersByCompanyService');

class ListUsersByCompanyController {
     async handle(request, response) {
        const { fkCompany } = request.params;

        const service = new ListUsersByCompanyService();

        try {
            const result = await service.execute(parseInt(fkCompany));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListUsersByCompanyController;