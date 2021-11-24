const prisma = require("../../prisma");

class ListLogByMachineService {
    async execute(idMachine) {
        const log = await prisma.log.findMany({
            where: {
                fk_maquina: idMachine
            },
            include: {
                maquina: true
            }
        })

        if (!log) {
            throw new Error("Impossible to reach")
        }

        return log;
    }
}

module.exports = ListLogByMachineService;