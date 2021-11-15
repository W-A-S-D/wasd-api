let prisma = require("../../prisma")


class ListUsersByCompanyService {
    async execute(fkCompany) {
        const usersList = await prisma.usuario.findMany({
            where: {
                fk_empresa: fkCompany
            }
        });

        if (!usersList) {
            throw new Error("Impossible to reach")
        }

        return usersList;
    }
}


module.exports = ListUsersByCompanyService;