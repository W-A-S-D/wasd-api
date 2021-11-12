const ListMachinesService = require("../services/ListMachinesService");


class ListMachinesByStatusController {
    async handle(request, response) {
        const { idEmpresa } = request.params;

        const service = new ListMachinesService;

        try {
            const result = await service.execute(parseInt(idEmpresa));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListMachinesByStatusController;