const prisma = require("../../prisma");

class ListMachinesByIdService {
    async execute(idMaquina) {
        const machine = await prisma.maquina.findFirst({
            where: {
                maquina_id: idMaquina
            }
        })

        if (!machine) {
            throw new Error("Impossible to reach")
        }

        return machine;
    }
}

module.exports = ListMachinesByIdService;