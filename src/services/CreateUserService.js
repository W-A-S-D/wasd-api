let prisma = require("../prisma")

class CreateUserService {
    async execute(nome, email, pass, acess, avatar_url) {

        let user = await prisma.user.findFirst({
            where: {
                email
            }
        }) 

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name: nome,
                    email,
                    password: pass,
                    Acess: acess,
                    avatar: avatar_url
                }
            })
        }

        return user
    }
}

module.exports = CreateUserService