let prisma = require("../../prisma")
let bcrypt = require("bcryptjs");

class UpdateUserService {
    async execute(idUser, email, senha) {
        const passwordHash = await bcrypt.hash(senha, 8)

        const user = await prisma.usuario.update({
            where: {
                usuario_id: idUser
            },
            data: {
                email,
                senha: passwordHash
            }
        })

        return user;
    }
}

module.exports = UpdateUserService;