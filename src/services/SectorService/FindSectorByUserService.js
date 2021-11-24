let prisma = require("../../prisma")



class FindSectorByUserService {
    execute = async(fkUser) => {
        const sectors = await prisma.setor.findMany({
            where: {
                fk_usuario: fkUser
            }
        });

        return sectors;
    }
}


module.exports = FindSectorByUserService;