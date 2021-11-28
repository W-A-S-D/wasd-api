let prisma = require("../../prisma")
const FindUserByIdService = require("../UserService/FindUserByIdService");
const FindSectorStatusByMachinesService = require("./FindSectorStatusByMachinesService");

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

        const newList = await Promise.all(sectorsList.map(async (s) => (
            {
                setor_id: s.setor_id,
                jogo: s.jogo,
                nome: s.usuario.nome,
                avatar: s.avatar_jogo,
                status: await new FindSectorStatusByMachinesService().execute(s.setor_id)
            }
        )))

        console.log(newList)

        return newList;

    }
}


module.exports = ListSectorsByCompanyService;