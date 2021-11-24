let prisma = require("../../prisma")
const FindUserByIdService = require("../UserService/FindUserByIdService");

class ListSectorsByCompanyService {
    execute = async(user_id) => {
        const user = await new FindUserByIdService().execute(parseInt(user_id));

        const sectorsList = await prisma.setor.findMany({
            where: {
                usuario: {
                    empresa: {
                        empresa_id: user.fk_empresa
                    }
                }
            },
            select: {
                setor_id: true,
                jogo: true,
                avatar_jogo: true,
                usuario: {
                    select: {
                        nome: true,
                    }
                }
            },

        })

        if (!sectorsList) {
            throw new Error("Impossible to reach")
        }

        return sectorsList;

    }
}


module.exports = ListSectorsByCompanyService;