const ListMachineByIdService = require("../../services/MachineService/ListMachineByIdService");


class ListMachinesByIdController {
    async handle(request, response) {
        const { idMaquina } = request.params;

        const service = new ListMachineByIdService();

        try {
            const result = await service.execute(parseInt(idMaquina));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListMachinesByIdController;