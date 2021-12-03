const ListLogDiscoByDataService = require("../../services/LogService/ListLogDiscoByDataService");

class ListLogDiscoByDataController {
    async handle(request, response) {
        const { idDisco } = request.params;
        const { date } = request.body;

        const service = new ListLogDiscoByDataService();

        try {
            const result = await service.execute(parseInt(idDisco), date);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListLogDiscoByDataController;