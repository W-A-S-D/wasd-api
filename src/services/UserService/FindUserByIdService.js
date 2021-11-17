const prisma = require("../../prisma");


class FindUserByIdService {
    async execute(id) {
        const user = await prisma.usuario.findFirst({
            where: {
                usuario_id: id
            }
        })

        if(!user) {
            throw new Error("Non existing user")
        }

        return user;
    }
}

module.exports = FindUserByIdService;