let prisma = require("../../prisma")


class CreateSectorService {
    execute = async(fk_usuario, jogo, avatar_jogo) => {
        let sector = await prisma.setor.findFirst({
            where: {
                jogo
            }
        })

        if (!sector) {
            sector = await prisma.setor.create({
                data: {
                    fk_usuario,
                    jogo,
                    avatar_jogo
                }
            });
        } else {
            throw new Error("Sector already exists");
        }

        return sector;

    }
}


module.exports = CreateSectorService;