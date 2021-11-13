let prisma = require("../../prisma")


class ListUsersService {
    execute = async() => {
        const usersList = await prisma.usuario.findMany();

        if (!usersList) {
            throw new Error("Impossible to reach")
        }

        return usersList;

    }
}


module.exports = ListUsersService;