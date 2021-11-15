const prisma = require("../../prisma");

class DeleteUserService {
    async execute(idUser) {
        const user = await prisma.usuario.update({
            where: {
                usuario_id: idUser
            },
            data: {
                nivelAcesso: 2
            }
        })

        return user;
    }
}

module.exports = DeleteUserService;