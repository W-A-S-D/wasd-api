const ListMachinesService = require("../../services/MachineService/ListMachinesService");


class ListMachinesByStatusController {
    async handle(request, response) {
        const { user_id } = request;

        const service = new ListMachinesService();

        try {
            const result = await service.execute(parseInt(user_id));

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

module.exports = ListMachinesByStatusController;