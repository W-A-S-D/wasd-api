const prisma = require("../../prisma");

class ListRequestService {
    execute = async() => {
        const requestList = await prisma.pedido.findMany();

        if (!requestList) {
            throw new Error("Impossible to reach")
        }

        return requestList;

    }
}



module.exports = ListRequestService;