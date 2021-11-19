const prisma = require("../../prisma");

class ListLogDiscoByLogService {
    async execute(idLog) {
        const logs = await prisma.log_disco.findMany({
            where: {
                fk_log: idLog
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