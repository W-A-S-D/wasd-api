let prisma = require("../../prisma")


class ListUsersWithoutSectorService {
    execute = async() => {
        const usersList = await prisma.usuario.findMany({
            select: {
                usuario_id: true,
                nome: true,
            },
            where: {
                setor: {
                    none: {},
                },
                nivelAcesso: 2

            }
        });

        if (!usersList) {
            throw new Error("Impossible to reach");
        }

        return usersList;

    }
}


module.exports = ListUsersWithoutSectorService;