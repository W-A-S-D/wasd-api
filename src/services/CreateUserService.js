let prisma = require("../prisma")
let bcrypt = require("bcryptjs");

class CreateUserService {
    async execute(nome, email, pass, acess, avatar_url) {

        let user = await prisma.usuario.findFirst({
            where: {
                email
            }
        })

        const passwordHash = await bcrypt.hash(pass, 0)


        if (!user) {
            user = await prisma.usuario.create({
                data: {
                    fk_empresa: 1,
                    nome,
                    email,
                    senha: pass,
                    nivelAcesso: 1,
                    avatar: avatar_url,
                    criado: new Date("2020-03-19T14:21:00+0200"),
                    atualizado: new Date("2020-03-19T14:21:00+0200")
                }
            })
        }

        return user
    }
}

module.exports = CreateUserService