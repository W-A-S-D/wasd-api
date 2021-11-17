const prisma = require("../../prisma");
const FindUserByIdService = require("../UserService/FindUserByIdService");

class ListMachinesService {
    async execute(idEmpresa) {
        const user = await new FindUserByIdService().execute(parseInt(user_id));

        const machinesList = await prisma.maquina.findMany({
            where: {
                setor: {
                    usuario: {
                        fk_empresa: user.fk_empresa
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