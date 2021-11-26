const prisma = require("../../prisma");

class ListLogDiscoByLogService {
    async execute(idLog, idDisco) {
        const logs = await prisma.log_disco.findFirst({
            where: {
                fk_log: idLog,
                fk_disco: idDisco
            },
            include: {
                disco: true
            }
        })

        if (!logs) {
            throw new Error("Impossible to reach")
        }

        return logs;
    }
}

module.exports = ListLogDiscoByLogService;