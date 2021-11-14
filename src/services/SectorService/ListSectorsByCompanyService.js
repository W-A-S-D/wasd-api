let prisma = require("../../prisma")


class ListSectorsByCompanyService {
    execute = async(fkCompany) => {
        const sectorsList = await prisma.setor.findMany({
            where: {
                usuario: {
                    empresa: {
                        empresa_id: fkCompany
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