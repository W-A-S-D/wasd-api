let prisma = require("../prisma")
let bcrypt = require("bcryptjs");

class CreateUserService {
    async execute(nome, email, pass, acess, avatar_url) {

        let user = await prisma.user.findFirst({
            where: {
                email
            }
        }) 

        const passwordHash = await bcrypt.hash(pass, 8)

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name: nome,
                    email,
                    password: passwordHash,
                    Acess: acess,
                    avatar: avatar_url
                }
            })
        }

        return user
    }
}

module.exports = CreateUserService