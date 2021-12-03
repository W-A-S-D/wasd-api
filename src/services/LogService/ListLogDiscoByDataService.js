const prisma = require("../../prisma");

class ListLogDiscoByDataService {
  async execute(idDisco, date) {
    const log = await prisma.log_disco.findMany({
      where: {
        fk_disco: idDisco,
        criado: {
          gte:  new Date(date),
          lt: new Date(date + "T23:59:59Z")
        }
      },
      include: {
        disco: true
      }
    })

    if (!log) {
      throw new Error("Impossible to reach")
    }

    return log;
  }
}

module.exports = ListLogDiscoByDataService;