let prisma = require("../../prisma")
const FindUserByIdService = require("./FindUserByIdService");

class ListUsersByCompanyService {
    async execute(user_id) {
        const user = await new FindUserByIdService().execute(parseInt(user_id));

        const usersList = await prisma.usuario.findMany({
            where: {
                fk_empresa: user.fk_empresa
            }
        });

        if (!usersList) {
            throw new Error("Impossible to reach")
        }

        return usersList;
    }
}


module.exports = ListUsersByCompanyService;