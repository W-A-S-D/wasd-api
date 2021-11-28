const FindSectorStatusByMachinesService = require("../../services/SectorService/FindSectorStatusByMachinesService");

class FindSectorStatusByMachinesController {
    async handle(request, response) {
        const { idSector } = request.params;

        const service = new FindSectorStatusByMachinesService();

        try {
            const result = await service.execute(parseInt(idSector));

            return response.json(result)
        } catch (error) {
            return response.json(error);
        }
    }
}

module.exports = FindSectorStatusByMachinesController;