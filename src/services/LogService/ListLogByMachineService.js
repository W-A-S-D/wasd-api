const prisma = require("../../prisma");

class ListLogByMachineService {
    async execute(idMachine) {
        const log = await prisma.log.findMany({
            take: 10,
            orderBy: {
              criado: "desc",
            },
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