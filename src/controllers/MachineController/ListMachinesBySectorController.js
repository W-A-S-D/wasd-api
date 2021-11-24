const ListMachinesBySectorService = require("../../services/MachineService/ListMachinesBySectorService");


class ListMachinesBySectorController {
    async handle(request, response) {
        const { idSetor } = request.params;

        const service = new ListMachinesBySectorService();

        try {
            const result = await service.execute(parseInt(idSetor));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListMachinesBySectorController;