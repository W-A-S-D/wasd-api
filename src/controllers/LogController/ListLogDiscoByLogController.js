const ListLogDiscoByLogService = require("../../services/LogService/ListLogDiscoByLogService");

class ListLogDiscoByLogController {
    async handle(request, response) {
        const { idLog } = request.params;

        const service = new ListLogDiscoByLogService();

        try {
            const result = await service.execute(parseInt(idLog));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListLogDiscoByLogController;