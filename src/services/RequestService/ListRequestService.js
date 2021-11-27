const prisma = require("../../prisma");

class ListRequestService {
    execute = async(fk_usuario) => {
        const requestList = await prisma.pedido.findMany({
            where: {
                fk_usuario
            }
        });

        if (!requestList) {
            throw new Error("Impossible to reach")
        }

        return requestList;

    }
}



module.exports = ListRequestService;