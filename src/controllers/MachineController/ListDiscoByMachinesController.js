const ListDiscoByMachinesService = require("../../services/MachineService/ListDiscoByMachinesService");

class ListDiscoByMachineController {
    async handle(request, response) {
        const { idMaquina } = request.params;

        const service = new ListDiscoByMachinesService();

        try {
            const result = await service.execute(parseInt(idMaquina));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListDiscoByMachineController;