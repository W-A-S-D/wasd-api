let prisma = require("../../prisma")

class UpdateRequestService {
    async execute(idRequest, status) {

        const request = await prisma.pedido.update({
            where: {
                pedido_id: idRequest
            },
            data: {
                status
            }
        })

        return request;
    }
}

module.exports = UpdateRequestService;