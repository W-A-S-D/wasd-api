let prisma = require("../../prisma")
let bcrypt = require("bcryptjs");

class CreateFuncService {
    async execute(fk_empresa, nome, email, pass) {

        let user = await prisma.usuario.findFirst({
            where: {
                email,
                nome
            }
        })

        const passwordHash = await bcrypt.hash(pass, 8)

        if (!user) {
            user = await prisma.usuario.create({
                data: {
                    fk_empresa,
                    nome,
                    email,
                    senha: passwordHash,
                    nivelAcesso: 2
                }
            })
        }

        return user
    }
}

module.exports = CreateFuncService;