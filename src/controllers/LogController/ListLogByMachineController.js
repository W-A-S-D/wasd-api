const ListLogByMachineService = require("../../services/LogService/ListLogByMachineService");

class ListLogByMachineController {
    async handle(request, response) {
        const { idMaquina } = request.params;

        const service = new ListLogByMachineService();

        try {
            const result = await service.execute(parseInt(idMaquina));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListLogByMachineController;