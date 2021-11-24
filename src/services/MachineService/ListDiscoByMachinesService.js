const prisma = require("../../prisma");

class ListDiscoByMachinesService {
    async execute(idMachine) {
        const discosList = await prisma.disco.findMany({
            where: {
                fk_maquina: idMachine
            }
        })

        if (!discosList) {
            throw new Error("Impossible to reach")
        }

        return discosList;
    }
}

module.exports = ListDiscoByMachinesService;