const prisma = require("../../prisma");

class ListLogDiscoByLogService {
  async execute(idDisco) {
    const logs = await prisma.log_disco.findMany({
      take: 10,
      orderBy: {
        criado: "desc",
      },
      where: {
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