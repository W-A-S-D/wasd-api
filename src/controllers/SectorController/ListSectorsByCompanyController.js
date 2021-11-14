let ListSectorsByCompanyService = require('../../services/SectorService/ListSectorsByCompanyService');


class ListSectorsByCompanyController {
    handle = async(request, response) => {

        const { fk_empresa } = request.body;

        const service = new ListSectorsByCompanyService();

        try {
            const result = await service.execute(fk_empresa);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListSectorsByCompanyController;