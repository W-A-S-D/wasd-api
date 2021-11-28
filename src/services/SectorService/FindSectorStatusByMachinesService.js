const prisma = require("../../prisma");

class FindSectorStatusByMachinesService {
  async execute(idSector) {
      
    let normalMachines = await prisma.maquina.findMany({
      where: {
        fk_setor: idSector,
        status: "Normal",
      },
    });

    let attentionMachines = await prisma.maquina.findMany({
      where: {
        fk_setor: idSector,
        status: "Atenção",
      },
    });

    let alertMachines = await prisma.maquina.findMany({
      where: {
        fk_setor: idSector,
        status: "Alerta",
      },
    });

    if(normalMachines.length > alertMachines.length && normalMachines.length > attentionMachines.length) {
        return "normal"
    } else if (alertMachines.length > normalMachines.length && alertMachines.length > attentionMachines.length) {
        return "alert"
    } else {
        return "warning"
    }
  }
}

module.exports = FindSectorStatusByMachinesService;
