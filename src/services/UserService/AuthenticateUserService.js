let prisma = require("../../prisma")
let { sign } = require("jsonwebtoken")
let bcrypt = require("bcryptjs");

class AuthenticateUserService {
    async execute(email, pass) {
        const user = await prisma.usuario.findFirst({
            where: {
                email
            }
        })

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passMatch = await bcrypt.compare(pass, user.senha)

        if (!passMatch) {
            throw new Error("Email/Password incorrect")
        }

        const token = sign({
            email: user.email
        }, process.env.JWT_SECRET, {
            subject: user.usuario_id.toString(),
            expiresIn: "1d"
        })

        return { token, user }
    }
}

module.exports = AuthenticateUserService;