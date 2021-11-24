let ListSectorsByCompanyService = require('../../services/SectorService/ListSectorsByCompanyService');


class ListSectorsByCompanyController {
    handle = async(request, response) => {

        const { user_id } = request;

        const service = new ListSectorsByCompanyService();

        try {
            const result = await service.execute(parseInt(user_id));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListSectorsByCompanyController;