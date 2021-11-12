let prisma = require("../../prisma")


class ListSectorsService {
    execute = async() => {
        const sectorsList = await prisma.setor.findMany();

        if (!sectorsList) {
            throw new Error("Impossible to reach")
        }

        return sectorsList;

    }
}


module.exports = ListSectorsService;