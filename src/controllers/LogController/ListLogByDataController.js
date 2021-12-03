const ListLogByDataService = require("../../services/LogService/ListLogByDataService");

class ListLogByDataController {
    async handle(request, response) {
        const { idMaquina } = request.params;
        const { date } = request.body;

        const service = new ListLogByDataService();

        try {
            const result = await service.execute(parseInt(idMaquina), date);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListLogByDataController;