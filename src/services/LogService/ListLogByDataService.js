const prisma = require("../../prisma");

class ListLogByDataService {
  async execute(idMachine, date) {
    const log = await prisma.log.findMany({
      where: {
        fk_maquina: idMachine,
        criado: {
          gte:  new Date(date),
          lt: new Date(date + "T23:59:59Z")
        }
      },
      include: {
        maquina: true
      }
    })

    if (!log) {
      throw new Error("Impossible to reach")
    }
    console.log(log)

    return log;
  }
}

module.exports = ListLogByDataService;