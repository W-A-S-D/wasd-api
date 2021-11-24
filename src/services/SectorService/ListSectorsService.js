let prisma = require("../../prisma")


class ListSectorsService {
    execute = async() => {
        const sectorsList = await prisma.setor.findMany({
            select: {
                setor_id: true,
                jogo: true,
                avatar_jogo: true,
                usuario: {
                    select: {
                        nome: true,
                    }
                }
            }
        })

        if (!sectorsList) {
            throw new Error("Impossible to reach")
        }

        return sectorsList;

    }
}


module.exports = ListSectorsService;