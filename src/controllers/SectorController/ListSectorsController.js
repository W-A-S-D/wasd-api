let ListSectorsService = require('../../services/SectorService/ListSectorsService');


class ListSectorsController {
    handle = async(request, response) => {
        const service = new ListSectorsService();

        try {
            const result = await service.execute();

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListSectorsController;