const prisma = require("../prisma");

class ListMachinesService {
    async execute(idEmpresa) {
        const machinesList = await prisma.maquina.findMany({
            where : {
                setor: {
                    usuario: {
                        fk_empresa: idEmpresa
                    }
                }
            }
        });

        if (!machinesList) {
            throw new Error("Impossible to reach");
        }

        return machinesList;
    }
}

module.exports = ListMachinesService;