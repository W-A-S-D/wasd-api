const prisma = require("../prisma");

class ListMachinesBySectorService {
    async execute(idSetor) {
        const machinesList = await prisma.maquina.findMany({
            where: {
                fk_setor: idSetor
            }
        })

        if (!machinesList) {
            throw new Error("Impossible to reach")
        }

        return machinesList;
    }
}

module.exports = ListMachinesBySectorService;