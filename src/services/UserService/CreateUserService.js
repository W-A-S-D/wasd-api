let prisma = require("../../prisma")
let bcrypt = require("bcryptjs");

class CreateUserService {
    async execute(fk_empresa, nome, email, pass, access, avatar_url) {

        let user = await prisma.usuario.findFirst({
            where: {
                email
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
                    nivelAcesso: access,
                    avatar: avatar_url,
                    criado: new Date("2020-03-19T14:21:00+0200"),
                    atualizado: new Date("2020-03-19T14:21:00+0200")
                }
            })
        }

        return user
    }
}

module.exports = CreateUserService;