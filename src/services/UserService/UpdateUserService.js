let prisma = require("../../prisma")

class UpdateUserService {
    async execute(idUser, nome, avatar, email, senha) {
        const passwordHash = await bcrypt.hash(senha, 8)

        const user = await prisma.usuario.update({
            where: {
                usuario_id: idUser
            },
            data: {
                nome,
                email,
                senha: passwordHash,
                avatar
            }
        })

        return user;
    }
}

module.exports = UpdateUserService;